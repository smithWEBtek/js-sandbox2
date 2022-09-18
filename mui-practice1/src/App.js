import React, { useState } from 'react';
import Button from '@mui/material/Button';
import classes from './App.module.css';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

function App() {

  const [age, setAge] = useState(0)
  const handleChange = (event) => {
    setAge(event.target.value)
    console.log('change: ', event.target.value);
  }

  return (
    <div className={classes.App}>
      <Button variant="contained">Hello World</Button>
      <div className={classes.FormControlContainer}>
        <FormControl className={classes.FormControl}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            className={classes.Select}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            data-testid="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={0}></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {age === 0 ? <FormHelperText>select</FormHelperText> : ''}
        </FormControl>
      </div >
    </div >
  );
}

export default App;
