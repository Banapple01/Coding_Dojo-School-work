import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import WrongDroids from '../components/WrongDroids';
import Person from '../components/Person';
import Planet from '../components/Planet';
import Film from '../components/Film';
import Species from '../components/Species';

const Skyapi = (props) => {
    console.log(props.type, props.num)
    const {type, num} = props;
    const [error, setError] = useState(false);
    const [data, setData] = useState({});
    const [homeWorldId, setHomeWorldId] = useState(null);

    useEffect(() => {
        console.log("Fire!");
        axios.get(`https://swapi.dev/api/${type}/${num}/`)
            .then(response => {
                // const { name, height, mass, hair_color, skin_color } = response.data;
                // console.log(response.data);
                // console.log(name);
                // setData({name,height,mass,hair_color,skin_color, homeworld:""});
                setData(response.data);
                setError(false);
                if(type.toLowerCase() === "people") {
                    setHomeWorldId(response.data.homeworld.slice(29).slice(0,-1));
                }
            })
            .catch(err => setError(true));
    }, [type, num])

    return (
        <div>
            {
                error ? 
                <WrongDroids />
                : type.toLowerCase() === "people" ?
                <Person person={data} homeWorldId={homeWorldId}/>
                : type.toLowerCase() === "planets" ?
                <Planet planet={data}/>
                : type.toLowerCase() === "films" ?
                <Film film={data}/>
                : type.toLowerCase() === "species" ?
                <Species species={data}/>
                : ''
            }
        </div>
    )
}

export default Skyapi
