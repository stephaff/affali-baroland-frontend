import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <div className="container">
                    <Link to="/" className="brand-logo black-text">Baroland</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/profil" className='grey-text text-darken-1'>affalistephane@gmail.com</Link></li>
                        <li><Link to="/connexion" className='grey-text text-darken-1'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
