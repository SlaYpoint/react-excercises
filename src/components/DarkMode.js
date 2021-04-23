import React, { useState } from 'react';

const DarkMode = () => {
	const [toggle, setToggle] = useState(true);
	const [color, setColor] = useState('white');

	const themeSet = () => {
		toggle ? setColor('#243133') : setColor('white');
		setToggle(!toggle);
	};

	return (
		<div className="container" style={{ background: color }}>
			<h1>Theme Toggler</h1>
			<button className="btn" onClick={() => themeSet()}>
				Toggle
			</button>
		</div>
	);
};
export default DarkMode;
