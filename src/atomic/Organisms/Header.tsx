import assert from 'assert'
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './Header.scss'

type Props = {
  menuItemList?: {
    text: string
    path: string
  }[]
}

const App = (props: Props) => {
  let [anchorEl, open] = React.useState<Element | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log(event)
    open(event.currentTarget)
  }

  const handleClose = () => {
    open(null)
  }

  const menuItems = () => {
    assert(props.menuItemList)
    return props.menuItemList.map((item) => {
      return (
        <MenuItem onClick={handleClose}>
          <Link className="MenuItem" to={item.path}>
            {item.text}
          </Link>
        </MenuItem>
      )
    })
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
        {menuItems()}
      </Menu>
    </header>
  )
}

export default App
