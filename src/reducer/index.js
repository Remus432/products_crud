const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_PROPERTY":
      return {
        product: {
          ...state.product,
          property: {...state.product.property, ...action.payload}
        },
        err: "",
        ids: [...state.ids]
      }
    case "ADD_VAL":
      return {
        product: {...state.product, ...action.payload},
        err: "",
        ids: [...state.ids]
      }
    case "RESET_PROP":
      return {
        product: {...state.product, property: {}},
        err: "",
        ids: [...state.ids]
      }
    case "ERROR":
      return {
        product: {...state.product},
        err: action.payload.msg,
        ids: [...state.ids]
      }
    case "DELETE":
      return {
        ...state,
        ids: [...action.payload.ids]
      }
    default:
      return state
  }
}

export default reducer