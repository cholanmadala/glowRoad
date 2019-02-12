import React from 'react';
import { Container } from 'react-bootstrap';
import CategoryCard from '../../components/CategoryCard';

import './Categories.css';

const getCategories = (list) => {
	const data = list.map((item, index)=>{
		return 	<CategoryCard key={index} src={item}/>
	});
	return data;
};


const Categories = () => {
	return (
		<Container className="categoryContainer" >
			{getCategories(["Sarees", "Kurtis", "Bags", "Kids"])}
		</Container>
	);
}

export default Categories;