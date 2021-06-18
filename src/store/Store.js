import { createStore } from "redux";
import trackerReducers from "../reducers/trackerReducers";


export const store=createStore(trackerReducers)