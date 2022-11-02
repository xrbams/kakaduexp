import React from 'react'
import AddCars from '../components/addCars';
import FormLists from '../components/formLists';
import { Grid } from '@material-ui/core'


import '../components/modal.css'

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

  <div className='mob'>
    <h1>SUV CARS.</h1>
    <h2>Stands for Sport Utility Vehicles.</h2>
    <h2>These cars are a combination of offoraders and sports sedans. </h2>
    <h2> Modern popularized vehicles and highly valuable in todays economy. </h2>
    <h3>Cars in this category include Porsche Cayenne, Macan, Volkswagen Tuareg and ETC...</h3><br></br><br></br>
   </div>


  <Grid container spacing={2} >

    <Grid item xs={6} md={7} >
    <h2 className='List'>OUR SUVs.</h2>
      <FormLists onType={typer} />
    </Grid>

    <Grid item xs={6} md={5} style={{ backgroundColor: '#A07F63'}}>
    <h2 className='List'>ADD SUVs.</h2>
      <AddCars onAddCar={addSUV} />
    </Grid>

  </Grid>
  </>

  )
}

export default Suv