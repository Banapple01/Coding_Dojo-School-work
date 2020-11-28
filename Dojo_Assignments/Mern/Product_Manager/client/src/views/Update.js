import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Update = (props) => {
    console.log(props.id);
    const [loaded, setLoaded] = useState(false);
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState(0.01);
    const [Desc, setDesc] = useState('');

    useEffect(() => {
        console.log('running')
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setTitle(res.data.product.Title);
                console.log(res.data.product.Title);
                setPrice(res.data.product.Price);
                setDesc(res.data.product.Desc);
                setLoaded(true);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/update/" + props.id, {
            Title,
            Price,
            Desc
        })
            .then(res => console.log(res))
    }

    return (
        loaded === true?
            <div>
                <h1>Update Product</h1>
                <form onSubmit={updateProduct}>
                    <p>
                        <label>Title</label><br />
                        <input type="text" 
                        name="Title" 
                        value={Title} 
                        onChange={(e) => { setTitle(e.target.value) }} />
                    </p>
                    <p>
                        <label>Price</label><br />
                        <input type="float"
                        name="Price" 
                        value={Price} 
                        onChange={(e) => { setPrice(e.target.value) }} />
                    </p>
                    <p>
                        <label>Description</label><br />
                        <input type="text" 
                        name="Desc"
                        value={Desc} 
                        onChange={(e) => { setDesc(e.target.value) }} />
                    </p>
                    <input type="submit" />
                </form>
                <button onClick={() => {navigate(`products/`)}}>Back To Main</button>
            </div>
        :'Its loading'
    )
}

export default Update
