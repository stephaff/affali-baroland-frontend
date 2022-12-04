import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addQuestion } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

const AskQuestion = ({ nom }) => {

    const [title, setTitle] = useState('');
    const [contenu, setContenu] = useState('');
    const [category, setCategory] = useState('');
    // const [authorName, setAuthorName] = useState('');

    const dispatch = useDispatch()

    const createQuestion = async() => {
        
        const response = await fetch('/api/questions', {
            method : "post",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({ title, contenu, category })
        })
        const json = await response.json()
        
        if(!response.ok){
            console.log(json.error)
        }

        if(response.ok){
            dispatch(addQuestion(json)) 
        }
    }

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
                    <label htmlFor="title" className='browser-default'>Titre de la question</label><br />
                    <input type="text" id='title' className="browser-default" onChange={ e => setTitle(e.target.value)} />
                    <label htmlFor="title" className='browser-default'>Contenu de la question</label><br />
                    <textarea rows="5" cols="50" onChange={ e => setContenu(e.target.value)} />
                    <label htmlFor="category" className='browser-default'>Technologies / catégories</label><br />
                    <select id='technology' className='browser-default' onChange={ e => setCategory(e.target.value)}>
                        <option value="React">React</option>
                        <option value="PHP">PHP</option>
                        <option value="NODE JS">NODE JS</option>
                        <option value="REDUX">REDUX</option>
                        <option value="HTML">HTML</option>
                    </select>
                    <Link to="/" className="waves-effect waves-light btn-small blue" onClick={ createQuestion }>
                        <i className="material-icons right">arrow_forward</i>
                        Poser une question
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AskQuestion;
