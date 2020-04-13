import * as React from "react"
import { Switch, NavLink, Route, Redirect } from "react-router-dom"
import * as labs from "../labs"
import * as sketches from "../natureOfCode"


const MenuList = () => {
  return (
    <React.Fragment>
      <Switch >
        <Route path={"/exp/:id?"}>
          {Object.keys(labs).reverse().map((key) =>
            <NavLink to={"/exp/" + key} key={key}>
              <span>{key.replace("Lab", "Exp. ")}</span>
              <br />
              <span>{labs[key].title}</span>
            </NavLink>
          )}
        </Route>
        <Route path={"/noc/:id?"}>
          {Object.keys(sketches).reverse()
            .map(sketch =>
              <NavLink to={"/noc/" + sketch} key={sketch}>
                {sketch.replace("lecture", "lecture ").replace("_", ".")}
                <br />
                {sketches[sketch].title}
              </NavLink>
            )}
        </Route>
      </Switch>
    </React.Fragment >
  )
}

export default MenuList
