import { useRef } from 'react'

const AddCars = (props) => {
  const modelRef = useRef("");
  const bhpRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const car = {
      model: modelRef.current.value,
      bhp: bhpRef.current.value,
    };

    props.onAddCar(car);

    modelRef.current.value = "";
    bhpRef.current.value = "";
  };




  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">Car Model</label>
        <textarea rows="1" id="text" ref={modelRef} />
      </div>
      <div>
        <label htmlFor="text">Horse Power</label>
        <textarea rows="1" id="text" ref={bhpRef} />
      </div>

      <button>Add Car</button>
    </form>
  )
}

export default AddCars