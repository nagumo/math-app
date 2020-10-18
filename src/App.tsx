import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './route/Routes'
import { Header } from './atomic/Organisms/Header'
import './App.scss'

const navMenuItems = [
  { key: '/', text: 'ホーム', path: '/' },
  { key: '/sum', text: 'たしざん', path: '/sum' },
  { key: '/sub', text: 'ひきざん', path: '/sub' },
  { key: '/multi', text: 'かけ算', path: '/multi' },
]

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header navMenuItems={navMenuItems} />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}
export default App
