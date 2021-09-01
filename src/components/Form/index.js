import React, { useState, useContext, useEffect } from 'react';
import { FormContainer, InputGroup } from "./FormEl"
import TypeSwitcher from "../TypeSwitcher"
import { ThemeContext } from "../../ThemeContext"

const Form = () => {

  const [typeSwitcher, setType] = useState("")
  const [state, dispatch] = useContext(ThemeContext)

  function addVal(val, id) {
    dispatch({ type: "ADD_VAL", payload: {[id]: val}})
  }

  function displaySwitcher(type) {
    if (type === "DVD") return "Please, provide size in MB."
    if (type === "book") return "Please, provide weight in Kg."
    if (type === "furniture") return "Please, provide dimensions in CM."
  }

  useEffect(() => {
    dispatch({ type: "RESET_PROP" })
  }, [typeSwitcher])

  return (
    <FormContainer onSubmit={e => e.preventDefault()} id="product-form" method="POST">
      <InputGroup>
        <span>SKU</span>
        <input onKeyUp={e => addVal(e.target.value, e.target.id)} id="sku" type="text" name="sku" required />
      </InputGroup>
      <InputGroup>
        <span>Name</span>
        <input onKeyUp={e => addVal(e.target.value, e.target.id)} id="name" type="text" name="name" required />
      </InputGroup>
      <InputGroup>
        <span>Price ($)</span>
        <input onKeyUp={e => addVal(e.target.value, e.target.id)} id="price" type="number" name="price" required />
      </InputGroup>
      <InputGroup>
        <span>Type Switcher</span>
        <select required onInput={e => {
          setType(e.target.value)
          addVal(e.target.value, e.target.id)
        }}  id="productType">
          <option defaultValue hidden></option>
          <option id="DVD" value="DVD">DVD-disc</option>
          <option id="book" value="book">Book</option>
          <option id="furniture" value="furniture">Furniture</option>
        </select>
      </InputGroup>
      {typeSwitcher && <TypeSwitcher type={typeSwitcher} />}
      {typeSwitcher && <p className="msg">{displaySwitcher(typeSwitcher)}</p> }
    </FormContainer>
  )
}

export default Form
