import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const BeginFeedback = () => {

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
    <>
        <div>
            <img src={require("../App/image/feedback.jpeg")} alt="feedback picture" />
        </div>
          <Link to="/Feeling"> <Button variant="contained">Proceed to Feedback</Button></Link>
    </>
  )
  
};

export default BeginFeedback;
