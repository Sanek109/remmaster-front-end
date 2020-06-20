import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import productsReducer from "./productsReducer";
import basketReducer from "./basketReducer";
import repairsReducer from "./repairsReducer";

let reducers = combineReducers({
    productsReducer,
    basketReducer,
    repairsReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
