import { navigate } from '@reach/router';
import React, { useEffect } from 'react';

const Hello = (props) => {

    useEffect( () => {
        if(isNaN(props.word)){
            console.log("It's a word.");
        } else {
            console.log("It's not a word.");
            navigate('/home');
        }
    }, []);

    return (
        <div>
            <h1>The word is: { props.word }</h1>
        </div>
    )
}

export default Hello
