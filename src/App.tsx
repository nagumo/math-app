import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Header from './atomic/Organisms/Header'
import Multi from './atomic/Pages/Multi'
import Sub from './atomic/Pages/Sub'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const useStyles = makeStyles({
  appHheader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  appLink: {
    color: '#61dafb',
  },
})

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/multi" component={Multi} />
        <Route exact path="/sub" component={Sub} />
      </div>
    </Router>
  )
}

export default App
