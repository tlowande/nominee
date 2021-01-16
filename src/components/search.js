import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'


import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import Results from './results'
import api from '../util/api'

const movies = [
  {
    'Title': 'Furious 7',
    'Year': '2015',
    'imdbID': 'tt2820852',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg',
  },
  {
    'Title': 'The Trial of the Chicago 7',
    'Year': '2020',
    'imdbID': 'tt1070874',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BYjYzOGE1MjUtODgyMy00ZDAxLTljYTgtNzk0Njg2YWQwMTZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
  },
  {
    'Title': '7 Kogustaki Mucize',
    'Year': '2019',
    'imdbID': 'tt10431500',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BOGE3N2QxN2YtM2ZlNS00MWIyLWE1NDAtYWFlN2FiYjY1MjczXkEyXkFqcGdeQXVyOTUwNzc0ODc@._V1_SX300.jpg',
  },
  {
    'Title': '5 to 7',
    'Year': '2014',
    'imdbID': 'tt2486678',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMTQ4Mzg3ODQ4M15BMl5BanBnXkFtZTgwMjA3NjE1NDE@._V1_SX300.jpg',
  },
  {
    'Title': 'Cleo from 5 to 7',
    'Year': '1962',
    'imdbID': 'tt0055852',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BNzJjYzU2NjMtNzUwMS00NzFlLTg5OGItZjg5ZWM2ZWI2MTg2XkEyXkFqcGdeQXVyMTA2ODMzMDU@._V1_SX300.jpg',
  },
  {
    'Title': '7 Days in Hell',
    'Year': '2015',
    'imdbID': 'tt3895884',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMTU2NTE0NzM5OV5BMl5BanBnXkFtZTgwMDYwMDc1NjE@._V1_SX300.jpg',
  },
  {
    'Title': 'Miracle in Cell No. 7',
    'Year': '2013',
    'imdbID': 'tt2659414',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BZGFkYzhmOWEtZTlkYi00ZTVkLWI5ZmQtY2IxOTkxMGU4ZWFmXkEyXkFqcGdeQXVyNjg5MjgxODQ@._V1_SX300.jpg',
  },
  {
    'Title': '7 Days in Entebbe',
    'Year': '2018',
    'imdbID': 'tt5466186',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BMjAwNDMzNzg0Nl5BMl5BanBnXkFtZTgwOTkxNjY2NDM@._V1_SX300.jpg',
  },
  {
    'Title': '7 Aum Arivu',
    'Year': '2011',
    'imdbID': 'tt1725795',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BODM2MDAzMWEtNmRlMi00ZjgzLTgxYjAtZTQ4ZTA4NzRkNzRjXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg',
  },
  {
    'Title': 'Salyut-7',
    'Year': '2017',
    'imdbID': 'tt6537238',
    'Type': 'movie',
    'Poster': 'https://m.media-amazon.com/images/M/MV5BNmYzMWFhMmUtNTZlNy00MmRlLWFiODQtMTk4MTk4MTkzMzhmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
]
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
  const [results, setResults] = useState(movies)
  const [debouncedTerm] = useDebounce(term, 400)

  useEffect(() => {
    api(debouncedTerm).then(r => setResults(r))
  }, [debouncedTerm])

  return(
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="movie-search"
          label="Movie Search"
          variant="outlined"
          color="secondary"
          onChange={({ target: { value } }) => setTerm(value)}
        />
      </form>
      <Results {...{
        results,
      }} />
    </>
  )
}


export default Search
