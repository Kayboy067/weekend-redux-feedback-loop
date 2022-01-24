import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const Comments = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SUBMIT_COMMENTS',
            payload: comments
        })
      history.push("/review")

    }
  
  return (
  <div>
      <h1>Any comments you want to leave?</h1>
      <form onClick={handleSubmit} className='form'>
      <Input placeholder="Comments" onChange={(event) => setComments(event.target.value)}/>
      
      <br /> <br />
            
        <Button type="submit" value= "NEXT" variant="outlined">
        NEXT</Button>
      </form>
  </div>
  );
};

export default Comments;
