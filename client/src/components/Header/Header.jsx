import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <nav className="header-right">
                <h3 className="header-right__text">about</h3>
                <h3 className="header-right__text">projects</h3>
                <h3 className="header-right__text">skills</h3>
            </nav>
        </div>
    )
}

export default Header;
