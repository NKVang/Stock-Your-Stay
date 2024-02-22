import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemPage.css';

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
        console.error("Failed to fetch item details:", error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const handleAddToCart = () => {
<<<<<<< Updated upstream
    
    console.log(`Added ${quantity} of ${itemDetails.name} to cart.`);
    // This is the quantity displaying how many items will be added
=======
    console.log(`Added ${quantity} of ${itemDetails.name} to cart.`);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
>>>>>>> Stashed changes
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
          <button onClick={decrementQuantity}>
            <img src="quantitybutton.png" alt="Decrease quantity" />
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            min="1"
            style={{ width: '60px' }}
          />
          <button onClick={incrementQuantity}>
            <img src="quantitybutton.png" alt="Increase quantity" />
          </button>
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
