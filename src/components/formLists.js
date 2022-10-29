import * as React from 'react';
import { useState, useEffect } from "react";


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
    });
  }

  setCars(fetchedCars);
 }

  useEffect(() => {
    fetchCars();
  }, [fetchCars])

  let content;
  content = cars.map((care) => (
    <div key={care.id}>
      <h2>Car Model: {care.model}</h2>
      <h3>Brake Horse Power: {care.bhp}</h3>
      <br></br>
    </div>
    ));
  return (
    <>
    <section>{content}</section>
    </>
  )
}

export default FormLists
