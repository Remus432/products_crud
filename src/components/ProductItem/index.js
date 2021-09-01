import React from 'react'
import { ProductItemContainer } from "./ProductEl"

const ProductItem = ({ name, price, sku, type, property }) => {
  
  function displayType(type) {
    switch(type) {
      case "DVD":
        return <p>Size: {property.size}MB</p>
      case "book":
        return <p>Weight: {property.weight}Kg</p>
      case "furniture":
        return <p>Dimensions: {property.height}x{property.width}x{property.length}</p>
    }
  }

  return (
    <ProductItemContainer>
      <input type="checkbox" className="delete-checkbox" />
      <p>{sku}</p>
      <p>{name}</p>
      <p>{parseFloat(price).toFixed(2)} $</p>
      <React.Fragment>{displayType(type)}</React.Fragment>
    </ProductItemContainer>
  )
}

export default ProductItem
