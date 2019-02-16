const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        action.data
      ]
   
    default:
      return state
  }
}

export default products;