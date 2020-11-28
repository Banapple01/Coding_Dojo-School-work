import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState(0.01);
    const [Desc, setDesc] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            Title,
            Price,
            Desc
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price: $</label>
                <input type="float" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm

