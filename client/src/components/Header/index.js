import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';



const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };


    return (
        <header className="container headerContainer">
            <Link className="navbar-brand navHeader" to="/">
                Sheet Music Space
            </Link>
            <div className="container mx-auto justify-content-center">
                <nav className="nav navbar-light bg-light">
                    <div>
                        {Auth.loggedIn() ? (
                            <div id="navbarRight">
                                <Link to="/">Landing</Link>
                                <Link to="/Home">Home</Link>
                                <Link to="/profile">Profile</Link>
                                <a href="/" onClick={logout}>
                                    Logout
                            </a>
                            </div>
                        ) : (
                                <div id="navbarRight" >
                                    <Link to="/">Landing</Link>
                                    <Link to="/Home">Home</Link>
                                    <Link to="/login">Login</Link>
                                    <Link to="/signup">Signup</Link>
                                </div>
                            )}
                    </div>
                </nav>
            </div>
        </header >
    );
};

export default Header;