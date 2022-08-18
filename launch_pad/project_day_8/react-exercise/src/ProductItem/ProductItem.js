import React from 'react';
import "./ProductItem.css"
//import "../UserItem/UserItem.css";

const ProductItem = (props) => {
    return(
        <div className = "product-item-container">Name: {props.product.name}
      <br></br>
      Description: {props.product.description}
      <br></br>
      RichDescription: {props.product.richDescription}
      <br></br>
      Image: {props.product.image}
      <br></br>
      Images: {props.product.images}
      <br></br>
      Brand: {props.product.brand}
      <br></br>
      Price: {props.product.price}
      <br></br>
      Category: {props.product.category}
      <br></br>
      CountInStock: {props.product.countInStock}
      <br></br>
      Rating: {props.product.rating}
      <br></br>
      NumReviews: {props.product.numReviews}
      <br></br>
      {props.product.isFeatured === true? "Featured": ""}
      <br></br>
      DateCreated: {props.product.dateCreated}
      </div>
      );
      }
      export default ProductItem;