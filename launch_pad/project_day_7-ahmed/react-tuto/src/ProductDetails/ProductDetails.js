import React from 'react'
import './ProductDetails.css';

const ProductDetails = (props) => {
    console.log(props)
  return (
    <div className='product-container'>{props.name} <br></br> 
    {props.brand} <br></br> Price: RM{props.price} <br></br><br></br>
    {props.status}
    </div>
  )
}

export default ProductDetails;


