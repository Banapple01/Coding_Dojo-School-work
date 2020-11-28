import './App.css';
import React, {useState} from 'react';
import { Router, navigate } from '@reach/router';
import Skyapi from './components/Skyapi';

function App() {
	const [type, setType] = useState('');
	const [num, setNum] = useState(0);

	const seeType = (e) => {
		setType(e.target.value);
	}
	const seeNum = (e) => {
		setNum(e.target.value);
	}
	const callApi = (e) => {
		console.log('yeet');
		navigate(`/${type}/${num}/`);
	}
	return (
		<div className="App">
			<label htmlFor="type">Search for: </label>
			<select name="type" onChange={seeType}>
				<option value="planets">Planets</option>
				<option value="people">People</option>
				<option value="films">Films</option>
				<option value="species">Species</option>
			</select>
			<label htmlFor="numb">id: </label>
			<input type="number" name="numb" onChange={seeNum}/>
			<button onClick={callApi}>Search</button>
		<Router>
			<Skyapi path="/:type/:num/"/>
		</Router>
		</div>
	);
}

export default App;
