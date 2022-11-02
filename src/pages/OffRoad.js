import React from 'react'
import AddCars from '../components/addCars';
import FormLists from '../components/formLists';
import { Grid } from '@material-ui/core'

import '../components/modal.css'

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

     <div className='mob'>
      <h1>OFF ROAD CARS.</h1>
      <h2>These are cars that are used to explore the harsher environment of mothernature.</h2>
      <h2>like the one in the background.</h2>

      <h3>Cars in this category include Range rovers, Land Cruisers and other massive trucks..</h3><br></br><br></br>
     </div>



    <Grid container spacing={2} >

      <Grid item xs={6} md={7}>
      <h2 className='List'>OUR OFFROADERS.</h2>
        <FormLists onType={typer} />
      </Grid>

      <Grid item xs={6} md={5} style={{ backgroundColor: '#A07F63'}} >
      <h2 className='List'>ADD OFFROADERS.</h2>
        <AddCars onAddCar={addOffroaders} />
      </Grid>

    </Grid>
    </>
  )
}

export default OffRoad

