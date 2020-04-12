import * as React from "react"
import { NavLink } from "react-router-dom"
import * as labs from "../labs"

const MenuList = () => {
  console.log(labs)
  return (
    <React.Fragment>
      {Object.keys(labs).reverse().map((key) =>

        <NavLink to={key} key={key}>
          <span>{key.replace("Lab", "Exp. ")}</span>
          <br />
          <span>{labs[key].title}</span>
        </NavLink>

      )}
    </React.Fragment >
  )
}

export default MenuList
