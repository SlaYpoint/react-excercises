import './styles.css';
import React from 'react';
import { Counter } from './components/Counter';
import CharCounter from './components/CharCounter';
import PasswordMatch from './components/PasswordMatch';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import SwitchTabs from './components/SwitchTabs';
import Toast from './components/Toast/Toast';
import DarkMode from './components/DarkMode';

export default function App() {
	return (
		<div className="App">
			{/* <Counter /> */}
			{/* <CharCounter /> */}
			{/* <PasswordMatch /> */}
			{/* <ShoppingCart /> */}
			{/* <SwitchTabs /> */}
			{/* <Toast /> */}
			<DarkMode />
		</div>
	);
}
