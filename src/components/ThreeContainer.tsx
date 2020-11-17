import * as React from 'react'
import * as labs from '../labs'
import { ThreeLab } from '../labs/template'

const ThreeContainer: React.FC<{ id: string }> = (props) => {
    const { id } = props
    const containerElem = React.useRef<HTMLDivElement>(null)

    const lab = React.useRef<ThreeLab | undefined>()

    React.useEffect(() => {
        if (id === undefined) return () => {}
        const newLab = new labs[id](containerElem.current)
        lab.current = newLab
        return () => (newLab.terminated = true)
    }, [id])

    const { title, description, tags } = (labs[id] || {}) as labs.ILab

    if (!id) {
        return null
    }
    return (
        <React.Fragment>
            <div className="text">
                <h1>{title}</h1>
                {tags && (
                    <p>
                        {tags.split(' ').map((tag, index) => (
                            <span key={index}>#{tag} </span>
                        ))}
                    </p>
                )}
            </div>
            <div key={id} ref={containerElem} style={{ display: 'flex' }} />
            {description && (
                <p
                    dangerouslySetInnerHTML={{
                        __html: description.replace(/\n/g, '</br>'),
                    }}
                ></p>
            )}
            <p>
                <span>Source code: </span>
                <a target="_blank" href="https://github.com/yapitw/yapi-graphics/tree/master/src/labs">
                    GitHub
                </a>
            </p>
        </React.Fragment>
    )
}

export default ThreeContainer
