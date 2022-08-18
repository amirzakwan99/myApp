import React from 'react';
import './MyCustomCard.css';

const MyCustomCard = (props) => {
    console.log(props);
  return (
    <div className='card-container'>I enjoy {props.hobby} in the {props.timeOfTheDay}<br></br>
    </div>
  );
  
};

export default MyCustomCard;

//rafce pastu tab keluar bawah ni

//import React from 'react'

//const MyCustomCard = () => {
//  return (
//    <div>MyCustomCard</div>
//  )
//}

//export default MyCustomCard