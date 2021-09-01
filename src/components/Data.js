import React, { useRef, useEffect, useState } from 'react'

const Data = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    async function fetchData() {
      const res = await fetch("http://localhost:80/practice/api/index.php")
      const data = await res.clone().json()
      await setProducts(data)
    }

    fetchData()

  }, [[]])

  return products
}

export default Data
