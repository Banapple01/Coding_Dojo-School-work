import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const PetForm = (props) => {
    const [Name, setName] = useState('');
    const [Type, setType] = useState('');
    const [Desc, setDesc] = useState('');
    const [Skill1, setSkill1] = useState('');
    const [Skill2, setSkill2] = useState('');
    const [Skill3, setSkill3] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    
    useEffect(() => {
        if(props.create === false) {
            console.log('running form useEffect')
            axios.get("http://localhost:8000/api/pets/" + props.id)
                .then(res => {
                    console.log(res.data);
                    setName(res.data.Pet.Name);
                    setType(res.data.Pet.Type);
                    setDesc(res.data.Pet.Desc);
                    setSkill1(res.data.Pet.Skill1);
                    setSkill2(res.data.Pet.Skill2);
                    setSkill3(res.data.Pet.Skill3);
                    setLoaded(true);
                })
        }
    }, [])

    const onSubmitHandler = e => {
        e.preventDefault();
        if(props.create === true) {
            axios.post('http://localhost:8000/api/pets/new', {
                Name,
                Type,
                Desc,
                Skill1,
                Skill2,
                Skill3
            })
                .then(res => {
                    console.log(res);
                    navigate(`/`);
                })
                .catch(err => {
                    console.log(err.response.data.error.errors);
                    const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                });
        }
        else {
            axios.put("http://localhost:8000/api/pets/update/" + props.id, {
                Name,
                Type,
                Desc,
                Skill1,
                Skill2,
                Skill3
            })
                .then(res => {
                    console.log(res);
                    navigate(`/`);
                })
                .catch(err => {
                    console.log(err.response.data.error.errors);
                    const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                });
        }
    }

    return (
        loaded === true?
            <div>
                <p>Edit {Name}</p>
                <hr/>
                <form onSubmit={onSubmitHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>
                        <label>Pet Name:</label><br />
                        <input type="text" 
                        name="Name" 
                        value={Name} 
                        onChange={(e) => { setName(e.target.value) }} />
                    </p>
                    <p>
                        <label>Pet Type:</label><br />
                        <input type="text"
                        name="Type" 
                        value={Type} 
                        onChange={(e) => { setType(e.target.value) }} />
                    </p>
                    <p>
                        <label>Pet Description:</label><br />
                        <input type="text" 
                        name="Desc"
                        value={Desc} 
                        onChange={(e) => { setDesc(e.target.value) }} />
                    </p>
                    <p>Skills (optional)</p>
                    <p>
                        <label>Skill 1:</label><br />
                        <input type="text" 
                        name="Skill1"
                        value={Skill1} 
                        onChange={(e) => { setSkill1(e.target.value) }} />
                    </p>
                    <p>
                        <label>Skill 2:</label><br />
                        <input type="text" 
                        name="Skill2"
                        value={Skill2} 
                        onChange={(e) => { setSkill2(e.target.value) }} />
                    </p>
                    <p>
                        <label>Skill 3:</label><br />
                        <input type="text" 
                        name="Skill3"
                        value={Skill3} 
                        onChange={(e) => { setSkill3(e.target.value) }} />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        :<div>
            <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Pet Name:</label><br/>
                <input type="text" onChange = {(e)=>setName(e.target.value)}/>
            </p>
            <p>
                <label>Pet Type:</label><br/>
                <input type="text" onChange = {(e)=>setType(e.target.value)}/>
            </p>
            <p>
                <label>Pet Description:</label><br/>
                <input type="text" onChange = {(e)=>setDesc(e.target.value)}/>
            </p>
            <p>Skills (optional)</p>
            <p>
                <label>Skill 1:</label><br />
                <input type="text" onChange={(e) => { setSkill1(e.target.value) }} />
            </p>
            <p>
                <label>Skill 2:</label><br />
                <input type="text" onChange={(e) => { setSkill2(e.target.value) }} />
            </p>
            <p>
                <label>Skill 3:</label><br />
                <input type="text" onChange={(e) => { setSkill3(e.target.value) }} />
            </p>
            <input type="submit"/>
            </form>
        </div>
    )
}

export default PetForm
