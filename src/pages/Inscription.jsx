import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/actions';

const Inscription = () => {

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch()

    const inscrire = async() => {

        const response = await fetch('/api/user/inscription', {
            method : "post",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({ email, password })
        })
        const json = await response.json()
        
        if(!response.ok){
            console.log(json.error)
        }

        if(response.ok){
            console.log(json)
            localStorage.setItem('user', JSON.stringify(json))
            dispatch(login(json)) 
        }
        
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
                        <input type="text" id='nom' className="browser-default" onChange={ e => setNom(e.target.value)} />
                        <label htmlFor="email" className='browser-default'>Email</label>
                        <input type="email" id='email' className="browser-default" onChange={ e => setEmail(e.target.value)} />
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id='password' className="browser-default" onChange={ e => setPassword(e.target.value)} />
                        <label htmlFor="passwordConfirm">Mot de passe (confirmation)</label>
                        <input type="password" id='passwordConfirm' className="browser-default" onChange={ e => setPasswordConfirm(e.target.value)} />
                        <Link to="" className="btn" onClick={ inscrire }>Inscription</Link>
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
