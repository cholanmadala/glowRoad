import React from 'react';
import { Container, Image} from 'react-bootstrap';

import './Policies.css';

const Policies = () => {
	return (
		<Container className="policies">
			<div className="policy"><Image src="/easyReturns.png" rounded /></div>
			<div className="policy"><Image src="/freeShipping.png" rounded  /></div>
			<div className="policy"><Image src="/securePayments.png" rounded  /></div>
		</Container>		
	);
};

export default Policies;