import {  NavLink, } from "react-router-dom";



function NavBar () {


    return(
    
        <>

    <nav>
<NavLink to="/">Home</NavLink>|
<NavLink to="/apartments">Apartments</NavLink>|
<NavLink to="/apartments/create">Create apartments</NavLink>|

</nav>
    
        </>
    )
    
    
    }
    
    export default NavBar ;