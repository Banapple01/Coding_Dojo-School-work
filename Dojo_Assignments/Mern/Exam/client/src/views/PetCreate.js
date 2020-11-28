import React from 'react';
import { navigate } from '@reach/router';
import PetForm from '../components/PetForm';

const PetCreate = () => {
    return (
        <div>
            <h1>Pet Shelter</h1>
            <p>Know a pet needing a home?</p>
            <button onClick={(e) => {navigate(`/`)}}>Back to Home</button>
            <hr/>
            <PetForm create={true}/>
        </div>
    )
}

export default PetCreate
