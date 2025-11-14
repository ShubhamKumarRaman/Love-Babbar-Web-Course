import React, { useState } from 'react'

import ProductDate from './ProductDate'
import Card from './Card'
import './ProductItem.css'

const ProductItem = (props) => {

    const [title, setTitle] = useState(props.title);

    // const title = props.title;

    function clickHandler() {
        setTitle('Popcorn');
        console.log("Button cliecked")
    }
    return (
        <Card className='product-item'>
            <ProductDate date={props.date} />
            <div className="product-item__description">
                <h2>{title}</h2>
                <div className="product-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Card>
    )
}

export default ProductItem
