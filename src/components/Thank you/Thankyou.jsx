import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Thankyou = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const reset = () => {
        console.log("submitted");
        history.push("/")
        dispatch ({
            type: "EMPTY"
        })
    };

    return (
        <div>
            <header><strong>Feedback</strong></header>
            <h2>Thank You!</h2>
            <Button variant="contained" onClick={reset}>Leave New Feedback</Button>
        </div>
    );
};

export default Thankyou;
