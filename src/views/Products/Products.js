import React from 'react';
import { Container} from 'react-bootstrap';
import ProductCard from '../../components/ProductCard';

import './Products.css';

const getProducts = (data, type) => {
	const dataContent = data.map((itemData, index)=>{
		return 	(
			<ProductCard key={index} data={itemData} type={type} />
		);
	});
	return dataContent;
};


const Products = ({title, count, productData, type}) => {
	const titleName = title.toUpperCase();
	return (
		<Container className="productContainer">
			<div>
				<span className="itemTitle">{title}</span>
				{!type ? <span className="count">{` (${count})`}</span> : null}
			</div>
			<div className="productList">
				{getProducts(productData, type)}
			</div>
			{!type ? 
				<div className="externalLink">
					<span>VIEW ALL {titleName}</span>
				</div> :
				null
			}
			
		</Container>
	);
};

export default Products;