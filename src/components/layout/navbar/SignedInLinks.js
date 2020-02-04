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
        <button className="btn btn-danger" onClick={this.handleSignOut}>Sign Out</button>
      </li>
      </React.Fragment>
  )
}

export default SignedInLinks
