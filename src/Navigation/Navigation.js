import React from 'react';
import './Navigation.css';
// import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <header className="navigation-container">
            <div className="navigation-container__users"><a>All Users</a></div>
            <nav className="navigation-container__main-nav">
                <ul className="navigation-container__main-nav__links">
                    <li className="navigation-container__main-nav__link"><a>Login</a></li>
                    <li className="navigation-container__main-nav__link"><a>Signup</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;