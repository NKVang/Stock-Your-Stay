import React, { useState } from 'react';
import './ReservationPage.css';

function ReservationsPage() {
    
    const [reservations, setReservations] = useState([{ id: 1, name: 'Reservation 1', destination: '/shop' },
                                                        { id: 2, name: 'Reservation 2', destination: '/shop' },
                                                        { id: 3, name: 'Reservation 3', destination: '/shop' }]);

    const ReservationClick = (destination) => {
    window.location.href = destination;
    };

    return (
    <div class="MainContainer">
        <h2>Your Reservations</h2>
        <ul class="ReservationList">
            {reservations.map((reservation) => (
                <li key={reservation.id} className="IndividualResItem" onClick={() => ReservationClick(reservation.destination)}> {reservation.name} </li>
            ))}
        </ul>
    <button class="AddResButton" onClick={()=> window.location.href = 'Add-Reservation'}>Add Reservation</button>
    </div>
  );
}

export default ReservationsPage;