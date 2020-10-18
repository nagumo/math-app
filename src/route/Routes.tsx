import React from 'react'
import { Route } from 'react-router-dom'

import App from '../App'
import Sum from '../atomic/Pages/Sum'
import Sub from '../atomic/Pages/Sub'
import Multi from '../atomic/Pages/Multi'

interface PathToComponent {
  path: string
  component: React.FC<any>
}

const routeList: PathToComponent[] = [
  { path: '/', component: App },
  { path: '/sum', component: Sum },
  { path: '/sub', component: Sub },
  { path: '/multi', component: Multi },
]

const RouteList = () => {
  return routeList.map((path) => (
    <Route exact path={path.path} component={path.component} />
  ))
}

const AppRoutes: React.FC = () => {
  return <div>{RouteList()}</div>
}

export default AppRoutes
