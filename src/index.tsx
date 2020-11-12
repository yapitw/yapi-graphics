import * as React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, NavLink, Route } from 'react-router-dom'

import MenuList from './components/MenuList'
import Routes from './components/Routes'

const App: React.FC = () => {
    const [isMenuShow, setIsMenuShow] = React.useState(false)

    return (
        <HashRouter hashType="noslash">
            <div className="app">
                <div className="tabs">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/exp/">Exp.</NavLink>
                    <NavLink to="/noc/">NOC</NavLink>
                </div>
                <div className="app-body">
                    <Route path={['/exp/', '/noc/']}>
                        <div
                            className={`menu-list ${
                                isMenuShow ? 'menu-list--active' : ''
                            }`}
                        >
                            <div
                                className="switch"
                                onClick={() => setIsMenuShow(!isMenuShow)}
                            />

                            <div
                                className="list-wrapper"
                                onClick={() => setIsMenuShow(false)}
                            >
                                <MenuList />
                            </div>
                        </div>
                    </Route>

                    <div className="content">
                        <Routes />
                    </div>
                </div>
            </div>
        </HashRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
