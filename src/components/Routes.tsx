import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import NatureOfCode from "./NatureOfCode"
import ThreeContainer from './ThreeContainer'

const Routes = () => {
  return (
    <Switch>
      <Route path="/exp/:id" component={ThreeContainer} />
      <Route path={"/noc/:lecture"} component={NatureOfCode} />

      <Route path={"/exp/"}>
        <Redirect to="/exp/Lab6" />
      </Route>

      <Route path={"/noc/"}>
        <Redirect to="/noc/lecture1_7" />
      </Route>

      <Route path={"/"}>
        <Redirect to="/exp/" />
      </Route>

    </Switch>
  )
}

export default Routes