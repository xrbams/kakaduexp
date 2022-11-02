import { useRef, useState } from 'react'
import "./modal.css"

const AddCars = (props) => {
  const modelRef = useRef("");
  const bhpRef = useRef("");
  const fuelEconomyRef = useRef("");
  const fuelTypeRef = useRef("");
  const transmissionRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const car = {
      model: modelRef.current.value,
      bhp: bhpRef.current.value,
      fuelEconomy: fuelEconomyRef.current.value,
      fuelType: fuelTypeRef.current.value,
      transmission: transmissionRef.current.value,

    };

    props.onAddCar(car);

    modelRef.current.value = "";
    bhpRef.current.value = "";
    fuelEconomyRef.current.value = "";
    fuelTypeRef.current.value = "";
    transmissionRef.current.value = "";
  };


  const [manual, setmanual] = useState(!false);
  const [auto, setAuto] = useState(!false);
  const [cvt, setCvt] = useState(!false);
  const [pet, setPet] = useState(!false);
  const [die, setDie] = useState(!false);


  const handleChange =(data) => {

    if(data === "Manual Transmission"){
      if(manual === true){
        transmissionRef.current.value = data;
      }
    }
    if(data === "Automatic Transmission"){
      if(auto === true){
        transmissionRef.current.value = data;
      }
    }
    if(data === "CVT Transmission"){
      if(cvt === true){
        transmissionRef.current.value = data;
      }
    }
    if(data === "Petrol"){
      if(pet === true){
        fuelTypeRef.current.value = data;
      }
    }
    if(data === "Diesel"){
      if(die === true){
        fuelTypeRef.current.value = data;
      }
    }

  }



  return (
    <form onSubmit={submitHandler} className='car'>
      <div>
        <label className='lab' htmlFor="text">Car Model: </label>
        <input type="text" ref={modelRef} />
      </div>
      <div>
        <label className='lab' htmlFor="text">Horse Power: </label>
        <input type="number" ref={bhpRef} />
      </div>
      <div>
        <label className='lab' htmlFor="text">Fuel Economy in KM/L: </label>
        <input type="number" ref={fuelEconomyRef} />
      </div>
      <div>
        <label className='lab' htmlFor="text">Transmission: </label><br></br>
        <label className='lab'><input type="checkbox"  value={manual} onChange={() => handleChange("Manual Transmission")} ref={transmissionRef}/>Manual</label><br></br>
        <label className='lab'><input type="checkbox"  value={auto} onChange={() => handleChange("Automatic Transmission")} ref={transmissionRef}/>Automatic</label><br></br>
        <label className='lab'><input type="checkbox"  value={cvt} onChange={() => handleChange("CVT Transmission")} ref={transmissionRef}/>CVT</label><br></br>
      </div>
      <div>
        <label className='lab' htmlFor="text">Engine Fuel Type: </label><br></br>
        <label className='lab'><input type="checkbox"  value={pet} onChange={() => handleChange("Petrol")} ref={fuelTypeRef}/>Petrol</label><br></br>
        <label className='lab'><input type="checkbox"  value={die} onChange={() => handleChange("Diesel")} ref={fuelTypeRef}/>Diesel</label><br></br>
      </div>

      <br></br>
      <button>Add Car</button>
    </form>
  )
}

export default AddCars