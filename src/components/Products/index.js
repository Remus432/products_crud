import React, { useEffect, useState } from 'react'
import { ProductsContainer } from "./ProductsEl"
import ProductItem from "../ProductItem"

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    async function fetchData() {
      const res = await fetch("https://backend-crud-api.herokuapp.com/")
      const data = await res.clone().json() || []
      console.log(data)
      await setProducts(data)
    }

    fetchData()

  }, [])

  return (
    <ProductsContainer>
      {
        products.map((item, i) => (
          <ProductItem key={i} name={item.name} sku={item.sku} price={item.price} property={JSON.parse(item.property)} type={item.type} />
        ))
      }
    </ProductsContainer>
  )
}

export default Products
