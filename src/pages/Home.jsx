import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Question from '../components/Question';

const Home = () => {

    const questions = useSelector(state => state.questionReducer.questions)

    return (
        <div className='home'>
            <header>
                <Navbar /> 
                <Banner />
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="collection">
                                {questions && questions.map((question, index) =>
                                    <Link to="#!" className="collection-item blue-text text-darken-3" key={ index }><span className="badge blue white-text">1</span>{ question.category }</Link>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col s12 m8">
                            <div className="questions-informations">
                                <span>8 questions</span>
                                <Link to="/question" className="waves-effect waves-light btn-small blue">
                                    <i className="material-icons right">arrow_forward</i>
                                    Poser une question
                                </Link>
                            </div>
                            {questions && questions.map((question, index) =>
                                <Question question={ question } key={ index }/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
