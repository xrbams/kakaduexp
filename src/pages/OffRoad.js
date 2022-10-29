import React from 'react'
import AddCars from '../components/addCars';
import FormLists from '../components/formLists';

const OffRoad = () => {
  const addOffroaders = async (offRoader) => {
    console.log(offRoader);
    const response = await fetch(
      "https://kakadu-expedition-cars-default-rtdb.firebaseio.com/off-road.json",

      {
        method: "POST",
        body: JSON.stringify(offRoader),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  const typer = "off-road";

  return (
    <>
    <section>
        <AddCars onAddCar={addOffroaders} />
      </section>
      <FormLists onType={typer} />
    </>
  )
}

export default OffRoad