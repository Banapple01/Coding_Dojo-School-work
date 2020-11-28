import React from 'react';
import { navigate } from '@reach/router';
import PetForm from '../components/PetForm';

const PetUpdate = (props) => {
    return (
        <div>
            <button onClick={(e) => {navigate(`/`)}}>Back to Home</button>
            <h1>Pet Shelter</h1>
            <PetForm create={false} id = {props.id}/>
        </div>
    )
}

export default PetUpdate