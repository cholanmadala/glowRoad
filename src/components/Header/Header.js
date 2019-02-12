import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './Header.css';

const Header = () => {
	return (
		<Container className="header">
			<Row>
				<Col xs={3} md={4}>
					<Image src="/logo.png" rounded  />
				</Col>
				<Col xs={9} md={8} className="title">
					<h4>PrimoFashion</h4>
					<div className="content">
						Sarees are for life. We are a saree design company
						based in Bangalore.
					</div>
				</Col>
			</Row>
		 </Container>
	);
}

export default Header;