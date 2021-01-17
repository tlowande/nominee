import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: '1%',
    border: '1px solid green',
  },
}))

const Results = ({ results }) => {
  const classes = useStyles()
  const [nominee, setNominee] = useState([])
  console.log(nominee)
  const isDone = nominee.length === 2
  const isDisabled = (id) => nominee.some(({ imdbID }) => imdbID === id)

  const addHandle = (movie) => setNominee([...nominee, movie])

  const removeHandle = (i) => {
    const _nominee = [...nominee]
    _nominee.splice(i, 1)
    setNominee(_nominee)
  }

  useEffect(() => {
    isDone && toast('thanks')
  })

  return(
    <>
      <div className={classes.container}>
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
                    <ThumbUpIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )})}
        </List>
      </div>
      <div>
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
                    <ThumbDownIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )})}
        </List>
      </div>
      <ToastContainer />
    </>
  )
}

Results.propTypes ={
  results: PropTypes.arr,
}

export default Results
