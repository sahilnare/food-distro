import React from "react";
import { withFirebaseHOC } from '../firebase'

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const db = this.props.firebase.db()
    db.collection('cities').get()
      .then((snap) => {
        snap.docs.forEach((doc, i) => {
          this.setState(state => ({
            data: [...state.data, {id: doc.id, city: doc.data().city, name: doc.data().name}]
          }))
        });
      })
      .catch(err => console.log(err))
    console.log(this.state.data);
  }



  render() {
    let cities = []
    this.state.data.forEach((item, i) => {
      cities.push((
        <div key={item.id}>{item.name} : {item.city}</div>
      ))
    })
    return (
      <div>
        <h1>Home</h1>
        <h2>Registered users:</h2>
        {cities}
      </div>
    )
  }
}

export default withFirebaseHOC(GetData)
