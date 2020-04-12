import * as React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Route } from "react-router-dom"

import ThreeContainer from './components/ThreeContainer';
import MenuList from './components/MenuList';

const App = () => {

  const [isMenuShow, setIsMenuShow] = React.useState(false)

  return (
    <HashRouter hashType="noslash">
      <div className="app">
        <div className={`menu-list ${isMenuShow ? "menu-list--active" : ""}`}>
          <div className="switch" onClick={() => setIsMenuShow(!isMenuShow)}></div>
          <div className="list-wrapper" onClick={() => setIsMenuShow(false)}>
            <MenuList />
          </div>
        </div>
        <div className="content">
          <Route path="/:id" component={ThreeContainer} />
        </div>
      </div>
    </HashRouter >
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
