import React from 'react'
import AddCars from '../components/addCars';
import FormLists from '../components/formLists';
import { Grid } from '@material-ui/core'


import '../components/modal.css'

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
    <div className='mob'>
      <h1>SEDAN CARS.</h1>
      <h2>These are Four door saloom that are normally used by families and business men. .</h2>
      <h2>they are mostly affordable luxury cars for city usages</h2>
      <h3>Cars in this category include BMW M5, M4, Mercedes C-class saloons and so forth.</h3><br></br><br></br>
     </div>

    <Grid container spacing={2} >

    <Grid item xs={6} md={7} >
    <h2 className='List'>OUR SEDAN.</h2>
      <FormLists onType={typer} />
    </Grid>

    <Grid item xs={6} md={5} style={{ backgroundColor: '#A07F63'}} >
    <h2 className='List'>ADD SEDAN.</h2>
      <AddCars onAddCar={addSedan} />
    </Grid>

    </Grid>
  </>

  )
}

export default Sedan