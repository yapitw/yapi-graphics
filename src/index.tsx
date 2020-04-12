import * as React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Route } from "react-router-dom"

import ThreeContainer from './components/ThreeContainer';
import MenuList from './components/MenuList';

const App = () => {
  return (
    <HashRouter hashType="noslash">
      <div className="app">
        <div className="menu-list">
          <MenuList />
        </div>
        <div className="content">
          <Route path="/:id" component={ThreeContainer} />
        </div>
      </div>
    </HashRouter >
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
