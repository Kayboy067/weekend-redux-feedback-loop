import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import BeginFeedback from '../BeginFeedback/BeginFeedback'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    fetchFeedback();
  }, [])

  const fetchFeedback = () => {
    console.log('In Fetch Feedback', fetchFeedback);

    // send request to the server side
    axios.get('/api/feedback')
    .then(res =>{
      console.log('Feedback from database', res.data);

      // send data to the feedback reducer
      dispatch({
        type: 'SET_FEEDBACK',
        payload: res.data
      })
    }).catch(err =>{
      console.log('axios GET err', error);
    })
  }
  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <nav>
        <Link to="/Feeling">Feeling</Link>
        <Link to="/Understanding">Understanding</Link>
        </nav>
      <Route path="/" exact>
        <BeginFeedback />
      </Route>
      <Route path="/Feeling" exact>
      <Feeling />
      </Route>

      <Route path="/Understanding" exact>
      <Understanding />
      </Route>

      </Router>
    </div>
  );
}

export default App;
