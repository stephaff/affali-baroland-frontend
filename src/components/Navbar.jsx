import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth ,signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/actions';

const Navbar = () => {

    const auth = getAuth()
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)

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
                    <Link className='sidenav-trigger' data-target="nav-mobile">
                        <i className="material-icons black-text">menu</i>
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/profil" className='grey-text text-darken-1'>{ user.email }</Link></li>
                        <li><Link to="/connexion" className='grey-text text-darken-1' onClick={ seDeconnecter }>Logout</Link></li>
                    </ul>
                    <ul className="sidenav" id="nav-mobile" >
                        <li><Link to="/profil" className='grey-text text-darken-1'>{ user.email }</Link></li>
                        <li><Link to="/connexion" className='grey-text text-darken-1' onClick={ seDeconnecter }>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
