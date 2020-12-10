import React from 'react'
import { Header } from './Header'

export default {
  title: 'Header Component',
  component: Header,
}

const navMenuItems = [
  { title: 'ひきざん', path: '/sub' },
  { title: 'かけ算', path: '/multi' },
]

export const HeaderComponent = () => <Header navMenuItems={navMenuItems} />
