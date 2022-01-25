import React from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import { useHistory} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

const Review = () => {
    const history = useHistory();
    const feedback = useSelector((store) => store.feedback)


    const handleSubmit = () => {
     axios.post("/api/feedback", feedback)
     .then((res) => {
         console.log("POST /feedback", res);
     })
     .catch((err) => {
     })
     history.push("/Thankyou");
    }

    return (
        <div>
            <h2>Review your Feedback</h2>
            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>


            <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
            <br></br>
        </div>
    )
    
};

export default Review;
