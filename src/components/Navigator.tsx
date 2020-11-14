import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './navigator.scss'

const Navigator = () => {
    return (
        <div className="tabs">
            <div className="container">
                <NavLink activeClassName="active-link" to="/about">
                    About
                </NavLink>
                <div className="splitter" />
                <h4>Works:</h4>
                <NavLink activeClassName="active-link" to="/webWorks">
                    Web
                </NavLink>
                <h4 className="pipe">|</h4>
                <NavLink activeClassName="active-link" to="/art">
                    Art
                </NavLink>
                <div className="splitter" />
                <h4>Studies:</h4>
                <NavLink activeClassName="active-link" to="/exp/">
                    Graphics
                </NavLink>
                <h4 className="pipe">|</h4>
                <NavLink activeClassName="active-link" to="/noc/">
                    Natural of code
                </NavLink>
            </div>
        </div>
    )
}

export default Navigator
