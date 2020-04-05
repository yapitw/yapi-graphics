import * as React from 'react'
import * as labs from "../labs"
import { RouteChildrenProps } from 'react-router-dom';


const ThreeContainer: React.FC<RouteChildrenProps<{ id: string }>> = props => {
  const id = props.match.params.id
  const containerElem = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const currentLab = new labs[id](containerElem.current);
    return () => currentLab.terminated = true
  }, [id])

  return (
    id
    && (<div
      key={id}
      ref={containerElem}
      style={{ display: 'flex' }}
    />)
  )
}

export default ThreeContainer
