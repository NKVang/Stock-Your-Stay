import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(null);
// Here we have itemID for the different items, navigate so when clicked on the item it directs to the item page

  useEffect(() => {
    // Placeholder for the actual fetch URL
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`/api/items/${itemId}`);
        const data = await response.json();
        setItemDetails(data);
      } catch (error) {
        console.error("Failed to fetch item details:", error);
        // Handle error or set default error itemDetails
      }
    };

    fetchItemDetails();
  }, [itemId]);

  if (!itemDetails) return <div>Loading...</div>;

  return (
    <div className="item-page">
      <div className="item-details">
        <img src={itemDetails.imageUrl} alt={itemDetails.name} />
        <h2>{itemDetails.name}</h2>
        <p>{itemDetails.description}</p>
        <p>{itemDetails.price}</p>
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    </div>
  );
};

export default ItemPage;
