import React, { useContext } from 'react'
import { ThemeContext } from "../../ThemeContext"
import { InputGroup } from "../Form/FormEl"

const TypeSwitcher = ({ type }) => {
  const [state, dispatch] = useContext(ThemeContext)

  function addProperty(val, id) {
    dispatch({ type: "ADD_PROPERTY", payload: { [id]: parseInt(val) }})
  }

  return (
    <React.Fragment>
      { 
        type === "DVD" && (
          <InputGroup>
            <span>Size (MB)</span>
            <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="size" type="number" name="size" /> 
          </InputGroup>
        )
      }
      { 
        type === "book" && (
          <InputGroup>
            <span>Weight (Kg)</span>
            <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="weight" type="number" name="weight" /> 
          </InputGroup>
        )
      }
      { 
        type === "furniture" && (
          <React.Fragment>
            <InputGroup>
              <span>Height (CM)</span>
              <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="height" type="number" name="height" /> 
            </InputGroup>
            <InputGroup>
              <span>Width (CM)</span>
              <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="width" type="number" name="width" /> 
            </InputGroup>
            <InputGroup>
              <span>Length (CM)</span>
              <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="length" type="number" name="length" /> 
            </InputGroup>
          </React.Fragment>
        )
      }
    </React.Fragment>
  )
}

export default TypeSwitcher