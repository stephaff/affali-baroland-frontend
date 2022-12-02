import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth ,signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/actions';

const Navbar = () => {

    const auth = getAuth()
    const dispatch = useDispatch()

    const seDeconnecter = () => {
        signOut(auth)
            .then(() =>
                {
                    localStorage.removeItem('user')
                    dispatch(logout())
                }
            )
            .catch(e => 
                console.log(e.message)    
            )
    }
    return (
        <nav>
            <div className="nav-wrapper white">
                <div className="container">
                    <Link to="/" className="brand-logo black-text">Baroland</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/profil" className='grey-text text-darken-1'>affalistephane@gmail.com</Link></li>
                        <li><Link to="/connexion" className='grey-text text-darken-1' onClick={ seDeconnecter }>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
