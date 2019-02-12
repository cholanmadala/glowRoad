import React from 'react';
import { Container} from 'react-bootstrap';

import './List.css';

const getListItems = (data, type, children, rest) => {
	const dataContent = data.map((itemData, index)=>{
		return 	(
			<div key={index}>
				{React.cloneElement(children, { ...itemData, type: type, ...rest })}
			</div>
		);
	});
	return dataContent;
};


const List = ({title, count, data, type, children, viewAll, ...rest}) => {
	const titleName = title.toUpperCase();

	return (
		<Container className="productContainer">
			{viewAll ? 
				<div className="menWomenTitleContainer">
					<span className="itemTitle">{title}</span>
					<span className="externalLink">
						<span>VIEW ALL</span>
					</span> 
				</div>
				:
				<div>
					<span className="itemTitle">{title}</span>
					{!type ? <span className="count">{` (${count})`}</span> : null}
				</div>
			}
			<div className="productList">
				{getListItems(data, type, children, rest)}
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

export default List;