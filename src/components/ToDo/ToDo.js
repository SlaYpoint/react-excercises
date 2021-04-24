import React, { useState } from 'react';

const ToDo = () => {
	const [task, setTask] = useState('');
	const [toDo, setToDo] = useState([]);

	const addTask = (e) => setTask(e.target.value);

	const addToList = () => {
		setToDo([...toDo, { name: task, completed: false }]);
		setTask('');
	};

	const removeTask = (todo) => {
		let tasks = toDo.filter((item) => item !== todo);
		setToDo(tasks);
	};

	const taskDone = (todo) => {
		todo.completed = !todo.completed;
		setToDo([...toDo]);
	};

	return (
		<div className="container">
			<h1>toDo</h1>
			<input placeholder="Enter your task" value={task} onChange={addTask} />
			<button className="btn" onClick={addToList}>
				{' '}
				+{' '}
			</button>

			<div>
				{toDo.map((task) => {
					return (
						<li>
							<span
								style={{
									textDecoration: task.completed ? 'line-through' : 'none'
								}}
							>
								{task.name}
							</span>
							<button onClick={() => taskDone(task)}>✅</button>
							<button onClick={() => removeTask(task)}>❌</button>
						</li>
					);
				})}
			</div>
		</div>
	);
};

export default ToDo;
