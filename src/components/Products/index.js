import React from 'react'
import { ProductsContainer } from "./ProductsEl"

const Products = () => {

  fetch("http://localhost:3001/index.php")
  .then(res => res.json())
  .then(data => console.log(data))

  return (
    <ProductsContainer>
    </ProductsContainer>
  )
}

export default Products
