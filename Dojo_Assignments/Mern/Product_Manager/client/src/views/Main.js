import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
    const [prods, setProds] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        Axios.get('http://localhost:8000/api/products/')
            .then(res=>{
                setProds(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = pId => {
        console.log(pId, prods);
        setProds(prods.products.filter(product => product._id != pId));
    }

    return (
        <div>
            <ProductForm/>
            <hr/>
            {
                loaded === true?
                <ProductList products={prods} removeFromDom={removeFromDom}/>
                : "It's loading"
            }
        </div>
    )
}

export default Main
