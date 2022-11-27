import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore ,getFirestore } from "redux-firestore";
import { reactReduxFirebase ,getFirebase } from "react-redux-firebase";
import firebaseConfig from '../../config/firebaseConfig';

export const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig)
    )
);