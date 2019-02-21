import React from 'react';
import { Container, Image} from 'react-bootstrap';

import './ProductCard.css';

const ProductCard = ({data, type, onClick}) => {
	const {imgSrc, name, cost, codFree} = data;
	return (
		<div>
		{!type ? 
			<Container className="productCard" onClick={() => onClick(data)}>
				<Image src={`/${imgSrc}.png`} rounded className="productImage" />
				<div className="productName">{name}</div>
				<div className="textContainer">
					<span className="price">&#8377; {cost}</span>
					<span className="cod">{codFree ? 'Free COD' : 'Paid COD'}</span>
				</div>
			</Container> : 
			<div className="offer">
				<Image src={`/${imgSrc}.png`} rounded className="offerImage" />
			</div>
		}
		</div>
	);
};

export default ProductCard;