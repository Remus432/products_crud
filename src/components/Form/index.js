import React, { useState, useContext, useEffect } from 'react';
import { FormContainer, InputGroup } from "./FormEl"
import TypeSwitcher from "../TypeSwitcher"
import { ThemeContext } from "../../ThemeContext"

const Form = () => {

  const [typeSwitcher, setType] = useState("")
  const [state, setState] = useContext(ThemeContext)

  function formSubmit(e) {
    e.preventDefault()
  }

  function addVal(val, id) {
    setState(() => ({...state, [id]: val}))
  }

  useEffect(() => {
    setState(() => ({...state, property: {}}))
  }, [typeSwitcher])


  console.log(state)
  return (
    <FormContainer onSubmit={e => formSubmit(e)} id="product-form" method="POST">
      <InputGroup>
        <span>SKU</span>
        <input onKeyUp={e => addVal(e.target.value, e.target.id)} id="sku" type="text" name="sku" />
      </InputGroup>
      <InputGroup>
        <span>Name</span>
        <input onKeyUp={e => addVal(e.target.value, e.target.id)} id="name" type="text" name="name" />
      </InputGroup>
      <InputGroup>
        <span>Price ($)</span>
        <input onKeyUp={e => addVal(e.target.value, e.target.id)} id="price" type="number" name="price" />
      </InputGroup>
      <InputGroup>
        <span>Type Switcher</span>
        <select onInput={e => {
          setType(e.target.value)
          addVal(e.target.value, e.target.id)
        }}  id="productType">
          <option defaultValue hidden></option>
          <option id="DVD" value="DVD">DVD-disc</option>
          <option id="book" value="book">Book</option>
          <option id="furniture" value="furniture">Furniture</option>
        </select>
      </InputGroup>
      { 
        typeSwitcher && <TypeSwitcher type={typeSwitcher} />
      }
      <input type="submit" hidden/>
    </FormContainer>
  )
}

export default Form
