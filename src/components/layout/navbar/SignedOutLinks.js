import React from "react";
import { Link } from "react-router-dom"

const SignedInLinks = () => {
  return (
    <React.Fragment>
    <li className="nav-item">
      <Link className="nav-link active" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link active" to="/leaflet">Map</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link active" to="/add">Add</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="atm.html">F&B ATM</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link active" to="/getdata">Get Data</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/register">Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      </React.Fragment>
  )
}

export default SignedInLinks
