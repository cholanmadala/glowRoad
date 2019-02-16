import React, {Component} from 'react';
import { Container} from 'react-bootstrap';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import List from '../../components/List';
import CollectionCard from '../../components/CollectionCard';
import ImageCard from '../../components/ImageCard';

import Categories from '../Categories';
import Products from '../Products';
import Policies from '../Policies';
import Testmonials from '../Testmonials';
import './App.css';

const collectionData = [
	{imgSrc: ["collection1", "collection2", "collection3"] },
	{imgSrc: ["collection1", "collection2", "collection3"] },
	{imgSrc: ["collection1", "collection2", "collection3"] },
	{imgSrc: ["collection1", "collection2", "collection3"] },
	{imgSrc: ["collection1", "collection2", "collection3"] },
	{imgSrc: ["collection1", "collection2", "collection3"] },
	{imgSrc: ["collection1", "collection2", "collection3"] },
	{imgSrc: ["collection1", "collection2", "collection3"] },
	{imgSrc: ["collection1", "collection2", "collection3"] }
];

const offers = [
	{imgSrc:"offer"},
	{imgSrc:"offer"},
	{imgSrc:"offer"},
	{imgSrc:"offer"},
	{imgSrc:"offer"},
	{imgSrc:"offer"},
	{imgSrc:"offer"},
	{imgSrc:"offer"},
	{imgSrc:"offer"}
];

const womenDressesData = [{
		cost: 1200,
		imgSrc: "lady1",
	},
	{
		cost: 1200,
		imgSrc: "lady2",
	},
	{
		cost: 1200,
		imgSrc: "lady1",
	},
	{
		cost: 1200,
		imgSrc: "lady2",
	},
	{
		cost: 1200,
		imgSrc: "lady1",
	},
	{
		cost: 1200,
		imgSrc: "lady2",
	},
	{
		cost: 1200,
		imgSrc: "lady1",
	},
	{
		cost: 1200,
		imgSrc: "lady2",
	},
	{
		cost: 1200,
		imgSrc: "lady1",
	}
];

const menDressesData = [{
		cost: 1200,
		imgSrc: "men1",
	},
	{
		cost: 1200,
		imgSrc: "men2",
	},
{
		cost: 1200,
		imgSrc: "men1",
	},
	{
		cost: 1200,
		imgSrc: "men2",
	},
{
		cost: 1200,
		imgSrc: "men1",
	},
	{
		cost: 1200,
		imgSrc: "men2",
	},
{
		cost: 1200,
		imgSrc: "men1",
	},
	{
		cost: 1200,
		imgSrc: "men2",
	},
{
		cost: 1200,
		imgSrc: "men1",
	}
];


class App extends Component {

	render () {
		return (
			<Container className="app">
				<NavBar />
				<Header /> 
				<Categories />
				<Products title="Products" />
				<List data={collectionData} title="Collections" count={collectionData.length} isSummerSale >
					<CollectionCard />
				</List>
				<Policies />
				<Products data={offers} title="Offers" type={"Offers"} count={offers.length} />
				<List data={womenDressesData} title="Women" count={womenDressesData.length}  viewAll>
					<ImageCard />
				</List>
				<List data={menDressesData} title="Men" count={menDressesData.length}  viewAll>
					<ImageCard />
				</List>
				<Testmonials title="Our customers say"/>
				<Container className="questions">
				 	<h3>Have questions?</h3>
				 	<h6>E-mail us at care@myshopprime.com</h6>
				</Container>
			</Container>
		);
	}

}

export default App;