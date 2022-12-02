import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Question from '../components/Question';
import { collection, getDocs, orderBy } from "firebase/firestore"; 
import db from '../config/firebaseConfig';
import { getQuestion } from '../redux/actions/actions';

const Home = () => {

    const dispatch = useDispatch();

    const questions = useSelector(state => state.questionReducer.questions)
    console.log(questions)
    

    useEffect(() => {
    
        let tabQuestion = [];
        const getAllQuestions = async () => {
            const querySnapshot = await getDocs(collection(db, "questions"), orderBy("createdAt"));
            querySnapshot.forEach((doc) => {
                tabQuestion.push({ ...doc.data(), id: doc.id })
              });
              dispatch(getQuestion(tabQuestion))
        }
        
        getAllQuestions()

    }, []);

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
                                {questions && questions.map((question) =>
                                    <Link to="#!" className="collection-item blue-text text-darken-3" key={ question.id }>
                                        <span className="badge blue white-text">1</span>
                                        <span>{ question.category }</span>
                                    </Link>
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
                            {questions && questions.map((question) =>
                                <Question question={ question } key={ question.id }/>
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
