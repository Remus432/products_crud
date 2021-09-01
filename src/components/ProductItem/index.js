import React from 'react'
import { ProductItemContainer } from "./ProductEl"

const ProductItem = ({ name, price, sku, type, property }) => {
  
  function selectProduct(e) {
    console.log(e.target.checked)
  }

  return (
    <ProductItemContainer>
      <input onInput={e => selectProduct(e)} type="checkbox" className="delete-checkbox" />
      <p>{sku}</p>
      <p>{name}</p>
      <p>{parseFloat(price).toFixed(2)} $</p>
      <p>{type}</p>
      {
        type === "DVD" && <p>Size: {property.size}MB</p>
      }
    </ProductItemContainer>
  )
}

export default ProductItem
