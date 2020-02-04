import React from "react";
import { withFirebaseHOC } from '../firebase'
import  { Redirect } from 'react-router-dom'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "",
      logggedIn: true
    }
  }

  componentDidMount() {

    // this.props.firebase.checkUserAuth(user => {
    //   // console.log(user);
    //   if(user) {
    //     console.log("User has logged in: ", user);
    //     this.setState({
    //       logggedIn: true
    //     })
    //   } else {
    //     console.log("User has logged out");
    //     this.setState({
    //       logggedIn: false
    //     })
    //   }
    // })
  }




  handleSubmit = (e) => {
      e.preventDefault()

      this.props.firebase.loginWithEmail(this.state.email, this.state.password)
        .then(cred => {
          // console.log(cred);
        })
        .catch(err => console.log(err))

      this.setState({
        email: "",
        password: ""
      })

  }

  onChange = (e) => {
      const { name, value } = e.target
      this.setState({
          [name]: value
      });
  }


  render() {


      return (
        <div>
          <h1>Login!</h1>
          <form onSubmit={this.handleSubmit}>
          <div className="input-field">
              <select value={this.state.username} name="type" onChange={this.onChange} required>
                <option value="">Choose the type</option>
                <option value="vol" >Volunteer</option>
                <option value="rest" >Restaurants</option>
                <option value="shel" >Shelter</option>
                <option value="don" >Donors</option>
              </select>
          </div>
              <div className="input-field">
                <input type="text" id="email" name="email" onChange={this.onChange} value={this.state.email} autoComplete="off" placeholder="Email" required />
              </div>
              <div className="input-field">
                <input type="password" id="password" name="password" onChange={this.onChange} value={this.state.password} autoComplete="off" placeholder="Password" required />
              </div>
              <button className="btn btn-primary" type="submit" name="action">Log In</button>
          </form>
        </div>
      )


  }
}

export default withFirebaseHOC(Login)
