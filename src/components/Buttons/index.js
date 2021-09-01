import React, { useContext } from 'react'
import { BtnPrimary, BtnDanger, Group } from "./ButtonsEl"
import { ThemeContext } from "../../ThemeContext"
import { Link, useHistory } from "react-router-dom"

const BtnGroup = ({ buttons }) => {
  const [state] = useContext(ThemeContext)
  const history = useHistory()

  function saveProduct() {    
    fetch("http://localhost:3001/index.php", {
      method: "POST",
      mode: "no-cors",
      credentials: "omit",
      headers: { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        ...state, property: state.property
      })
    }).then(res => {
      history.push("/")
    })
  }

  function deleteProducts() {
   
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
              return <BtnPrimary onClick={saveProduct} key={i} >{item}</BtnPrimary>
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
