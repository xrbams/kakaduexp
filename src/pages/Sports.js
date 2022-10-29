import React from 'react'
import AddCars from '../components/addCars';
import FormLists from '../components/formLists';

const Sports = () => {
  const addSportscar = async (sportscar) => {
    console.log(sportscar);
    const response = await fetch(
      "https://kakadu-expedition-cars-default-rtdb.firebaseio.com/sportscars.json",
      {
        method: "POST",
        body: JSON.stringify(sportscar),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  const typer = "sportscars";



  return (
    <>
    <section>
        <AddCars onAddCar={addSportscar} />
      </section>
      <FormLists onType={typer}/>

    </>
  )
}

export default Sports