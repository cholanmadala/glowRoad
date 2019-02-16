import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Testmonials.css';

const testmonial =  `We are manufacturers of Ethnic Wear from
Surat. We are very happy with the reseller
network we have been able to build on
GlowRoad and the sales has been growing
exponentially month on month :)`;
const sender ="- KIRTI SAXENA, KANPUR";

const Testmonials = ({title}) => {
	return (
		<Container className="testmonialContainer" >
			<div className="menWomenTitleContainer">
					<span className="itemTitle">{title}</span>
				</div>
			<div className="testContainer">
				<div>
					<Image src={`testmonial.png`} rounded className="testImage bordered" />
				</div>
				<div>{testmonial}</div>
				
			</div>
			<div className="sender">{sender} </div>
		</Container>
	);
}

export default Testmonials;