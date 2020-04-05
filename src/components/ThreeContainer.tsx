import * as React from 'react'
import * as labs from "../labs"
import { RouteChildrenProps } from 'react-router-dom';


const ThreeContainer: React.FC<RouteChildrenProps<{ id: string }>> = props => {
  const id = props.match.params.id
  React.useEffect(() => {
    const currentLab = new labs[id]();
  }, [id])

  return (
    id && <div id={id}>
      <div id="app" />
    </div>
  )



}

export default ThreeContainer
