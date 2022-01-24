import React from 'react';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const Understanding = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SUBMIT_UNDERSTANDING',
            payload: understanding
        })
      //history.push("/support")

    }
  
  return (
  <div>
      <h1>How well are you understanding the content?</h1>
      <form onClick={handleSubmit} className='form'>
      <FormControl sx={{ m: 2, minWidth: 320 }}>
        <InputLabel variant="standard" understanding={understanding} onChange={(event) =>setUnderstanding(event.target.value)}>
          Understanding?
        </InputLabel>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'understanding',
            id: 'understanding-feedback',
          }}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </NativeSelect>
      </FormControl> <br />
            
        <Button type="submit" value= "NEXT" variant="outlined">
        NEXT</Button>
      </form>
  </div>
  );
};

export default Understanding;
