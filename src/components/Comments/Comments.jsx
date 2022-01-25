import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const Comments = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState('');

    const handleSubmit = () => {
        dispatch({
            type: 'SUBMIT_COMMENTS',
            payload: comments
        })
      history.push("/review")

    }
  
  return (
  <div>
      <h1>Any comments you want to leave?</h1>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off">
      
      <TextField id="filled-basic" label="Comments" variant="filled" onChange={(event) => setComments(event.target.value)}/>
      
      <br /> <br />
            
        <Button variant="contained" onClick={handleSubmit}>NEXT</Button>
      </Box>
  </div>
  );
};

export default Comments;
