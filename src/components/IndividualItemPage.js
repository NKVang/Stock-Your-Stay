import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemPage.css';
import * as images from './assets';

const ItemPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`/api/items/${itemId}`);
        const data = await response.json();
        setItemDetails(data);
      } catch (error) {
        console.error("Failed to get item details:", error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${itemDetails.name} to cart.`);
    // Implement feedback for user here, e.g., a toast message or modal popup
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const isMobile = () => {
    return window.innerWidth < 576;
  };

  if (!itemDetails) return <div>Loading...</div>;

  return (
    <div className="item-page">
      <div className="item-details">
        <img src={itemDetails.imageUrl} alt={itemDetails.name} />
        <h2>{itemDetails.name}</h2>
        <p>{itemDetails.description}</p>
        <p>{`$${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(itemDetails.price)}`}</p>
        <div className="quantity-selector" style={{ position: 'relative', width: '380px', height: '95px', backgroundImage: `url(${images.quantitybutton.png})` }}>
          {/* Invisible button for decrement (-) */}
          <button onClick={decrementQuantity} style={{ position: 'absolute', left: 0, top: 0, width: '50%', height: '100%', background: 'transparent', border: 'none' }} />
          {/* Display quantity in the center */}
          <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold' }}>
            {quantity}
          </span>
          {/* Invisible button for increment (+) */}
          <button onClick={incrementQuantity} style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', background: 'transparent', border: 'none' }} />
          <button onClick={handleAddToCart} className="add-to-cart-button" style={{ position: 'absolute', right: '100px', top: '50%' }}>
            <img src={images.addtocart.png} alt="Add to Cart" />
          </button>
        </div>
        <button onClick={() => navigate(`/item/${itemId}`)}>View Item</button>
      </div>
      {isMobile()? (  /* Mobile View */
        <div className="mobile-view">
          <h2>{itemDetails.name}</h2>
          <p>{itemDetails.description}</p>
          <p>{`$${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(itemDetails.price)}`}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ) : (
        <div className="desktop-view">
          <img src={itemDetails.imageUrl} alt={itemDetails.name} />
        </div>
      )}
    </div>
  );
};

export default ItemPage;