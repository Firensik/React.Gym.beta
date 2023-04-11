import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [results , setResults] = useState({
    25:{
      plates:0,
    },
    20:{
      plates:0
    },
    15:{
      plates:0
    },
    10:{
      plates:0
    },
    5:{
      plates:0
    },
    250:{
      plates:0
    },
  125:{
    plates:0
    },
    'Rest':{
      rest:0
    },
  })

  const [weight , setWeights]= useState({
    25:{
      label: "25kg",
      plate50: 50,
      quantity:0, //ilosc
    },
    20:{
      label: "20kg",
      plate40: 40,
      quantity:0,
    },
    15:{
      label: "15kg",
      plate30: 30,
      quantity:0,
    },
    10:{
      label: "10kg",
      plate20: 20,
      quantity:0,
    },
    5:{
      label: "5kg",
      plate10: 10,
      quantity:0,
    },
    2.5:{
      label: "2.5kg",
      plate25: 5,
      quantity:0,
    },
    1.25:{
      label: "1.25kg",
      plate125: 2.5,
      quantity:0,
    },
    eleiko:{
      label:"eleiko",
      quantity:0,
    }
  })

  function changeQuantity(e){
    const {name, value} = e.target

   const Quantity = {...weight[name], quantity: parseFloat(value)};
   const newQuantity = {...weight, [name]: Quantity};

   setWeights(newQuantity)

    // console.log(newQuantity)
  }

  
  const mathematic = (e) => {
   
    Object.entries(weight).forEach(([key,value]) => {
      console.log(key,value)
    })
   

if(weight['eleiko'].quantity === 0 || weight['eleiko'].quantity < 20 ){
  alert("Musisz podac ciężar wiekszy niż 20")
 }else{
 while(weight["eleiko"].quantity >= weight[25].plate50 && weight[25].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[25].plate50
  weight[25].quantity = weight[25].quantity - 2
  console.log(weight["eleiko"])
  results[25].plates = results[25].plates + 2
  console.log(results)
  console.log("25 = " +  weight[25].quantity)
 }
 while(weight["eleiko"].quantity >= weight[20].plate40 && weight[20].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[20].plate40
  weight[20].quantity = weight[20].quantity - 2
  results[20].plates = results[20].plates + 2
  console.log(weight["eleiko"])
  console.log("20 = " + weight[20].quantity)
 }
 while(weight["eleiko"].quantity >= weight[15].plate30 && weight[15].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[15].plate30
  weight[15].quantity = weight[15].quantity - 2
  results[15].plates = results[15].plates + 2
  console.log(weight["eleiko"])
  console.log("15 = " + weight[15].quantity)
 }
 while(weight["eleiko"].quantity >= weight[10].plate20 && weight[10].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[10].plate20
  weight[10].quantity = weight[10].quantity - 2
  results[10].plates = results[10].plates + 2
  console.log(weight["eleiko"])
  console.log("10 = " + weight[10].quantity)
 }
 while(weight["eleiko"].quantity >= weight[5].plate10 && weight[5].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[5].plate10
  weight[5].quantity = weight[5].quantity - 2
  results[5].plates = results[5].plates + 2
  console.log(weight["eleiko"])
  console.log("5 = " + weight[5].quantity)
 }
 while(weight["eleiko"].quantity >= weight[2.5].plate25 && weight[2.5].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[2.5].plate25
  weight[2.5].quantity = weight[2.5].quantity - 2
  results[250].plates = results[250].plates + 2
  console.log(weight["eleiko"])
  console.log("2.5 = " + weight[2.5].quantity)
 }
 while(weight["eleiko"].quantity >= weight[1.25].plate125 && weight[1.25].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[1.25].plate125
  weight[1.25].quantity = weight[1.25].quantity - 2
  results[125].plates = results[125].plates + 2
  console.log(weight["eleiko"])
  console.log("1.25 = " + weight[1.25].quantity)
 }

 }
 results['rest'].rest = weight["eleiko"].quantity
  }

  const clearButton = () => {
    setWeights(prevState => {
      const newState = {};
      Object.keys(prevState).forEach(key => {
        newState[key] = { ...prevState[key], quantity: 0 };
        
      });
      return newState;
    });
    console.log(weight)
    
    
   
  }

 const clearInput = (e) => {
  e.target.value = ""
  
 }


  return (
    <div className="App">
      <form className='form'>
      <h1 className='Name'>Gym Calculator</h1>
     
     
      <div className='Input-weight'>
      <h2>Podaj ilość talerzy na siłowni:</h2>
        <input type="number" name="eleiko" onClick={clearInput} value={weight['eleiko'].quantity.number}  placeholder='Ciężar'  onChange={changeQuantity}/>
        <input type="number" onClick={clearInput}  placeholder='sztanga'/>
        <input type="number" name='25' value={weight[25].quantity.number} placeholder='25kg' onClick={clearInput} onChange={changeQuantity}/>
        <input type="number" name="20" value={weight[20].quantity.number} placeholder='20kg'onClick={clearInput} onChange={changeQuantity}/>
        <input type="number" name='15'onClick={clearInput} value={weight[15].quantity.number} placeholder='15kg' onChange={changeQuantity}/>
        <input type="number" name="10"onClick={clearInput} value={weight[10].quantity.number} placeholder='10kg' onChange={changeQuantity}/>
        <input type="number" name='5'onClick={clearInput} value={weight[5].quantity.number} placeholder='5kg' onChange={changeQuantity}/>
        <input type="number" name='2.5'onClick={clearInput} value={weight[2.5].quantity.number} placeholder='2.5kg' onChange={changeQuantity}/>
        <input type="number" name='1.25'onClick={clearInput} value={weight[1.25].quantity.number} placeholder='1.25kg' onChange={changeQuantity}/>
      </div>
    
      
      </form>
      <button className='Button-cal' onClick={mathematic} >Oblicz</button>
      <button className='Button-clear' onClick={clearButton} >Wyczyść</button>

  
      <ul>
  {Object.entries(results).map(([key, value]) => (
    <li key={key}>{key}: {value.plates}</li>
  ))}
</ul>


     
    </div>
  );
}

export default App;
