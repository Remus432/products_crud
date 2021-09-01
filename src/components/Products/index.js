import React, { useEffect, useState } from 'react'
import { ProductsContainer } from "./ProductsEl"
import ProductItem from "../ProductItem"

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    async function fetchData() {
      const res = await fetch("http://localhost:80/practice/api/index.php")
      const data = await res.clone().json()
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
