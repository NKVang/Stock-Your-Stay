import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Button,
  Container,
  Toast,
  ToastContainer,
  Form,
  InputGroup,
  CloseButton,
} from "react-bootstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useBase } from "../../assets/hooks/useBase";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LinearProgress from "@mui/material/LinearProgress";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { pascalCase } from "../../components/Functions";

import "../../components/ItemPage.css";
import "../../components/shop_style.css";

import Breadcrumbs from "../../components/Breadcrumbs";

const ItemPage = () => {
  var base = useBase();

  const { recordId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  // eslint-disable-next-line
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageClicked, setImageClicked] = useState(false);

  const location = useLocation();
  const category = location?.state?.category;

  // set loading to true when product hasn't been fetched, aka when it is null
  useEffect(() => {
    if (!product) setLoading(true);
  }, [product]);

  // fetch item info from airtable
  useEffect(() => {
    base("Products").find(recordId, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }

      setProduct(record);

      // set loading to false since item is now fetched
      setLoading(false);
    });
  }, [recordId, base]);

  // add item to cart
  const addItemToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  // update local copy of cart
  const updateLocalStorage = (newItem) => {
    localStorage.setItem("cartItems", JSON.stringify(newItem));
  };

  // function to handle event when add to cart button is clicked
  const handleAddToCart = async () => {
    // set add to cart loading to true (displays adding item to cart loading screen)
    setAddToCartLoading(true);

    try {
      // the current item
      const currentRecord = await base("Products").find(recordId);

      // the stock for current item in the airtable
      const availableStock = currentRecord.fields.stocked;

      // same as above but for local copy
      const localCartItems = JSON.parse(localStorage.getItem("cartItems"));

      // get the current item from the local copy if local copy exists
      const storedItem = localCartItems?.find(
        (item) => item.id === currentRecord.id
      );

      // compare quantity added against the available stock
      if (
        quantity > availableStock ||
        storedItem?.quantity + quantity > availableStock
      ) {
        // if quantity is greater than available stock, show toast and do not add item to cart
        setError("Insufficient stock.");
        return;
      }

      // if quantity is 0, show toast and do not add item to cart
      if (quantity === 0) {
        setError("Invalid quantity.");
        return;
      }

      // build item to be added to cart
      const item = {
        id: currentRecord.id,
        name: currentRecord.fields.title,
        image: `${currentRecord.fields.image[0].url}`,
        quantity: quantity,
        price: product.fields.price,
        pricePerQuantity: quantity * product.fields.price,
        category: category,
      };

      // add item to cart
      addItemToCart(item);

      // build updated cart with existing local copy
      const updatedCartItems = localCartItems
        ? [...localCartItems, item]
        : [item];

      // if local copy doesn't exist, build new local copy
      if (localCartItems === null) updateLocalStorage(updatedCartItems);
      // otherwise check if the item already exists in the local cart
      // (so item won't be added twice as two different indexes in array)
      else {
        // get the item from the local copy of cart
        const itemExists = localCartItems.some(
          (localItem) => localItem.id === item.id
        );

        // if item already exists in cart, update the quantity (add new quantity to existing quantity)
        if (itemExists) {
          const updatedItems = localCartItems.map((localItem) => {
            if (localItem.id === item.id) {
              return {
                ...localItem,
                // update quantity
                quantity: localItem.quantity + item.quantity,
                // update price per quantity
                pricePerQuantity:
                  (localItem.quantity + item.quantity) * localItem.price,
              };
            }
            return localItem;
          });

          // Update local storage with the updated items
          updateLocalStorage(updatedItems);
        } else {
          // If item doesn't already exist in cart, simply push item to cart
          updateLocalStorage([...localCartItems, item]);
        }
      }

      // empty cart to avoid duplicated items being added
      setCartItems([]);

      // navigate to the cart after 1000ms
      setTimeout(() => {
        navigate("/shopping-cart");
      }, 1000);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      // set add to cart loading to false
      setAddToCartLoading(false);
    }
  };

  // function to increment quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // function to decrement quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  // function to show toast when error occurs, i.e. invalid quantity provided or insufficient stock
  function showToast() {
    return (
      // if error is called, show toast
      error && (
        <ToastContainer position="middle-center">
          <Toast onClose={() => setError(false)} autohide={true} delay={5000}>
            <Toast.Header
              style={{
                backgroundColor: "var(--mhDarkGreen)",
                color: "#ffffff",
              }}
              closeVariant="white"
            >
              <ErrorOutlineIcon style={{ marginRight: "10px" }} />
              <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body style={{ backgroundColor: "#ffffff" }}>
              {error === "Insufficient stock."
                ? "Unable to add item to cart."
                : "Invalid quantity."}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )
    );
  }

  function loadingToCart(product) {
    return addToCartLoading ? (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, .8)",
          zIndex: 9999,
        }}
      >
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div
            className="text-center loading-div-mobile2"
            style={{ width: "20vw" }}
          >
            <h5 style={{ color: "white" }}>
              Adding {product.fields.title} to cart
            </h5>
            <LinearProgress
              sx={{
                backgroundColor: "var(--mhDarkGreen)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "var(--mhLightGreen)",
                },
              }}
            />
          </div>
        </div>
      </div>
    ) : null;
  }

  // function to change quantity manually, going into input box and typing a quantity
  const handleManualQuantity = (event) => {
    // get the value inside input
    const newQuantity = parseInt(event.target.value);

    // if new quantity is a number and greater than 0 set it as the current quantity
    if (!isNaN(newQuantity) && newQuantity > 0) setQuantity(newQuantity);
    // if new quantity is not a number, show toast
    else if (isNaN(newQuantity)) setError("Invalid quantity.");
    // otherwise set quantity to 1, i.e. for when quantity is set to 0
    else {
      setQuantity(1);
    }
  };

  // handling of the product image being clicked
  const handleImgClick = () => {
    setImageClicked(true);
  };

  // if image is clicked show div with zoomed image
  function showZoomedImage() {
    return (
      imageClicked && (
        <div
          className="zoomed-img-container d-flex align-items-center justify-content-center"
          onClick={closeZoomedImg}
        >
          <CloseButton
            className="zoomed-img-close-btn"
            onClick={closeZoomedImg}
          />
          <img
            src={product.fields.image[0].url}
            alt={product.fields.title}
            style={{ maxWidth: "100vw", maxHeight: "50vh" }}
          />
        </div>
      )
    );
  }

  // when close button is clicked, set image clicked to false to close div
  function closeZoomedImg() {
    setImageClicked(false);
  }

  return (
    <Container className="individual-container">
      {loadingToCart(product)}
      {showToast()}
      {showZoomedImage()}
      {isLoading ? (
        <div
          className="d-flex align-items-between justify-content-center"
          style={{ marginTop: "15vh" }}
        >
          <div
            className="text-center loading-div-mobile"
            style={{ width: "20vw" }}
          >
            <h5>Loading...</h5>
            <LinearProgress
              sx={{
                backgroundColor: "var(--mhDarkGreen)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "var(--mhLightGreen)",
                },
              }}
            />
          </div>
        </div>
      ) : (
        product && (
          <>
            <Breadcrumbs
              category={category}
              productName={product.fields.title}
            />
            <Row className="d-flex align-items-center">
              <Col
                xs={12}
                sm={6}
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={product.fields.image[0].url}
                  alt={pascalCase(product.fields.title)}
                  style={{ maxWidth: "60%", maxHeight: "60%" }}
                  onClick={handleImgClick}
                  className="indv-page-item"
                />
              </Col>
              <Col xs={12} sm={6} md={6} className="indv-item-details">
                <Row>
                  <h3>{product.fields.title}</h3>
                </Row>

                <Row>
                  <p>
                    {pascalCase(product.fields.title)} is a product. Filler
                    description to fill up text as the airtable field is
                    missing.
                  </p>
                </Row>

                <Row>
                  <p>
                    {`${new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(product.fields.price)}`}
                  </p>
                </Row>

                <Row style={{ marginBottom: "20px" }}>
                  <Form>
                    <InputGroup>
                      <Button
                        className="quantity-button"
                        variant="light"
                        onClick={() => decrementQuantity()}
                      >
                        -
                      </Button>
                      <Form.Control
                        value={quantity}
                        style={{
                          border: "1px solid #f3f3f3",
                          maxWidth: "50px",
                          textAlign: "center",
                          fontSize: "0.9rem",
                        }}
                        onChange={handleManualQuantity}
                      />
                      <Button
                        className="quantity-button"
                        variant="light"
                        onClick={() => incrementQuantity()}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </Form>
                </Row>

                <Button onClick={handleAddToCart} className="btn-success">
                  <AddShoppingCartIcon /> Add to Cart
                </Button>
                <Button onClick={() => navigate("/shop")} className="btn-dark">
                  Continue Shopping
                </Button>
              </Col>
            </Row>
          </>
        )
      )}
    </Container>
  );
};

export default ItemPage;
