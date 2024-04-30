import React from 'react';
import './ReservationPage.css';


function ReservationsPage() {
    
    //This variable holds all the current active reservations associated with the account
    const reservations = [{ id: 1, name: 'Reservation 1', destination: '/shop' },
                    { id: 2, name: 'Reservation 2', destination: '/shop' },
                    { id: 3, name: 'Reservation 3', destination: '/shop' }]

    const ReservationClick = (destination) => {
        window.location.href = destination;
    };

    return (
    <div class="MainContainer">
        <h2>Your Reservations</h2>
        <ul class="ReservationList">
            {reservations.map((reservation) => (
                <li key={reservation.id} className="IndividualReservationBox" onClick={() => ReservationClick(reservation.destination)}> {reservation.name} </li>
            ))}
        </ul>
    <button class="AddReservationButton" onClick={()=> window.location.href = 'Add-Reservation'}>Add Reservation</button>
    </div>
  );
}

export default ReservationsPage;