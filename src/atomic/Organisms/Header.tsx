import assert from 'assert'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './Header.scss'

export type HeaderProps = {
  navMenuItems?: {
    key: string
    text: string
    path: string
  }[]
}

export const Header = (props: HeaderProps) => {
  let [anchorEl, open] = React.useState<Element | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    open(event.currentTarget)
  }

  const handleClose = () => {
    open(null)
  }

  const menuItems = () => {
    assert(props.navMenuItems)
    return props.navMenuItems.map((item) => {
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
