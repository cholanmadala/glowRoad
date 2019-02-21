import React, {Component} from 'react';
import { Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import {getProducts, addItemsToCart} from '../../actionCreators';

import './Products.css';

class Products extends Component {

	componentDidMount() {
		//to get the products, we call the actionCreator
		this.props.getProducts();
	}

	getProducts = (data, type) => {
		const dataContent = data.map((itemData, index)=>{
			return 	(
				<ProductCard onClick={this.props.addItemsToCart} key={index} data={itemData} type={type} />
			);
		});
		return dataContent;
	}

	render() {
		const {title, type, titleName} = Object.assign({}, this.props);

		return (
			<Container className="productContainer">
				<div>
					<span className="itemTitle">{title}</span>
					{!type ? <span className="count">{` (${this.props.products.length})`}</span> : null}
				</div>
				<div className="productList">
					{this.getProducts( this.props.data ? this.props.data : this.props.products, type)}
				</div>
				{!type ? 
					<div className="externalLink">
						<span>VIEW ALL {titleName}</span>
					</div> :
					null
				}
				
			</Container>
		);
	}
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  {
  	getProducts,
  	addItemsToCart
  }
)(Products);