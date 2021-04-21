import React, { useState } from 'react';

const Cart = ({ item, cart }) => {
	return (
		<div>
			<li>{item}</li>
			<button>-</button>
			<li>{cart[item]}</li>
			<button>+</button>
		</div>
	);
};

const List = ({ items, addToCart }) => {
	return (
		<ul>
			{items.map((item) => {
				<div>
					<li> {item.prod} </li>
					<li> {item.qty} </li>
					<button onClick={() => addToCart(item.prod)}>Add to cart</button>
				</div>;
			})}
		</ul>
	);
};

const ShoppingCart = () => {
	const [cart, setCart] = useState({});
	const items = [
		{ prod: 'Blue Pen', qty: 15 },
		{ prod: 'Classmate Notebook', qty: 20 },
		{ prod: 'Eraser', qty: 10 }
	];

	const addToCart = (item) => {
		let currCart = { ...cart };
		if (!cart[item]) {
			currCart[item] = 1;
		} else {
			currCart[item]++;
		}
		setCart(currCart);
	};

	return (
		<div>
			<h1>shopMe</h1>
			<List items={items} addToCart={addToCart} />
			<div>
				<h2>My Cart</h2>
				<ul>
					{Object.keys(cart).map((item) => (
						<Cart item={item} cart={cart} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default ShoppingCart;
