import React from 'react'
import { Link } from 'react-router-dom'
import "./navigationbar.css"

const Navigationbar = () => {
  return (
    <>
    <header className="Header">
    <h2>Cars</h2>
     <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/offroad">offroad</Link>
        </li>
        <li>
          <Link to="/sedan">sedan</Link>
        </li>
        <li>
          <Link to="/sports">sports</Link>
        </li>
        <li>
          <Link to="/suv">suv</Link>
        </li>
      </ul>
     </nav>
     </header>

    </>
  )
}

export default Navigationbar