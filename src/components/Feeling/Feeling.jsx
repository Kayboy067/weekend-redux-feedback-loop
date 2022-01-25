import React from 'react';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory, Link } from 'react-router-dom';


const Feeling = () => {
  
  const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState('');

    const handleSubmit = () => {
        dispatch({
            type: 'SUBMIT_FEELING',
            payload: feeling
        })
      history.push("/understanding")

    }
  
  return (
  <div>
      <h1>How are you feeling today?</h1>
     
        <FormControl sx={{ m: 2, minWidth: 320 }}>
          <InputLabel variant="standard" feeling={feeling}>
            Feeling?
          </InputLabel>
          <NativeSelect
            onChange={(event) =>setFeeling(event.target.value)}
            defaultValue={0}
            inputProps={{
              name: 'feeling',
              id: 'feeling-feedback',
            }}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </NativeSelect>
        </FormControl> <br />
            
        <Button variant="contained" onClick={handleSubmit}>NEXT</Button>
  </div>
  );
};

export default Feeling;
