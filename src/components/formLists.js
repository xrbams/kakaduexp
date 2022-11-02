import * as React from 'react';
import { useState, useEffect } from "react";
import "./modal.css"


const FormLists = ({ onType }) => {
const [cars, setCars] = useState([]);


 const fetchCars = async () => {

    const response = await fetch(
      "https://kakadu-expedition-cars-default-rtdb.firebaseio.com/"+ onType +".json"
      );

    const data = await response.json();

    const fetchedCars = [];

    for (const key in data) {
      fetchedCars.push({
        id: key,
        model: data[key].model,
        bhp: data[key].bhp,
        fuelEconomy: data[key].fuelEconomy,
        fuelType: data[key].fuelType,
        transmission: data[key].transmission,
      });
    }

    setCars(fetchedCars);
  }


  useEffect(() => {
    fetchCars();
  }, [fetchCars])

  let content;
  if(Object.keys(cars).length === 0){
    content = <h1> You have no Cars to show yet! </h1>;
    console.log("You have no Cars to show yet!");
    }else {
    content = cars.map((care) => (
      <>
      <div key={care.id} className="carr">
      <h2>Car Model: {care.model}</h2>
      <h3>Brake Horse Power: {care.bhp} bhp</h3>
      <h3>Fuel Economy: {care.fuelEconomy} KM/L</h3>
      <h3>Fuel Type: {care.fuelType}</h3>
      <h3>Transmission Type: {care.transmission}</h3>
      <br></br>
      </div>
      </>
    ));
  }

  return (
    <>
    <section>{content}</section>
    </>
  )
}

export default FormLists
