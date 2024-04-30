import{Outlet, Navigate} from 'react-router-dom'


//This controls what routes can be accessed on the user.
const PrivateRoutes = ({children, ...rest}) =>{
    
    let auth = {'token': true}//if this is true, then the user must have succesfully logged in and can now access all routes/pages
    
    return(
        auth.token ? <Outlet/> : <Navigate to ="/"/>
    )
}

export default PrivateRoutes