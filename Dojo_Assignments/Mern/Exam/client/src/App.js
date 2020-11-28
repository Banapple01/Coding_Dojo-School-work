import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import PetCreate from './views/PetCreate';
import PetDetail from './views/PetDetail';
import PetUpdate from './views/PetUpdate';

function App() {
	return (
		<div className="App">
			<Router>
				<Main path='/'/>
				<PetDetail path='/pets/:id'/>
				<PetUpdate path='/pets/:id/edit'/>
				<PetCreate path='/pets/new'/>
			</Router>
		</div>
	);
}

export default App;
