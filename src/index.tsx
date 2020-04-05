import * as React from "react"
import ReactDOM from "react-dom"
import ThreeContainer from './components/ThreeContainer';
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import * as labs from "./labs"

const root = document.getElementById("root")
const App = () => {
  return (
    <BrowserRouter>
      {Object.keys(labs).map((key) => {
        return <NavLink to={key} key={key}>{key}</NavLink>
      })}
      <Route path="/:id" component={ThreeContainer} />
    </BrowserRouter >
  )
}

ReactDOM.render(<App />, root)
