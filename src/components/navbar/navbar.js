import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'; 
import contactImg from '../../assets/contactImage.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return(
        <nav className = "navbar">
            <img src = {logo} alt= "Logo" className = "logo" height = "150px"/>
            <div className = "desktopMenu">
                <Link className = "desktopMenuListItem">Home</Link>
                <Link className = "desktopMenuListItem">About</Link>
                <Link className = "desktopMenuListItem">Skills</Link>
                <Link className = "desktopMenuListItem">Courses</Link>
                <Link className = "desktopMenuListItem">Projects</Link>
            </div>
            <button className = "desktopMenuButton" onClick = {sendEmail}>
                <img src = {contactImg} alt = "menu icon" className = "contactButtonImg" />Contact Me!
            </button>
        </nav>
    );
}

function sendEmail() {
    window.location.href = "mailto:${pwangsuper@gmail.com}";
}

export default Navbar;