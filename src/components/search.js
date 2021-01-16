import React, { useEffect, useState } from 'react'
import api from '../util/api'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60%',
    },
  },
}))

const Search = (props) => {
  const classes = useStyles()
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    api(term).then(r => setResults(r))
  }, [term])

  return(
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="movie-search"
        label="Movie Search"
        variant="outlined"
        color="secondary"
        onChange={({ target: { value } }) => {console.log(value)}}
      />
    </form>
  )
}


export default Search
