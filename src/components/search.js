import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': { width: '100%', color: '#002e25', '&$focused': { color: '#002e25' } },
  },
  form: { alignSelf: 'center', width: '100%' },
  formLabel: { color: '#002e25', '&$focused': { color: '#002e25' } },
  input: { backgroundColor: '#fbf7ed' },
}))

const Search = ({ setTerm }) => {
  const classes = useStyles()


  return(
    <Grid item sm={9} className={classes.form}>
      <form
        className={`${classes.root}`}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="movie-search"
          label="Movie Search"
          variant="outlined"
          color="primary"
          InputProps={{
            endAdornment: <SearchIcon />,
            className: classes.input,
          }}
          InputLabelProps={{
            classes: {
              focused: classes.formLabel,
            },
          }}
          onChange={({ target: { value } }) => setTerm(value)}

        />
      </form>
    </Grid>
  )
}

Search.propTypes ={
  setTerm: PropTypes.func,
}
Search.defaultProps ={
  setTerm: () => {},
}

export default Search
