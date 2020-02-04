import React from "react";
import { withFirebaseHOC } from '../firebase'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        city: "",
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange(e) {
      const { name, value } = e.target
      this.setState({
          [name]: value
      });
  }

  handleSubmit(e) {
      e.preventDefault()
      this.setState({
        name: "",
        city: ""
      })
      console.log(this.props);
      // const db = this.props.firebase.db()
      // db.collection('cities').add({
      //   name: this.state.name,
      //   city: this.state.city
      // })
      this.props.firebase.addCity({
        name: this.state.name,
        city: this.state.city
      })
        .catch(err => console.log(err))
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="add-value">
          <h2>Create a new post!</h2>
          <form onSubmit={this.handleSubmit}>
              {/*<div className="input-field">
                  <select value={this.state.username} name="username" onChange={this.onChange} >
                    <option value="" disabled >Choose the username</option>
                    <option value="mist" >Vin</option>
                    <option value="mist" >Kelsier</option>
                    <option value="mist" >Dockson</option>
                    <option value="mist" >Breeze</option>
                    <option value="mist" >Ham</option>
                  </select>
              </div>*/}
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input type="text" id="post-title" name="name" onChange={this.onChange} value={this.state.name} autoComplete="off" placeholder="Name" />
                </div>
              </div>
              <div className="field">
                <label className="label">City</label>
                <div className="control">
                  <input type="text" id="post-text" name="city" onChange={this.onChange} value={this.state.city} autoComplete="off" placeholder="City"/>
                </div>
              </div>
              <button className="btn blue darken-2" type="submit" name="action">Submit
              </button>
          </form>
      </div>
    )
  }
}

export default withFirebaseHOC(About)
