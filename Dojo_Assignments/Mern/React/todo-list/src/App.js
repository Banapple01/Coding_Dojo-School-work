import './App.css';
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';

function App() {
	const [tasks, setTasks] = useState([]);
	
	return (
		<div className="App">
			<Task tasks={tasks} setTasks={setTasks} />
			<AddTask tasks={tasks} setTasks={setTasks} />
		</div>
	);
}

export default App;
