import { navigate } from '@reach/router';
import React, { useEffect } from 'react';

const Comphello = (props) => {
    const {word, textC, backC} = props
    
    useEffect( () => {
        if(isNaN(word)){
            console.log("It's a word.");
        } else {
            console.log("It's not a word.");
            navigate('/home');
        }
    }, []);

    return (
        <div>
            <h1 style={{color: textC, backgroundColor:backC}}>The word is: {word}</h1>
        </div>
    )
}

export default Comphello
