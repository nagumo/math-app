import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes, RouteList } from './route/Routes'
import { Header } from './atomic/Organisms/Header'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header navMenuItems={RouteList} />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}
export default App
