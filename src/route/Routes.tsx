import React from 'react'
import { Route } from 'react-router-dom'

import { Home } from '../atomic/Pages/Home'
import Sum from '../atomic/Pages/Sum'
import Sub from '../atomic/Pages/Sub'
import Mul from '../atomic/Pages/Multi'
import Div from '../atomic/Pages/Div'

interface PathToComponent {
  path: string
  title: string
  component: React.FC<any>
}

export const RouteList: PathToComponent[] = [
  { path: '/', title: 'ホーム', component: Home },
  { path: '/sum', title: 'たしざん', component: Sum },
  { path: '/sub', title: 'ひきざん', component: Sub },
  { path: '/mul', title: 'かけ算(九九)', component: Mul },
  { path: '/div', title: '割り算(あまりなし)', component: Div },
]

const RoutingList = () => {
  return RouteList.map((path) => (
    // <Route exact path={path.path} component={path.component} />
    <Route
      exact
      key={path.path}
      path={path.path}
      render={() => <path.component title={path.title} />}
    />
  ))
}

export const AppRoutes: React.FC = () => {
  return <div>{RoutingList()}</div>
}
