import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (p_id) => {
        console.log(p_id)
        axios.delete("http://localhost:8000/api/products/delete/" + p_id)
            .then(res => {
                console.log(res);
                removeFromDom(p_id);
            })
    }

    return (
        <div>
            {
                props.products.products.map( (product, idx) => 
                    <div key={idx}>
                        <p onClick={() => {navigate(`products/${product._id}`)}}>
                            Title: {product.Title}<br/> Price: ${product.Price}<br/> 
                            Description - {product.Desc}</p>
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}

export default ProductList
