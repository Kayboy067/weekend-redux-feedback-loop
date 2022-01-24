import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const BeginFeedback = () => {
  return (
    <>
    <div>
        <img src={require("../App/image/feedback.jpeg")} alt="feedback picture" />
    </div>
    <Link to="/Feeling"> <button> Proceed to Feedback </button></Link>
    </>
  )
  
};

export default BeginFeedback;
