const categories = (state = [], action) => {
  switch (action.type) {
     case 'ADD_CATEGORY' :
     	return [
     	...state,
     	action.data
     	]
    default:
      return state
  }
}

export default categories