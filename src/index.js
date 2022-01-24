import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// feelingReducer
const feelingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SUBMIT_FEELING':
            return action.payload;
    }
    return state;
}


const store = createStore(
    combineReducers({
        feelingReducer,
    }),
    applyMiddleware(logger),
);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
