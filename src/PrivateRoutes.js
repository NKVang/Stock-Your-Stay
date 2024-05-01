import{Outlet, Navigate} from 'react-router-dom'


//This controls what routes can be accessed on the user.
export const LoginHideRoutes = ({children, ...rest}) =>{

    let loggedIn = localStorage.getItem('loggedIn');
    loggedIn = loggedIn === 'true';

    let auth = {'token': loggedIn}//if this is true, then the user must have succesfully logged in and can now access all routes/pages

    return(auth.token ? <Outlet/> : <Navigate to ="/"/>)
}

export const ReservationHideRoutes = ({children, ...rest}) =>{

    let reservSelected = localStorage.getItem('reservationSelected');
    reservSelected = reservSelected === 'true';

    let auth = {'reservSelected': reservSelected}//if this is true, then the user must have succesfully logged in and can now access all routes/pages
    
    return(auth.reservSelected ? <Outlet/> : <Navigate to ="/reservations"/>)
}
