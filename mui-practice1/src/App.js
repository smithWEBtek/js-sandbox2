import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function App() {

  const [age, setAge] = useState(0)
  const handleChange = (event) => {
    setAge(event.target.value)
    console.log('change: ', event.target.value);
  }

  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
