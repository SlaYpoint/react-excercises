import './styles.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Counter } from './components/Counter';
import CharCounter from './components/CharCounter';
import PasswordMatch from './components/PasswordMatch';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import SwitchTabs from './components/SwitchTabs';
import Toast from './components/Toast/Toast';
import DarkMode from './components/DarkMode';
import ToDo from './components/ToDo/ToDo';

export default function App() {
	return (
		<div className="App">
			<nav className="navbar">
				<ul className="navlink">
					<li>
						<Link to="/">Router</Link>
					</li>
					<li>
						<Link to="/counter">Counter</Link>
					</li>
					<li>
						<Link to="/charcounter">Char Counter</Link>
					</li>
					<li>
						<Link to="/password">Password Match</Link>
					</li>
					<li>
						<Link to="/cart">Shopping Cart</Link>
					</li>
					<li>
						<Link to="/toast">Toast</Link>
					</li>
					<li>
						<Link to="/darkmode">Dark Mode</Link>
					</li>
					<li>
						<Link to="/todo">ToDo</Link>
					</li>
				</ul>
			</nav>
			{/* <Counter /> */}
			{/* <CharCounter /> */}
			{/* <PasswordMatch /> */}
			{/* <ShoppingCart /> */}
			{/* <SwitchTabs /> */}
			{/* <Toast /> */}
			{/* <DarkMode /> */}
			{/* <ToDo /> */}
			<Route exact path="/">
				<SwitchTabs />
			</Route>
			<Route path="/counter">
				<Counter />
			</Route>
			<Route path="/charcounter">
				<CharCounter />
			</Route>
			<Route path="/password">
				<PasswordMatch />
			</Route>
			<Route path="/cart">
				<ShoppingCart />
			</Route>
			<Route path="/toast">
				<Toast />
			</Route>
			<Route path="/darkmode">
				<DarkMode />
			</Route>
			<Route path="/todo">
				<ToDo />
			</Route>
		</div>
	);
}
