import {addCategory, addProduct, addToCart} from '../actions';

const categories = ["Sarees", "Kurtis", "Bags", "Kids"];

const products = [
	{
		name: "Shree Creation Summer and Winter",
		cost: 249,
		imgSrc: "lady1",
		codFree: true
	},
	{
		name: "Marron Kurti",
		cost: 299,
		imgSrc: "lady2",
		codFree: false
	},
	{
		name: "Orange color saree",
		cost: 268,
		imgSrc: "lady1",
		codFree: true
	},
	{
		name: "Shree Creation Summer",
		cost: 249,
		imgSrc: "lady1",
		codFree: true
	},
	{
		name: "Marron Kurti",
		cost: 299,
		imgSrc: "lady2",
		codFree: true
	},
	{
		name: "Shree Creation Summer",
		cost: 249,
		imgSrc: "lady1",
		codFree: true
	},
	{
		name: "Marron Kurti",
		cost: 299,
		imgSrc: "lady2",
		codFree: true
	}
];

export const getCategories = () => {
	// Ideally, there should be an api call to get the cateogories here,
	// as of now, using a hardcoded array
	return (dispatch) => {
		categories.map((item) => {
			return dispatch(addCategory(item));
		});	
	}
};

export const getProducts = () => {
	// Ideally, there should be an api call to get the products here,
	// as of now, using a hardcoded array
	return (dispatch) => {
		products.map((item) => {
			return dispatch(addProduct(item));
		});
	}
};

export const addItemsToCart = (item) => {
	return (dispatch) => {
		dispatch(addToCart(item));
	}
}
