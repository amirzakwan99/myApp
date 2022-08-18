import React from 'react';
import "./UserItem.css";

const UserItem = (props) => {
    return (
    <div className = "user-item-container">Name: {props.user.name}
  <br></br>
  Email: {props.user.email}
  <br></br>
  PasswordHash: {props.user.passwordHash}
  <br></br>
  Phone: {props.user.phone}
  <br></br>
  Profile: {props.user.isAdmin === true? "Admin" : "Regular User"}
  <br></br>
  Street: {props.user.street}
  <br></br>
  Apartment: {props.user.apartment}
  <br></br>
  Zip: {props.user.zip}
  <br></br>
  City: {props.user.city}
  <br></br>
  Country: {props.user.country}
  </div>
  );
  }


export default UserItem;