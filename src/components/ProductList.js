import React from 'react'
import Nav from "./Nav"
import Products from "./Products"

const ProductList = ({ location }) => {
  return (
    <div>
      <Nav pathname={location.pathname} />
      <Products/>
    </div>
  )
}

export default ProductList
