import React, {useEffect, useState} from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';

const ProductDetail = (props) => {
    const [prod, setProd] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        console.log('running')
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setProd(res.data);
                setLoaded(true);
                console.log(prod.product);
            })
    }, [])
    return (
        loaded === true?
            <div>
                <p>Title: {prod.product.Title}</p>
                <p>Price: ${prod.product.Price}</p>
                <p>Description: {prod.product.Desc}</p>
                <button onClick={() => {navigate(`update/${props.id}`)}}>Edit</button>
                <button onClick={() => {navigate(``)}}>Back To Main</button>
            </div>
        :'Its loading'
    )
}

export default ProductDetail
