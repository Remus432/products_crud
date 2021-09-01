import React, { useContext } from 'react'
import { ThemeContext } from "../../ThemeContext"
import { InputGroup } from "../Form/FormEl"

const TypeSwitcher = ({ type }) => {
  const [,dispatch] = useContext(ThemeContext)

  function addProperty(val, id) {
    dispatch({ type: "ADD_PROPERTY", payload: { [id]: parseInt(val) }})
  }

  return (
    <React.Fragment>
      
          <InputGroup>
            <div className={type === "DVD" ? "show" : "hide"}>
              <span>Size (MB)</span>
              <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="size" type="number" name="size" /> 
            </div>
          </InputGroup>
      
      
          <InputGroup>
            <div className={type === "book" ? "show" : "hide"}>
              <span>Weight (Kg)</span>
              <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="weight" type="number" name="weight" /> 
            </div>
          </InputGroup>
     
   
          <React.Fragment>
            <InputGroup>
              <div className={type === "furniture" ? "show" : "hide"}>
                <span>Height (CM)</span>
                <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="height" type="number" name="height" /> 
              </div>
            </InputGroup>
            <InputGroup>
              <div className={type === "furniture" ? "show" : "hide"}>
                <span>Width (CM)</span>
                <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="width" type="number" name="width" /> 
              </div>
            </InputGroup>
            <InputGroup> 
              <div className={type === "furniture" ? "show" : "hide"}>
                <span>Length (CM)</span>
                <input onKeyUp={e => addProperty(e.target.value, e.target.id)} id="length" type="number" name="length" /> 
              </div>
            </InputGroup>
          </React.Fragment>
      
    </React.Fragment>
  )
}

export default TypeSwitcher