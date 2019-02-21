import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

import './NavBar.css';

const NavBar = (props) => {
	return (
		<Navbar bg="white" expand="lg" className="navBarContainer">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
				  <Nav.Link href="#home">Home</Nav.Link>
				  <Nav.Link href="#link">Link</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			
			<Navbar.Brand className="navBarBrand" href="#home">
				<Image src="/cart.png" rounded  />
				<span className="cart">{props.cart.length}</span>
			</Navbar.Brand>
			</Navbar>
	);
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  {}
)(NavBar);