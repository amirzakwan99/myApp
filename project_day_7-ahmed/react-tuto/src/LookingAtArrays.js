import React from 'react'
import PlanetItem from "./PlanetItem/PlanetItem"

const LookingAtArrays = () => {
    // const myObject = {id: 1, name: "Ahmed", age: 34};
    // console.log(myObject);
   
    // const fruit = 'tomato';  <<< string
    // const obj = {}; <<< object
    // const arr = [{id: 1, name: 'Ahmed', age: 25}, 
    //              {id: 2, name: "Kuwe", age: 29}]



    const planets = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];
    
    const planets2 = [
        {
          id: 1,
          planetName: "Mars",
          distance: "12535M",
          hasOxygen: true,
          noOfMoons: 1,
        },
        {
          id: 2,
          planetName: "Venus",
          distance: "52535M",
          hasOxygen: false,
          noOfMoons: 0,
        },
        {
          id: 3,
          planetName: "Jupiter",
          distance: "598535M",
          hasOxygen: false,
          noOfMoons: 5,
        },
        {
          id: 4,
          planetName: "Earth",
          distance: "0M",
          hasOxygen: true,
          noOfMoons: 2,
        },
        {
          id: 5,
          planetName: "Saturn",
          distance: "945734M",
          hasOxygen: false,
          noOfMoons: 12,
        },
      ];
    
    return (
        <div>
            {planets2.map((item) => {
                return <PlanetItem key={item.id} planet = {item}/>;
                // return <PlanetItem key={item} name = {item.planetName} distance={item.distance} status={item.hasOxygen} moons={item.noOfMoons}/>;
            })}
        </div>
    );
    
};

export default LookingAtArrays;