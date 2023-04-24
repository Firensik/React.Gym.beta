
import './App.css';
import { useState } from 'react';



function App() {
  const [number,setNumber] = useState("");
  const [myArray, setMyArray] = useState([])

  const handleArray = () => {
    setMyArray([...myArray,number]);
    setNumber(Math.random().toString(16).slice(-6))
    
    
   console.log(myArray)
  }



  const handleColor = (newColor) => {
    setNumber(newColor)
  }
  

  return (
    <div className="App">
      <h1 style={{color:"#" + number}}>Zadanie dla Endriu</h1>
      <button onClick={() => { handleArray();}}>Wcisnij mnie!</button>

      <div>{myArray.map((number,index) => (
        <button key={index + 1} style={{backgroundColor:"#" + number}} onClick={() => handleColor(number)}></button>
      ))}</div>
     
    </div>
  );
}

export default App;
