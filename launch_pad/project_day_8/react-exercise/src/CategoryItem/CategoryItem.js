import React from 'react';
import "../UserItem/UserItem.css";

const CategoryItem = (props) => {
    return(
        <div className = "user-item-container">Name: {props.category.name}
      <br></br>
      Icon: {props.category.icon}
      <br></br>
      Colour: {props.category.colour}
      </div>
      );
      }
      export default CategoryItem;