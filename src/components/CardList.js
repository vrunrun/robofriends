import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		// return one element need to wrap in a <div>
		// Wrap JS expression with {}
		<div>
			{
				// The 2nd argument of map() 'i' is the index
				robots.map((robot, i) => {
					// map() requires a return statement
					// remember to add a 'key' prop
					return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
				})
			}
		</div>
	);
};

export default CardList;