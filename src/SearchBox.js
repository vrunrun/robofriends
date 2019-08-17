import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		
		<div className="pa2">
			{/* type = 'search' */}
			{/* Pass event handler to event listener onChange Event*/}
			<input 
				onChange={searchChange}
				className="pa3 ba b--green bg-lightest-blue"
				type="search" 
				placeholder="search robots"
			/>	
		</div>
		
	)
}

export default SearchBox;