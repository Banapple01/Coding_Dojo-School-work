import React from 'react';
// import axios from 'axios';
import { navigate } from '@reach/router';

const PetList = (props) => {
    return (
        <div>
            {
                props.pets.Pets.map( (pet, index) => 
                    <div key={index}>
                        <p> Name: {pet.Name}<br/> Type: {pet.Type}<br/> 
                            {/* Description - {pet.Desc} */}</p>
                        <button onClick={(e) => {navigate(`pets/${pet._id}`)}}>Details</button>
                        <button onClick={(e) => {navigate(`pets/${pet._id}/edit`)}}>Edit</button>
                    </div>
                )
            }
        </div>
    )
}

export default PetList
