import React, { createContext, useReducer } from "react"
import reducer from "./reducer"

const initialState = {
  sku: "",
  name: "",
  price: 0,
  productType: "",
  property: {}
}

export const ThemeContext = createContext(initialState)

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
    { children }
    </ThemeContext.Provider>
  )
}