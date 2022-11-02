import React from 'react'
import AddCars from '../components/addCars';
import FormLists from '../components/formLists';
import { Grid } from '@material-ui/core'

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

<Grid container spacing={{ xs: 1, sm: 2, md: 3 }} >

<Grid item xs={6} md={8} style={{backgroundColor: '#EDEAE5'}}>
  <FormLists onType={typer} />
</Grid>

<Grid item xs={6} md={4} style={{backgroundColor: '#EDEAE5'}}>
  <AddCars onAddCar={addSUV} />
</Grid>

</Grid>
  )
}

export default Suv