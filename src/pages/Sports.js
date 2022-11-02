import React from 'react'
import AddCars from '../components/addCars';
import FormLists from '../components/formLists';
import { Grid } from '@material-ui/core'


import '../components/modal.css'

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
    <div className='mob'>
    <h1>SPORTS CARS.</h1>
    <h2>These are cars that have alot of power and speed for recreational purposes.</h2>
    <h2>These cars are made from their sports counter parts and are commercialized</h2>

    <h3>Cars in this category include BMW M5, M4, Mercedes E-class, Bugattis', Pagani, ETC...</h3><br></br><br></br>
   </div>


<Grid container spacing={2} >

<Grid item xs={6} md={7} >
<h2 className='List'>OUR SPORTSCARS.</h2>
  <FormLists onType={typer} />
</Grid>

<Grid item xs={6} md={5} style={{ backgroundColor: '#A07F63'}} >
<h2 className='List'>ADD SPORTSCARS.</h2>
  <AddCars onAddCar={addSportscar} />
</Grid>

</Grid>

</>
  )
}

export default Sports