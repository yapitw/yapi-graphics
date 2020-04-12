import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"

import ThreeContainer from './components/ThreeContainer';
import MenuList from './components/MenuList';

const App = () => {
  return (
    <BrowserRouter basename={location.pathname.replace(/Lab.+/, "")}>
      <div className="app">
        <div className="menu-list">
          <MenuList />
        </div>
        <div className="content">
          <Route path="/:id" component={ThreeContainer} />
        </div>
      </div>
    </BrowserRouter >
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
