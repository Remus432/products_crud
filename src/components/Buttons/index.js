import React, { useContext, useState } from 'react'
import { BtnPrimary, BtnDanger, Group } from "./ButtonsEl"
import { ThemeContext } from "../../ThemeContext"
import { Link, useHistory } from "react-router-dom"
import { formValidation, errMsg, sendData, deleteData } from "../FormValidation"

const BtnGroup = ({ buttons }) => {
  const [state] = useContext(ThemeContext)
  const [err, setMsg] = useState("")
  const history = useHistory()

  function saveProduct() {    
    if (formValidation(state)) sendData(state).then(() => history.push("/"))
    if (formValidation(state) === "empty") setMsg(errMsg("empty"))
    if (formValidation(state) === "invalid") setMsg(errMsg("invalid"))
  }

  function deleteProducts() {
   const inputs = Array.from(document.querySelectorAll(".delete-checkbox"))
   const list = inputs.filter(input => input.checked).map(input => input.nextElementSibling.textContent)
   
   deleteData(list).then(() => {
      history.push("/ ")
      history.push("/")
    })
   
  }
  
  return (
    <Group>
      {
        buttons.map((item, i) => {
          switch(item) {
            case "Add":
              return <Link key={i}  to="/add-product"><BtnPrimary>{item}</BtnPrimary></Link>
            case "Mass Delete":
              return <BtnDanger onClick={deleteProducts} key={i} id="delete-product-btn">{item}</BtnDanger>
            case "Save":
              return <BtnPrimary form="product-form" type="submit" onClick={saveProduct} key={i} >{item}</BtnPrimary>
            case "Cancel":
              return <Link key={i} to="/"><BtnDanger>{item}</BtnDanger></Link>
              default: 
                return item
          }
        })
      }
    </Group>
  )
}

export default BtnGroup
