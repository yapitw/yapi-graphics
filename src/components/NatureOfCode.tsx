import * as React from 'react'
import p5 from 'p5'
import { RouteComponentProps } from 'react-router'
import * as sketches from '../natureOfCode'

const Lecture: React.FC<RouteComponentProps<{ lecture: string }>> = (props) => {
    const lecture = props.match.params.lecture
    const canvasElem = React.useRef<HTMLDivElement>(null)

    const [title, setTitle] = React.useState('')

    React.useEffect(() => {
        const sketch = sketches[lecture]
        const processing = new p5(sketch, canvasElem.current)
        setTitle(sketch.title)
        return () => processing.remove()
    }, [lecture, canvasElem])

    return (
        <div className="text">
            <h1>The Nature of Code</h1>
            <p>{title}</p>
            <div ref={canvasElem} key={lecture}></div>
            <p>
                <span>Practice according to </span>
                <a
                    href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM"
                    target="_blank"
                >
                    The Nature of Code 2
                </a>
            </p>
            <p>
                <span>Source code: </span>
                <a
                    target="_blank"
                    href="https://github.com/yapitw/yapi-graphics/tree/master/src/natureOfCode"
                >
                    GitHub
                </a>
            </p>
        </div>
    )
}

export default Lecture
