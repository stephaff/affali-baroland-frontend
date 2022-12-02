import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Question = ({ question }) => {

    return (
        <div className="card">
            <div className="card-content">
                <Link to="" className="card-title question black-text">
                    { question.title }
                </Link>
                <p className='grey-text'>{ moment(question.createdAt.toDate()).calendar() }</p>
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
