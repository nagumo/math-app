import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Header from './atomic/Organisms/Header'
import Multi from './atomic/Pages/Multi'
import Sub from './atomic/Pages/Sub'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const menuItemList = [
  { text: 'ホーム', path: '/' },
  { text: 'ひきざん', path: '/sub' },
  { text: 'かけ算', path: '/multi' },
]

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header menuItemList={menuItemList} />
        <Route exact path="/multi" component={Multi} />
        <Route exact path="/sub" component={Sub} />
      </div>
    </Router>
  )
}

export default App
