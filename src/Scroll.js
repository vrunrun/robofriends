import React from 'react';

const Scroll = (props) => {
	/* 
		css: overflow-y
		jsx: overflowY
		You must camelcase for JSX
	*/
	return (
		// Use inline styling to Make child component scrollable
		// CSS property 'overflow' handle scrollbars
		// 80vh means 80% of view height
		<div style={{overflowY: 'scroll', border: '2px solid black', height: '70vh'}}>
			{props.children}
		</div>
	)
};

export default Scroll;