import React from 'react';
import "./PlanetItem.css";

const PlanetItem = (props) => {
    return (
    <div className = "planet-item-container">{props.planet.planetName}
  <br></br>
  Distance: {props.planet.distance}
  <br></br>
  No. of Moons: {props.planet.noOfMoons}
  <br></br>
  {props.planet.hasOxygen === true? "Has Oxygen" : "Doesn not have Oxygen"}
  </div>
  );
  }

//   const PlanetItem = (props) => {
//     let O2status;
//     if (props.planet.hasOxygen == true){
//       O2status = "Has Oxygen"
//     } 
//     else {
//       O2status = "Has no Oxygen"
//     }
//       return <div className = "planet-item-container">{props.planet.planetName}
//     <br></br>
//     Distance: {props.planet.distance}
//     <br></br>
//     No. of Moons: {props.planet.noOfMoons}
//     <br></br>
//     {O2status}
//     </div>
//     }
export default PlanetItem;