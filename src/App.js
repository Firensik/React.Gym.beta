import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

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
if(weight['eleiko'].quantity === ""){
  alert("Musisz podac ciężar")
 }else{
 while(weight["eleiko"].quantity >= weight[25].plate50 && weight[25].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[25].plate50
  weight[25].quantity = weight[25].quantity - 2
  console.log(weight["eleiko"])
  console.log("25 = " +  weight[25].quantity)
 }
 while(weight["eleiko"].quantity >= weight[20].plate40 && weight[20].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[20].plate40
  weight[20].quantity = weight[20].quantity - 2
  console.log(weight["eleiko"])
  console.log("20 = " + weight[20].quantity)
 }
 while(weight["eleiko"].quantity >= weight[15].plate30 && weight[15].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[15].plate30
  weight[15].quantity = weight[15].quantity - 2
  console.log(weight["eleiko"])
  console.log("15 = " + weight[15].quantity)
 }
 while(weight["eleiko"].quantity >= weight[10].plate20 && weight[10].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[10].plate20
  weight[10].quantity = weight[10].quantity - 2
  console.log(weight["eleiko"])
  console.log("10 = " + weight[10].quantity)
 }
 while(weight["eleiko"].quantity >= weight[5].plate10 && weight[5].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[5].plate10
  weight[5].quantity = weight[5].quantity - 2
  console.log(weight["eleiko"])
  console.log("5 = " + weight[5].quantity)
 }
 while(weight["eleiko"].quantity >= weight[2.5].plate25 && weight[2.5].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[2.5].plate25
  weight[2.5].quantity = weight[2.5].quantity - 2
  console.log(weight["eleiko"])
  console.log("2.5 = " + weight[2.5].quantity)
 }
 while(weight["eleiko"].quantity >= weight[1.25].plate125 && weight[1.25].quantity >= 2){
  weight["eleiko"].quantity = weight["eleiko"].quantity -  weight[1.25].plate125
  weight[1.25].quantity = weight[1.25].quantity - 2
  console.log(weight["eleiko"])
  console.log("1.25 = " + weight[1.25].quantity)
 }
 }
 
  }




  //   const {name , value} = e.target;
  //   const Matma = {...weight}
  // Object.keys(Matma).forEach((key) => {
  //   if (key !== "eleiko") {
  //     Matma[key].quantity = parseInt(value) - weight.eleiko.quantity;
  //     console.log(weightKeys[key])
  //   }
    //
  // });




    // const {name,value} = e.target;
    // const newWeight = weight
    // Object.keys(newWeight).forEach((key) => {
    //   if(key !== 'eleiko'){
    //     newWeight[key].quantity = parseInt(value) - weight.eleiko.quantity
    //   }
    // })
    // setWeights(newWeight)
  

  // logika programu

  
  return (
    <div className="App">
      <h1>Kalkulator ciężaru dla Andrzeja</h1>
     
      <div>
        <input type="number" name="eleiko" value={weight['eleiko'].quantity.number}  placeholder='Ciężar'  onChange={changeQuantity}/>
        <input type="number"  placeholder='sztanga'/>
        <input type="number" name='25' value={weight[25].quantity.number} placeholder='25kg' onChange={changeQuantity}/>
        <input type="number" name="20" value={weight[20].quantity.number} placeholder='20kg' onChange={changeQuantity}/>
        <input type="number" name='15' value={weight[15].quantity.number} placeholder='15kg' onChange={changeQuantity}/>
        <input type="number" name="10" value={weight[10].quantity.number} placeholder='10kg' onChange={changeQuantity}/>
        <input type="number" name='5' value={weight[5].quantity.number} placeholder='5kg' onChange={changeQuantity}/>
        <input type="number" name='2.5' value={weight[2.5].quantity.number} placeholder='2.5kg' onChange={changeQuantity}/>
        <input type="number" name='1.25' value={weight[1.25].quantity.number} placeholder='1.25kg' onChange={changeQuantity}/>
      </div>
      <button onClick={mathematic}>Oblicz</button>
     
    </div>
  );
}

export default App;
