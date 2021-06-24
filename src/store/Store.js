import { createStore,compose, applyMiddleware } from "redux";
import trackerReducers from "../reducers/trackerReducers";
import {getFirebase, reduxReactFirebase} from 'react-redux-firebase'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import firebase from '../firebase/config'
import thunk from 'redux-thunk'

export const store=createStore (trackerReducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase),

)
    )