import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemPage.css'; 


const ItemPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(null);
  const [quantity, setQuantity] = useState(1); // Added state for quantity

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`/api/items/${itemId}`);
        const data = await response.json();
        setItemDetails(data);
      } catch (error) {
        console.error("Failed to fetch item details:", error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const handleAddToCart = () => {
    // Implement your add-to-cart logic here
    console.log(`Added ${quantity} of ${itemDetails.name} to cart.`);
    // For example, update global state, local storage, or send to backend
  };

  if (!itemDetails) return <div>Loading...</div>;

  return (
    <div className="item-page">
      <div className="item-details">
        <img src={itemDetails.imageUrl} alt={itemDetails.name} />
        <h2>{itemDetails.name}</h2>
        <p>{itemDetails.description}</p>
        <p>{itemDetails.price}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            min="1"
            style={{ width: '60px' }}
          />
          <button onClick={handleAddToCart}>
            <img src="addtocart.png" alt="Add to Cart" />
          </button>
        </div>
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    </div>
  );
};

export default ItemPage;
