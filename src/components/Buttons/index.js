import React, { useContext } from 'react'
import { BtnPrimary, BtnDanger, Group } from "./ButtonsEl"
import { ThemeContext } from "../../ThemeContext"
import { Link } from "react-router-dom"

const BtnGroup = ({ buttons }) => {
  const [state, setState] = useContext(ThemeContext)

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
        ...state, property: `${state.property}`
      })
    }).then(res => {
      console.log(res)
    })

    fetch("http://localhost:3001/index.php")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <Group>
      {
        buttons.map((item, i) => {
          switch(item) {
            case "Add":
              return <Link key={i}  to="/add-product"><BtnPrimary>{item}</BtnPrimary></Link>
            case "Mass Delete":
              return <BtnDanger key={i} id="delete-product-btn">{item}</BtnDanger>
            case "Save":
              return <Link to="/"><BtnPrimary onClick={saveProduct} key={i} >{item}</BtnPrimary></Link>
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
