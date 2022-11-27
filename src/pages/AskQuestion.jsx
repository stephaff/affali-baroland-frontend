import React from 'react';
import { Link } from 'react-router-dom';

const AskQuestion = () => {
    return (
        <div className='ask-question container' >
            <div className="row">
                <div className="col s 12 m8 offset-m2 add-question">
                    <Link  to="/" className="blue-text">
                        <i className="material-icons right">arrow_back</i>
                    </Link>
                    <h3 className='center-align'>Poser une question</h3>
                    <p className='grey-text'>
                        Vous rencontrez des problèmes? Notre communauté de développeurs est là pour vous aider!
                    </p>
                    <label for="title" className='browser-default'>Titre de la question</label><br />
                    <input type="email" id='title' className="browser-default" />
                    <label for="title" className='browser-default'>Contenu de la question</label><br />
                    <textarea rows="5" cols="50" />
                    <label for="category" className='browser-default'>Technologies / catégories</label><br />
                    <select id='technology' className='browser-default'>
                        <option value="React">React</option>
                        <option value="PHP">PHP</option>
                        <option value="NODE JS">NODE JS</option>
                        <option value="REDUX">REDUX</option>
                        <option value="HTML">HTML</option>
                    </select>
                    <Link className="waves-effect waves-light btn-small blue">
                        <i className="material-icons right">arrow_forward</i>
                        Poser une question
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AskQuestion;
