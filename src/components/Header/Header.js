import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div className='top-nav-items'>
            <nav className="header-container">

                <div className='logo'>
                    <p className='logo-type'><FontAwesomeIcon icon={faDumbbell} /></p>
                    <span className="header-text">STRENGTH</span>
                    <span className="header-text2">SPHERE</span>
                </div>
                <div className='nav-menu'>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/login">Login</a>
                </div>

            </nav>
        </div>
    );
};

export default Header;