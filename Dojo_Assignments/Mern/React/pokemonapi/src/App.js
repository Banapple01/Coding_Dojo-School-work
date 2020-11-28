import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [dataFetched, setDataFetched] = useState(false);
    const [pokemon, setPokemon] = useState([]);
    // let pokename = {name: ''};

    const fetchPoke = (e) => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            setPokemon([...response.data.results]);
            setDataFetched(true);
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="App">
            <button onClick={fetchPoke}>Fetch Pokemon</button>
            {
                dataFetched === true ?
                <ul>{
                    pokemon.map( (item, i) => 
                        <li key={i}>{item.name}</li>
                    )}
                </ul>
                : ''
            }
        </div>
    );
}

export default App;
