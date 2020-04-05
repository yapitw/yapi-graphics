import * as React from 'react'
import * as labs from "../labs"
import { RouteChildrenProps } from 'react-router-dom';


const ThreeContainer: React.FC<RouteChildrenProps<{ id: string }>> = props => {
  const id = props.match.params.id

  const labContainer = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const currentLab = new labs[id](labContainer.current);
  }, [id])

  return (
    id && <div id={id} ref={labContainer}>
    </div>
  )



}

export default ThreeContainer
