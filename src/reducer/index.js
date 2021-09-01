const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_PROPERTY":
      return {
        ...state,
        property: {...state.property, ...action.payload}
      }
    case "ADD_VAL":
      return {
        ...state,
        ...action.payload
      }
    case "RESET_PROP":
      return {
        ...state,
        property: {}
      }
    default:
      return state
  }
}

export default reducer