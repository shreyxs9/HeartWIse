import React from 'react';
import '../styles/Header.css';

function Header({name}) {
    return (
        <header className="header">
            <div className="header-logo">
                <img src="../logo.png" className='plogo' alt="MedHub 360 Logo" />
            </div>
            <div className="header-title">
                <h1>Welcome Back</h1>
                <h2>{name}</h2>
            </div>
        </header>
    );
}

export default Header;
