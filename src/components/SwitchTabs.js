import React, { useState } from 'react';

const Home = () => <h2> You are on Home Page</h2>;
const About = () => <h2> You are on About Page</h2>;
const Profile = () => <h2> You are on Profile Page</h2>;

const SwitchTabs = () => {
	const [tab, setTab] = useState(<Home />);

	return (
		<div className="container">
			<h1>Router</h1>
			<div>
				<button className="btn" onClick={() => setTab(<Home />)}>
					Home
				</button>
				<button className="btn" onClick={() => setTab(<About />)}>
					About
				</button>
				<button className="btn" onClick={() => setTab(<Profile />)}>
					Profile
				</button>
			</div>
			{tab}
		</div>
	);
};

export default SwitchTabs;
