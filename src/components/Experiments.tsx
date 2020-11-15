import * as React from 'react'
import * as labs from '../labs'
import { RouteChildrenProps } from 'react-router-dom'
import ThreeContainer from './ThreeContainer'

const Experiments: React.FC<RouteChildrenProps<{ id: string }>> = (props) => {
    const id = props.match.params.id

    if (id) {
        return <ThreeContainer id={id} />
    }

    return (
        <>
            {Object.keys(labs)
                .reverse()
                .map((id) => {
                    return (
                        <section key={id}>
                            <ThreeContainer id={id} />
                        </section>
                    )
                })}
        </>
    )
}

export default Experiments
