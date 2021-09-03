import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from "../../ThemeContext"
import { ProductsContainer } from "./ProductsEl"
import ProductItem from "../ProductItem"
import { motion } from "framer-motion"

const Products = () => {

  const [products, setProducts] = useState([])
  const [state] = useContext(ThemeContext)

  function removeProducts(item) {
    if (!state.ids.includes(item.sku)) return item
  }

  useEffect(() => {

    async function fetchData() {
      const res = await fetch("https://backend-crud-api.herokuapp.com/")
      const data = await res.clone().json() || []
      await setProducts(data)
    }

    fetchData()

  }, [])

  return (
    <ProductsContainer>
      {
        products.filter(removeProducts).map((item, i) => (
          <motion.div key={i} animate={{ opacity: [0, 1], y: [80, 0] }} transition={{ delay: `${i/2.25}`, duration: 1 }} >
            <ProductItem  name={item.name} sku={item.sku} price={item.price} property={JSON.parse(item.property)} type={item.type} />
          </motion.div>
        ))
      }
    </ProductsContainer>
  )
}

export default Products
