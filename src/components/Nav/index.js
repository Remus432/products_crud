import React from 'react'
import BtnGroup from "../Buttons"
import { NavContainer } from "./NavEl"

const Nav = ({ pathname}) => {
  const headline = pathname === "/" ? "Product List" : "Product Add"
  const buttons = pathname === "/" ? ["ADD", "MASS DELETE"] : ["Save", "CANCEL"]

  return (
    <NavContainer>
      <h1>{headline}</h1>
      <BtnGroup buttons={buttons}/>
    </NavContainer>
  )
}

export default Nav
