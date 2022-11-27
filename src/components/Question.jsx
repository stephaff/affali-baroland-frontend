import React from 'react';
import { Link } from 'react-router-dom';

const Question = ({ question }) => {

    return (
        <div className="card">
            <div className="card-content">
                <Link to="" className="card-title question black-text">
                    { question.title }
                </Link>
                <p>12/10/2022</p>
                <p>{ question.contenu }</p>
                <div className="category">
                    <p className='blue-text'>2 réponses</p>
                    <Link to="" className='red-text'>{ question.category }</Link>
                </div>
            </div>
        </div>
    );
}

export default Question;
