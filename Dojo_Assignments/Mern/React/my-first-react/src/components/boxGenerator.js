import React, { useState } from 'react'

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");
    const [boxColors, setBoxColors] = useState([]);

    const createBox = e => {
        e.preventDefault();
        console.log(color);
        setBoxColors([...boxColors, color]);
    }
    return (
        <div>
            <form onSubmit={ createBox }>
                <label htmlFor="color">
                    <input type="text" name="color" onChange={ (e) => setColor(e.target.value)}/>
                    <button type="submit">Add</button>
                </label>
            </form>
            {
                boxColors.map( (item, i) => (
                    <div key={ i } style={ {
                        margin: '5px',
                        height: '15px',
                        width: '15px',
                        display: 'inline-block',
                        backgroundColor: item
                    } }></div>
                ))
            }
        </div>
    )
}

export default BoxGenerator
