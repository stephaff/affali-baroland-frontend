import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Inscription = () => {

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const inscrire = () => {
        console.log(nom+' '+email+' '+password+' '+passwordConfirm)
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
                        <Link href="" className="btn" onClick={ inscrire }>Inscription</Link>
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
