import * as React from "react"
import { NavLink } from "react-router-dom"
import * as labs from "../labs"

const MenuList = () => {
  return (
    <React.Fragment>
      {Object.keys(labs).reverse().map((key) => {
        return <NavLink to={key} key={key}>{key}</NavLink>
      })}
    </React.Fragment>
  )
}

export default MenuList
