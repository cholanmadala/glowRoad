import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';

import './NavBar.css';

const NavBar = () => {
	return (
		<Navbar bg="white" expand="lg" className="navBarContainer">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
				  <Nav.Link href="#home">Home</Nav.Link>
				  <Nav.Link href="#link">Link</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			
			<Navbar.Brand href="#home">
				<Image src="/cart.png" rounded  />
			</Navbar.Brand>
			</Navbar>
	);
};

export default NavBar;