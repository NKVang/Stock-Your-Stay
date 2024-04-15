import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "react-bootstrap";
import * as images from './assets';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ItemPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`/api/items/${itemId}`);
        setItemDetails(response.data);
      } catch (error) {
        console.error("Failed to get item details:", error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('/api/cart', {
        itemId,
        quantity,
      });
      const updatedCart = [...cartItems, response.data];
      setCartItems(updatedCart);
      navigate('/cart');
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  if (!itemDetails) return <div>Loading...</div>;

  return (
    <div className="item-page">
      <div className="item-details">
        <img src={itemDetails.imageUrl} alt={itemDetails.name} />
        <h2>{itemDetails.name}</h2>
        <p>{itemDetails.description}</p>
        <p>{`$${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(itemDetails.price)}`}</p>
        <div className="quantity-selector">
          <Button variant="light" onClick={decrementQuantity}>
            -
          </Button>
          <span>{quantity}</span>
          <Button variant="light" onClick={incrementQuantity}>
            +
          </Button>
          <Button variant="success" onClick={handleAddToCart}>
            <AddShoppingCartIcon />
          </Button>
        </div>
      </div>
      <div className="item-image">
        <img src={itemDetails.imageUrl} alt={itemDetails.name} />
      </div>
    </div>
  );
};

export default ItemPage;