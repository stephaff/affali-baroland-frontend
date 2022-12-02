import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import db from '../config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { authentification } from '../redux/actions/actions';

const Inscription = () => {

    const auth = getAuth()
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)
    console.log(user)
    

    const inscrire = () => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => 
                  
                { 
                    const user = {
                        nom: nom,
                        email: email,
                        password: password,
                        id: cred.user.uid
                  }
                    addDoc(collection(db, "users"), user )
                .then(() => 
                    {
                        localStorage.setItem('user', JSON.stringify(user))
                        dispatch(authentification(user))
                        setNom('')
                        setEmail('')
                        setPassword('')
                        setPassword('')
                    }
                )    
                .catch (e => console.error(e))  } 
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
                        <h4>Créer mon compte</h4>
                        <label htmlFor="nom" className='browser-default'>Nom</label>
                        <input type="text" id='nom' className="browser-default" onChange={ e => setNom(e.target.value)} required/>
                        <label htmlFor="email" className='browser-default'>Email</label>
                        <input type="email" id='email' className="browser-default" onChange={ e => setEmail(e.target.value)} required/>
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id='password' className="browser-default" onChange={ e => setPassword(e.target.value)} required/>
                        <label htmlFor="passwordConfirm">Mot de passe (confirmation)</label>
                        <input type="password" id='passwordConfirm' className="browser-default" onChange={ e => setPasswordConfirm(e.target.value)} required/>
                        <Link to="/" className="btn" onClick={ inscrire }>Inscription</Link>
                        <p>
                            Si vous avez déjà un compte, vous pouvez vous <Link to='/connexion'>connecter</Link>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Inscription;
