const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_PROPERTY":
      return {
        product: {
          ...state.product,
          property: {...state.product.property, ...action.payload}
        },
        err: ""
      }
    case "ADD_VAL":
      return {
        product: {...state.product, ...action.payload},
        err: ""
      }
    case "RESET_PROP":
      return {
        product: {...state.product, property: {}},
        err: ""
      }
    case "ERROR":
      return {
        product: {...state.product},
        err: action.payload.msg
      }
    default:
      return state
  }
}

export default reducer