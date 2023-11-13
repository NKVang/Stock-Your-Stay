import * as React from 'react';
import LocationCard from './LocationCard.js';
import Footer from './Footer.js';
import LocationBody from './LocationBody.js';

function LocationStay() {
  return (
    <div>
        <LocationCard />
        <LocationBody />
        <Footer />
    </div>
  );
}

export default LocationStay;