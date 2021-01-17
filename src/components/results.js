import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import Typography from '@material-ui/core/Typography'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: 10,
    borderRadius: '1%',
    backgroundColor: '#fbf7ed',
    margin: 20,
    width: 550,
    minHeight: 565,
  },
  icon: { color: '#ffb366' },
}))

const message = '🎉 Thanks for nominating your top-5 fav movies 🎥 '

const Results = ({ results, term }) => {
  const classes = useStyles()
  const [nominee, setNominee] = useState([])
  const isDone = nominee.length === 5
  const isDisabled = (id) => nominee.some(({ imdbID }) => imdbID === id)

  const addHandle = (movie) => setNominee([...nominee, movie])

  const removeHandle = (i) => {
    const _nominee = [...nominee]
    _nominee.splice(i, 1)
    setNominee(_nominee)
  }

  useEffect(() => {
    isDone && toast(message)
  })

  return(
    <Grid container item justify='center'>
      <Grid item sm={12} md={4} className={classes.container}>
        <Typography variant='h6' gutterBottom>
          {`Results ${ term && `for "${term}"`}`}
        </Typography>
        <List>
          {results.map((movie)  => {
            const { Title, Year, imdbID } = movie
            return (
              <ListItem key={imdbID} divider>
                <ListItemText
                  primary={`${Title} - ${Year}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="add"
                    disabled={isDisabled(imdbID) ||isDone}
                    onClick={() => addHandle(movie)}
                  >
                    <ThumbUpIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )})}
        </List>
      </Grid>
      <Grid item sm={12} md={4} className={classes.container}>
        <Typography variant='h6' gutterBottom>
          Nominations
        </Typography>
        <List>
          {nominee.map((movie, i) => {
            const { Title, Year, imdbID } = movie
            return (
              <ListItem key={imdbID} divider>
                <ListItemText
                  primary={`${Title} - ${Year}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="add"
                    onClick={() => removeHandle(i)}
                  >
                    <ThumbDownIcon color='secondary' classes={{
                      colorSecondary: classes.icon,
                    }}/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>
      </Grid>
      <ToastContainer
        position='top-center'
        type='info'
      />
    </ Grid>
  )
}

Results.propTypes = {
  results: PropTypes.arr,
  term: PropTypes.string,
}

Results.defaultProps = {
  results: [],
  term: '',
}

export default Results
