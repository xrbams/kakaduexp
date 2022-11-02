import React from 'react'
import { Link } from 'react-router-dom'
import "./navigationbar.css"
import ModalDrop from './modalDrop'

const Navigationbar = () => {
  return (
    <>

    <header className="Header">
    <h2>KAKADU</h2>
     <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/offroad">OffRoad</Link>
        </li>
        <li>
          <Link to="/sedan">Sedan</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/suv">SUV</Link>
        </li>
        <li>
          <ModalDrop />
        </li>
      </ul>
     </nav>
     </header>

    </>
  )
}

export default Navigationbar