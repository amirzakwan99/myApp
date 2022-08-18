import logo from './logo.svg';
import './App.css';
import MyCustomCard from './MyCustomCard/MyCustomCard';
import { useState } from 'react';
import ProductDetails from './ProductDetails/ProductDetails';

function App() {
  const name = 'Amir Z';
  const age = 23;
  // const data = ['Flowers', 'People', 'Watches'];
  // let x = 'Yellow';

  const [x, setX] = useState("YELLOW"); //similar to const x = '123' but its reactive
  const [hobby1, setHobby1] = useState("Running"); 
  const [time1, setTime1] = useState("Morning"); 


  const productName = 'iPhone'
  const productBrand = 'Apple'
  const productPrice = 4400
  const [status, setStatus] = useState("Available");
  

  const changeAgeHandler = () => {
    setX('RED') //kalau guna let x = "RED" dapat error
  };
 
 
  const changeHobbyHandler = () => {
    setHobby1('Dancing'); 
  };

  const changeStatusHandler = () => {
    setStatus('Purchased') 
  };

  return (
  <div>
    <h1>Welcome to my store!</h1>
    <p>
      My name is {name} and my age is {age}
    </p>
    <button onClick={changeAgeHandler}>Change Colour</button>
    
    <br></br>
    <button onClick={changeHobbyHandler}>Change Hobby</button>
    <p>{x}</p>
    <MyCustomCard hobby = {hobby1} timeOfTheDay = {time1} />
    <br></br>
    <ProductDetails name = {productName} brand = {productBrand} price = {productPrice} status = {status}/>
    
    <button onClick={changeStatusHandler}>Purchase</button>
    

    {/*  
    <MyCustomCard hobby = {hobby2} timeOfTheDay = {time2}/> 
    <MyCustomCard hobby = {hobby3} timeOfTheDay = {time3}/>  */}
    
  </div>
  );
}

export default App;
