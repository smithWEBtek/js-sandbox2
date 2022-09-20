import React from 'react';
import Button from '@mui/material/Button';
import classes from './App.module.css';
import DropdownSelect from './forms/DropdownSelect'

function App() {
  return (
    <div className={classes.App}>
      <Button variant="contained">Hello World</Button>
      <DropdownSelect
        data-testid='ddselect'
        selections={['cat', 'bird', 'dog', 'fish']}
      />
    </div >
  );
}

export default App;
