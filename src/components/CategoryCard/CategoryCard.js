import React from 'react';
import { Image } from 'react-bootstrap';
import './CategoryCard.css';

const CategoryCard = ({src}) => {
	return (
		<div className="categoryCardContainer">
			<Image src={`/${src}.png`} rounded className="categoryCard" />
			<span>{src}</span>
		</div>
	);
};


export default CategoryCard;