import React, {useState} from 'react'
import Modal from 'react-modal/lib/components/Modal'
import "./modal.css"

Modal.setAppElement('#root')
const ModalDrop = () => {
  const [Moda, setModa] = useState(false);

  return (
    <div className='mod'>
    <button onClick={() => setModa(true)}>ABOUT</button>
    <Modal isOpen={Moda} style={customStyles} onRequestClose={() => setModa(false)}>
      <h2> ABOUT</h2>
      <h3>This Website gives user capability of adding their favorite car to our plentiful car community.</h3>
      <h3>Please fill in the form in the resepctive car type tab and see it pop up in our continued lists.</h3>
      <h3>This was constructed and developed by Mr Baraka Msakamali.</h3>


      <h2>ISSUES</h2>
      <h3>Notice: the checkboxes are abit troublesome when it comes to reseting after submission </h3>
      <h3>So please uncheck and recheck an option during resubmission of an object.</h3>
    </Modal>
    </div>
  )
}

export default ModalDrop

const customStyles = {
  content: {
    top: '20%',
    left: '30%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};