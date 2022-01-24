import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (
    state = {
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    },
        action) => {
    switch (action.type) {
        case "SUBMIT_FEELING":
            
            return {...state, feeling: (state.feeling= action.payload)}
            
        case "SUBMIT_UNDERSTANDING":
            return {...state, understanding:(state.understanding= action.payload)}  

        case "SUBMIT_SUPPORT":
            return {...state, support:(state.support= action.payload)}  

        case "SUBMIT_COMMENTS":
            return {...state, comments:(state.comments= action.payload)}    


    }
    return state;
    
}





const store = createStore(
    combineReducers({
        feedback: feedback
        
    }),
    applyMiddleware(logger),
);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
