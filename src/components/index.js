import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'


import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Results from './results'
import Search from './search'
import api from '../util/api'


const useStyles = makeStyles((theme) => ({
  '@global': {
    html: {
      height: '100%',
      width: '100%',
    },
    body: {
      backgroundColor: '#008060',
      height: '100%',
      width: '100%',
      '& > div': {
        height: '100%',
        width: '100%',
      },
      overflow: 'hidden',
    },
  },
  content: { backgroundColor: 'green' },
}))

const Nominees = (props) => {
  const classes = useStyles()
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [debouncedTerm] = useDebounce(term, 400)

  useEffect(() => {
    api(debouncedTerm).then(r => setResults(r))
  }, [debouncedTerm])

  return(
    <Grid
      container
      justify='center'
      direction='column'
      spacing={3}
    >
      <Grid item sm={12}>
        <Typography variant='h4' gutterBottom color='textSecondary'>
        The Shoppies
        </Typography>
      </Grid>
      <Search {...{ setTerm }}/>
      <Results {...{ results, term }} />
    </Grid>
  )
}


export default Nominees
