import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { authentification } from '../redux/actions/actions';

const Connexion = () => {

    const auth = getAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const seConnecter = async() => {
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) =>
                {
                    localStorage.setItem('user', JSON.stringify(cred.user))
                    dispatch(authentification(cred.user))
                    setEmail('')
                    setPassword('')
                }
            )
            .catch(e =>
                console.log(e.message)    
            )
    }

    return (
        <div className='connexion'>
            <div className='connexion-container'>
                <div className="row">
                <div className="connexion-left col s12 m6 green lighten-1 valign-wrapper">
                    {/* <h3 className='white-text center'>DEV FORUM</h3> */}
                </div>
                <div className="connexion-right col s12 m6">
                    <div className="connexion-box">
                        <h4>Se connecter</h4>
                        <label htmlFor="email" className='browser-default'>Email</label>
                        <input type="email" id='email' className="browser-default" onChange={ e => setEmail(e.target.value)} />
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id='password' className="browser-default" onChange={ e => setPassword(e.target.value)} />
                        <Link to='/' className="btn" onClick={ seConnecter }>Connexion</Link>
                        <p>
                            Si vous n'avez pas de compte, vous pouvez vous <Link to='/inscription'>inscrire</Link>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;
