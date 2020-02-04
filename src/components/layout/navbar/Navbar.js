import React from "react";
import { Link } from "react-router-dom"
import { withFirebaseHOC } from '../../../firebase'
import headerImg from "../../../assets/pic1.png"

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logggedIn: false
    }
  }

  handleSignOut = () => {
    this.props.firebase.signOut().then(() => {
      // console.log("User has logged out");
    }).catch(err => console.log(err))
  }

  render() {
    this.props.firebase.checkUserAuth(user => {
      // console.log(user);
      if(user) {
        console.log("User has logged in: ", user);
        this.setState({
          logggedIn: true
        })
      } else {
        console.log("User has logged out");
        this.setState({
          logggedIn: false
        })
      }
    })

      return (
          <div className="header">
              <img id="header-img" src={headerImg}/>
              <ul className="nav justify-content-center">
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
                {this.state.logggedIn ? (<li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>) : null}

                <li className="nav-item">
                  <button className="btn btn-danger" onClick={this.handleSignOut}>Sign Out</button>
                </li>


              </ul>
          </div>

      )
  }
}

export default withFirebaseHOC(Navbar)
