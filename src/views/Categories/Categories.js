import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import CategoryCard from '../../components/CategoryCard';
import {getCategories} from '../../actionCreators';

import './Categories.css';

class Categories extends Component {
	
	componentDidMount (){
		//to get the categories, we call the actionCreator
		this.props.getCategories();
	}

	renderCategories = (list) => {
		const data = list.map((item, index)=>{
			return 	<CategoryCard key={index} src={item}/>
		});
		return data;
	}

	render () {
		return (
			<Container className="categoryContainer" >
				{this.renderCategories(this.props.categories)}
			</Container>
		);
	}
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  {
  	getCategories
  }
)(Categories);