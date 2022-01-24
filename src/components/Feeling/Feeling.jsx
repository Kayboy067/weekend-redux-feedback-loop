import React from 'react';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Feeling = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const feeling = useSelector(store => store.feelingReducer);

  // submit form and proceed to next page
  const handleSubmit = (evt) =>{
    evt.preventDefault();

    //history.push('/understand');

  }

  
  return (
  <div>
      <h1>How are you feeling today?</h1>
      <form onClick={handleSubmit} className='form'>
      <FormControl sx={{ m: 2, minWidth: 320 }}>
        <InputLabel variant="standard" feeling={feeling}>
          Feeling?
        </InputLabel>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'feeling',
            id: 'feeling-feedback',
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

export default Feeling;
