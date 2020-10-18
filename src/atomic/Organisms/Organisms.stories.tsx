import React from 'react'
import { Header, HeaderProps } from './Header'

export default {
  title: 'Header Component',
  component: Header,
}

const navMenuItems = [
  { key: '/sub', text: 'ひきざん', path: '/sub' },
  { key: '/multi', text: 'かけ算', path: '/multi' },
]

export const HeaderComponent = () => <Header navMenuItems={navMenuItems} />
