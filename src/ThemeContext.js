import React, { createContext, useState } from "react"

const initialState = {
  sku: "",
  name: "",
  price: 0,
  productType: "",
  property: {}
}

export const ThemeContext = createContext(initialState)

export const ThemeContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <ThemeContext.Provider value={[state, setState]}>
    { children }
    </ThemeContext.Provider>
  )
}