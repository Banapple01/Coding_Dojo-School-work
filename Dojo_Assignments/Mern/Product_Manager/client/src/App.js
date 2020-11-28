import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import Update from './views/Update';

function App() {
	return (
	<div className="App">
		<Router>
			<Main path='products/'/>
			<ProductDetail path='products/:id'/>
			<Update path='products/update/:id'/>
		</Router>
	</div>
	);
}

export default App;
