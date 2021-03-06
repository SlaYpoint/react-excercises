import React, { useState } from 'react';
import './cart.css';

const List = ({ items, addToCart }) => {
	return (
		<ul style={{ paddingInlineStart: 0 }}>
			{items.map((item) => (
				<div className="flex">
					<li className="shop-items">
						{item.prod}
						<button className="btn" onClick={() => addToCart(item)}>
							{' '}
							Add to Cart{' '}
						</button>
					</li>
				</div>
			))}
		</ul>
	);
};

const Cart = ({ cart, addToCart, removeFromCart }) => {
	return (
		<ul>
			{cart.map((item) => (
				<div className="flex">
					<li className="cart-items">
						{item.prod}
						<button className="btn" onClick={() => removeFromCart(item)}>
							{' '}
							-{' '}
						</button>
						{item.qty}
						<button className="btn" onClick={() => addToCart(item)}>
							{' '}
							+{' '}
						</button>
					</li>
				</div>
			))}
		</ul>
	);
};

const ShoppingCart = () => {
	const [cart, setCart] = useState([]);
	const items = [
		{
			id: 1,
			prod: 'Classmate Notebook',
			qty: 0
		},
		{
			id: 2,
			prod: 'Apsara Pencil',
			qty: 0
		},
		{
			id: 3,
			prod: 'Roroito Blue Pen',
			qty: 0
		}
	];

	const addToCart = (item) => {
		const idx = cart.findIndex((i) => item.id === i.id);
		if (idx >= 0) {
			let currCart = [...cart];
			currCart[idx].qty++;
			setCart(currCart);
		} else {
			setCart([...cart, { ...item, qty: 1 }]);
		}
	};

	const removeFromCart = (item) => {
		const idx = cart.findIndex((i) => item.id === i.id);
		if (idx >= 0) {
			let currCart = [...cart];
			if (currCart[idx].qty > 1) {
				currCart[idx].qty--;
				setCart(currCart);
			} else {
				currCart = currCart.filter((i) => i !== currCart[idx]);
				setCart(currCart);
			}
		}
	};
	return (
		<div className="container">
			<h1>Shopping Cart</h1>
			<List items={items} addToCart={addToCart} />
			<hr/>
			<div className="cart-holder">
				<h2>Cart</h2>
				<Cart
					cart={cart}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			</div>
		</div>
	);
};

export default ShoppingCart;
