import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './Header.scss'

const App: React.FC = () => {
  let [anchorEl, open] = React.useState<Element | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log(event)
    open(event.currentTarget)
  }

  const handleClose = () => {
    open(null)
  }

  return (
    <header className="App-header">
      <div className="Menu">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={(event: any) => handleClick(event)}
        >
          <MenuIcon />
        </Button>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">ホーム</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/sub">引き算</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/multi">掛け算九九</Link>
        </MenuItem>
      </Menu>
    </header>
  )
}

export default App
