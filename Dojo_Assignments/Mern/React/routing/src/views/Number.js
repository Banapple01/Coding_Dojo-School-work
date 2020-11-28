import { navigate } from '@reach/router';
import React, { useEffect } from 'react';

const Number = (props) => {

    useEffect( () => {
        if(isNaN(props.num)){
            console.log("It's a word.");
            navigate('/home');
        } else {
            console.log("It's not a word.");
        }
    });

    return (
        <div>
            <h1>The number is: { props.num }</h1>
        </div>
    )
}

export default Number
