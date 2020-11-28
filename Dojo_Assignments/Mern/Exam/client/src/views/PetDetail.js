import React, {useEffect, useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const PetDetail = (props) => {
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        console.log('running')
        axios.get("http://localhost:8000/api/pets/" + props.id)
            .then(res => {
                setPet(res.data.Pet);
                console.log(res.data);
                setLoaded(true);
            })
    }, [])

    const deleteProduct = (p_id) => {
        console.log(p_id)
        axios.delete("http://localhost:8000/api/pets/delete/" + p_id)
            .then(res => {
                console.log(res);
                navigate(`/`);
            })
    }

    return (
        loaded === true?
            <div>
                <button onClick={(e) => {navigate(`/`)}}>Back to Home</button>
                <h1>Pet Shelter</h1>
                <p>Details about: {pet.Name}</p>
                <p>Pet Type: {pet.Type}</p>
                <p>Description: {pet.Desc}</p>
                <p>Skill1: {pet.Skill1}</p>
                <p>Skill2: {pet.Skill2}</p>
                <p>Skill3: {pet.Skill3}</p>
                <button onClick={(e) => {deleteProduct(pet._id)}}>Adopt {pet.Name}!</button>
            </div>
        :'Its loading'
    )
}

export default PetDetail
