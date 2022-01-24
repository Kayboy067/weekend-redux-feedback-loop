import React from 'react';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const Support = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SUBMIT_SUPPORT',
            payload: support
        })
      history.push("/comments")

    }
  
  return (
  <div>
      <h1>How well are you being supported?</h1>
      <form onClick={handleSubmit} className='form'>
      <FormControl sx={{ m: 2, minWidth: 320 }}>
        <InputLabel variant="standard" support={support} onChange={(event) =>setSupport(event.target.value)}>
          Support?
        </InputLabel>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'support',
            id: 'support-feedback',
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

export default Support;
