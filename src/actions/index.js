export const addCategory = text => ({
  type: 'ADD_CATEGORY',
  data: text
});


export const addProduct = product => ({
	type: 'ADD_PRODUCT',
	data: product
});

export const addToCart = item => ({
	type: 'ADD_TO_CART',
	data: item
});