import * as React from "react"
import ReactDOM from "react-dom"
import { HashRouter, NavLink } from 'react-router-dom';

import MenuList from './components/MenuList'
import Routes from './components/Routes'

const App = () => {

  const [isMenuShow, setIsMenuShow] = React.useState(false)

  return (
    <HashRouter hashType="noslash">
      <div className="app">
        <div className={`menu-list ${isMenuShow ? "menu-list--active" : ""}`}>
          <div className="switch" onClick={() => setIsMenuShow(!isMenuShow)}></div>
          <div className="tabs">
            <NavLink to="/exp/">Exp.</NavLink>
            <NavLink to="/noc/">NOC</NavLink>
          </div>
          <div className="list-wrapper" onClick={() => setIsMenuShow(false)}>
            <MenuList />
          </div>
        </div>
        <div className="content">
          <Routes />
        </div>
      </div>
    </HashRouter >
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
