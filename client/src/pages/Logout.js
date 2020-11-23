import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Logout(props) {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div className="text-center">
            {Auth.loggedIn() ? (
                <>
                    <Link to="/profile">Me</Link>
                    <a href="/" onClick={logout}>
                        Logout
                            </a>
                </>
            ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
        </div>
    )
}

export default Logout;