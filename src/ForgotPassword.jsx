import React from 'react';
import { NavLink } from 'react-router-dom';

function ForgotPassword(props) {

    const NavLinkCSS=({isActive})=>{
         return{
            FontWeight: isActive? "bold" : "Normal",
            FontSize: isActive ? "23px" : "20px",
            color: isActive ? "red" : ""
         }
    }
    return (
       <nav className='main-nav'>
        <NavLink style={NavLinkCSS}>Forgot Password?</NavLink>
       </nav>
    );
}

export default ForgotPassword;