import React, { useState, useEffect } from 'react';
import './ReservationPage.css';



function ReservationsPage() {
    
    localStorage.removeItem('cartItems');
    localStorage.setItem('reservationSelected', false);

    /**
     Here would be where the client should use the MintHouse API to Fetch the reservations associated with the personID.
     .
     .
     */


     let data = ["responseData"]//this value is suppose to mimic the json file returned from the fetch that would return an array where each index
                                                        // is a reservation and you would have to grab only the information you want from each index text before cycling to
                                                        // the next index. We just put something in the array so that the length is at least 1 but it would likely be more with the real API call.

     const mintHouseReservations = [];//this is the matrix that will store the each reservation
     
     //Here is the loop where you would cycle through each index in the response data
     for (let i = 0; i < 2; i++) {
        let reservationID
        let arrivalDate
        let departureDate
        let hotelCode
        let unitCode

        for(let j = 0; j < 5; j++){
            
            //here we would want to set each variable equal to their respective values of each reservation and we have to do this for each resevation in the response file.
            //for our purposes we are hard coding the values, but ideally we would want to do something like data[0].data.Id to get the reservation id of the first index (first reservation)
            reservationID = "1234";
            hotelCode = "Austin, TX";
            unitCode = "279";
            arrivalDate = ("2024-05-01T08:03:37.220Z").substring(0,10);
            departureDate = ("2024-05-06T08:03:37.220Z").substring(0,10);
        }
            mintHouseReservations.push([]);
            mintHouseReservations[i].push([reservationID, hotelCode, unitCode, arrivalDate, departureDate]);
     }

    for (let i = 0; i < mintHouseReservations.length; i++)
    {
        const fetchLink = "http://localhost:8000/reservation/" + mintHouseReservations[i][0][0];

        const checkDatabaseForReservation = async()=>{
            const checkReservation = await fetch(fetchLink);
            let reservation
            
            if (checkReservation.ok){
                const data = await checkReservation.json();
                reservation = data.reservation[0];
            }

            if (reservation === undefined){
                const addReservationToDatabase = await fetch('http://localHost:5000/reservation', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        personID: localStorage.getItem('personID'),
                        reservationID: mintHouseReservations[i][0][0],
                        hotelAddress: mintHouseReservations[i][0][1],
                        roomNum: mintHouseReservations[i][0][2],
                        startDate: mintHouseReservations[i][0][3],
                        endDate: mintHouseReservations[i][0][4]
                    })
                })
                await addReservationToDatabase.json();
            }
        }
        
        checkDatabaseForReservation();
    }


    const [reservations, setReservations] = useState([]);

    const fetchLink = "http://localhost:8000/reservation/account/" + localStorage.getItem('personID');

    
    useEffect(() => {
        const fillReservationPage = async()=>{
            const getReservations = await fetch(fetchLink);
            let reservation
            let newReservationData = []
        
            if (getReservations.ok){
                const data = await getReservations.json();
                reservation = data.reservation;
            }

            for (let i = 0; i < reservation.length; i++)
            {
                newReservationData.push({id: reservation[i].reservationID, name: reservation[i].hotelAddress, page: '/shop', fullReservationInfo: reservation[i]})
            }

            setReservations(prevState => [...prevState, ...newReservationData]);
        }
        
        fillReservationPage();
    }, []);
    

    //This variable holds all the current active reservations associated with the account
    const ReservationClick = (reservation) => {
        window.location.href = reservation.page;
        
        reservation = reservation.fullReservationInfo;
        localStorage.setItem('reservationID', reservation.reservationID);
        localStorage.setItem('hotelAddress', reservation.hotelAddress);
        localStorage.setItem('startDate', reservation.startDate);
        localStorage.setItem('endDate', reservation.endDate);
        localStorage.setItem('reservationSelected', true);
    };

    return (
    <div class="MainContainer">
        <h2>Your Reservations</h2>
        <ul class="ReservationList">
            {reservations.map((reservation) => (
                <li key={reservation.id} className="IndividualReservationBox" onClick={() => ReservationClick(reservation)}> {reservation.name} </li>
            ))}
        </ul>
    </div>
  );
}

export default ReservationsPage;