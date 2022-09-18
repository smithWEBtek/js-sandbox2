import React, { useState, useEffect } from 'react'
import { FormControl, MenuItem, Select, InputLabel, FormHelperText } from '@mui/material'
import classes from './DropdownSelect.module.css'

const DropdownSelect = ({ selections }) => {
  const [selection, setSelection] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems((selections.map((selection, index) => (
      <MenuItem key={index} value={selection}>{selection}</MenuItem>))))
  }, [selections])

  const handleChange = event => {
    setSelection(event.target.value)
  }

  return (
    <div className={classes.App}>
      <div className={classes.FormControlContainer}>
        <FormControl className={classes.FormControl}>
          <InputLabel id="demo-simple-select-label">Pet</InputLabel>
          <Select
            label="Pet"
            className={classes.Select}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selection}
            onChange={handleChange}
          >
            <MenuItem value="">
            </MenuItem>
            {items}
          </Select>
          <FormHelperText>{selection === '' ? 'Choose a pet' : ''}</FormHelperText>
        </FormControl>
      </div >
    </div >
  )
}

export default DropdownSelect
