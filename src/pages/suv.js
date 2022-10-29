import React from 'react'
import AddCars from '../components/addCars';
import FormLists from '../components/formLists';

const Suv = () => {
  const addSUV = async (suv) => {
    console.log(suv);
    const response = await fetch(
      "https://kakadu-expedition-cars-default-rtdb.firebaseio.com/suv.json",
      {
        method: "POST",
        body: JSON.stringify(suv),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const typer = "suv";

  return (
    <>
    <section>
        <AddCars onAddCar={addSUV} />
      </section>
      <FormLists onType={typer}/>
    </>
  )
}

export default Suv