import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import PetList from '../components/PetList';

const Main = () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets/')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            });
    }, [])

    return (
        <div>
            <h1>Pet Shelter</h1>
            <p>These pets are looking for a good home</p>
            <button onClick={(e) => {navigate(`pets/new`)}}>add a pet to the shelter</button>
            <hr/>
            {
                loaded === true?
                <PetList pets={pets}/>
                : "It's loading"
            }
        </div>
    )
}

export default Main