import React from 'react'
import AddCars from '../components/addCars';
import FormLists from '../components/formLists';

const Sedan = () => {
  const addSedan = async (sedan) => {
    console.log(sedan);
    const response = await fetch(
      "https://kakadu-expedition-cars-default-rtdb.firebaseio.com/sedan.json",
      {
        method: "POST",
        body: JSON.stringify(sedan),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const typer = "sedan";


  return (
    <>
    <section>
        <AddCars onAddCar={addSedan} />
      </section>
      <FormLists onType={typer} />

    </>
  )
}

export default Sedan