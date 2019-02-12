import React from 'react';
import { Container, Image} from 'react-bootstrap';
import './CollectionCard.css';

const CollectionCard = ({imgSrc, isSummerSale}) => {

	return (
		<Container className="collectionCardContainer">
			<div className="titleImageContainer">
				<div className="collectionTitle">
				Solid Cotton Spandex Jeggings
				</div>
				<div className="imageGroup">
					<Image src={`/${imgSrc[0]}.png`} rounded className="imageOne" />
					<Image src={`/${imgSrc[1]}.png`} rounded className="imageTwo" />
					<Image src={`/${imgSrc[2]}.png`} rounded className="imageThree" />
				</div>
			</div>
			<div className="bottomLabel">10 designs Starting at 10,000</div>
		</Container>
	);
};

export default CollectionCard;