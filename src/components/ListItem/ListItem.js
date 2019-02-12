import React from 'react';
import {Image} from 'react-bootstrap';

const ListItem = ({imgSrc}) => {
	return (
		<Image src={`/${imgSrc}.png`} rounded />
	);
};

export default ListItem;