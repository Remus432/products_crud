import React from 'react'
import Nav from "./Nav"
import Form from "./Form"

const AddProduct = ({ location }) => {
  return (
    <div>
      <Nav pathname={location.pathname} />
      <Form />
    </div>
  )
}

export default AddProduct
