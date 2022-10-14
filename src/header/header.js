import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header-container">
            <div className='logo'>
                <img src="../images/header.png" alt="Insta-icon" />
            </div>
            <div className='camera'>
                <Link to="/login">
                    <img src="../images/camera.png" alt="camera-icon" />
                </Link>
            </div>
        </div>
    )
}
export default Header;