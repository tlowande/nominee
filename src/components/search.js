import React from 'react'
import PropTypes from 'prop-types'

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': { width: '100%', color: '#002e25' },
  },
  form: { alignSelf: 'center', width: '100%' },
  input: { backgroundColor: '#fbf7ed' },
}))

const theme = createMuiTheme({
  palette: {
    primary: { main: '#002e25' },
  },
})

const Search = ({ setTerm }) => {
  const classes = useStyles()

  return(
    <Grid item sm={9} className={classes.form}>
      <form
        className={`${classes.root}`}
        noValidate
        autoComplete="off"
        onSubmit={e => { e.preventDefault() }}
      >
        <ThemeProvider theme={theme}>
          <TextField
            id="movie-search"
            label="Movie Search"
            variant="outlined"
            color="primary"
            InputProps={{
              endAdornment: <SearchIcon />,
              className: classes.input,
            }}
            onChange={({ target: { value } }) => setTerm(value)}
          />
        </ThemeProvider>
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
