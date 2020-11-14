import * as React from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

import About from './About'
import NatureOfCode from './NatureOfCode'
import ThreeContainer from './ThreeContainer'
import WebWorks from './WebWorks'

const Routes = () => {
    const history = useHistory()
    const {
        location: { pathname },
    } = history

    React.useEffect(() => {
        console.log(pathname)
        document.getElementById('top-anchor').scrollIntoView()
    }, [pathname])
    return (
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/webWorks" component={WebWorks} />
            <Route path="/exp/:id" component={ThreeContainer} />
            <Route path={'/noc/:lecture'} component={NatureOfCode} />

            <Route path={'/exp/'}>
                <Redirect to="/exp/Lab6" />
            </Route>

            <Route path={'/noc/'}>
                <Redirect to="/noc/lecture1_7" />
            </Route>

            <Route path={'/'}>
                <Redirect to="/about" />
            </Route>
        </Switch>
    )
}

export default Routes
