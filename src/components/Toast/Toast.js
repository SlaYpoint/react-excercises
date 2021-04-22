import React, { useState } from 'react';
import './toast.css';

const Toast = () => {
	const [toast, setToast] = useState('none');
	return (
		<div className="container">
			<h1>Toast</h1>
			<button className="btn" onClick={() => setToast('block')}>
				Click here
			</button>
			<div className="toast" style={{ display: toast }}>
				<span className="close" onClick={() => setToast('none')}>
					&times;
				</span>
				<p>Hi. Iam Toast.</p>
			</div>
		</div>
	);
};

export default Toast;
