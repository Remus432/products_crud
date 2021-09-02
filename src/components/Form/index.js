import React, { useState, useContext } from 'react';
import { FormContainer, InputGroup } from "./FormEl"
import TypeSwitcher from "../TypeSwitcher"
import { ThemeContext } from "../../ThemeContext"

const Form = () => {

  const [typeSwitcher, setType] = useState("")
  const [state, dispatch] = useContext(ThemeContext)

  function addVal(val, id) {
    dispatch({ type: "ADD_VAL", payload: {[id]: id === "price" ? parseInt(val) : val}})
  }

  function displaySwitcher(type) {
    if (type === "DVD") return "Please, provide size in MB."
    if (type === "book") return "Please, provide weight in Kg."
    if (type === "furniture") return "Please, provide dimensions in CM."
  }

  function selectType(e) {
    addVal(e.target.value, e.target.id)
    setType(e.target.value)
    dispatch({ type: "RESET_PROP" })
  }

  return (
    <FormContainer onSubmit={e => e.preventDefault()} id="product_form" method="POST">
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
        <select required onInput={e => selectType(e)}  id="productType">
          <option defaultValue hidden></option>
          <option id="DVD" value="DVD">DVD-disc</option>
          <option id="book" value="book">Book</option>
          <option id="furniture" value="furniture">Furniture</option>
        </select>
      </InputGroup>
      <input type="number" id="size" />
      <input type="number" id="weight" />
      <input type="number" id="height" />
      <input type="number" id="length" />
      <input type="number" id="width" />
      {typeSwitcher && <TypeSwitcher type={typeSwitcher} />}
      {typeSwitcher && <p className="msg">{displaySwitcher(typeSwitcher)}</p> }
      {state.err && <p className="err">{state.err}</p>}
    </FormContainer>
  )
}

export default Form
