import React from 'react';
import { Container, Image} from 'react-bootstrap';

import './ImageCard.css';

const ImageCard = ({cost, imgSrc}) => {

	return (
		<Container >
			<Image src={`/${imgSrc}.png`} rounded className="imageTwo bordered" />
			<div className="price">&#8377; {cost}</div>
		</Container>
	);
};

export default ImageCard;