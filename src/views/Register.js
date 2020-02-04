import React from "react";
import { withFirebaseHOC } from '../firebase'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

var myIcon = L.icon({
  iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
})

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        latlng: {
          lat: 19.076,
          lng: 72.877,
        },
        zoom: 13,
        type: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        hasLocation: false
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
      console.log(this.state.name, this.state.latlng);

      if(this.state.type === "rest") {
        this.props.firebase.addRestaurant({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.latlng
          }).catch(err => console.log(err))
      }

      if(this.state.type === "shel") {
        this.props.firebase.addShelter({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.latlng
          }).catch(err => console.log(err))
      }





      // this.props.firebase.signupWithEmail(this.state.email, this.state.password)
      //   .then(cred => {
      //     console.log(cred.user.uuid);
      //     if(this.state.type === "rest") {
      //       this.props.firebase.addRestaurant({
      //         name: this.state.name,
      //         email: this.state.email,
      //         phone: this.state.phone,
      //         uuid: cred.user.uuid,
      //       }).catch(err => console.log(err))
      //     }
      //
      //   })
      //   .catch(err => console.log(err))



      // this.props.firebase.addCity({
      //   name: this.state.name,
      //   city: this.state.city
      // })
      //   .catch(err => console.log(err))
  }

  handleClick = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  componentDidMount() {

  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng} icon={myIcon}>
        <Popup>
          <h2>You are here</h2>
        </Popup>
      </Marker>
    ) : null
    return (
      <div className="add-value">
          <h2>Register!</h2>
          <form onSubmit={this.handleSubmit} id="reg-form">
              <div className="form-group">
                  <select value={this.state.username} className="form-control" name="type" onChange={this.onChange} required>
                    <option value="">Choose the username</option>
                    <option value="vol" >Volunteer</option>
                    <option value="rest" >Restaurants</option>
                    <option value="shel" >Shelter</option>
                    <option value="don" >Donors</option>
                  </select>
              </div>
              <div className="form-group">
                <input type="text" id="name" name="name" className="form-control" onChange={this.onChange} value={this.state.name} autoComplete="off" placeholder="Restaurant Name" required />
              </div>
              <div className="form-group">
                <input type="text" id="email" name="email" className="form-control" onChange={this.onChange} value={this.state.email} autoComplete="off" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="password" id="password" name="password" className="form-control" onChange={this.onChange} value={this.state.password} autoComplete="off" placeholder="Password" required />
              </div>
              <div className="form-group">
                <input type="text" id="phone" name="phone" className="form-control" onChange={this.onChange} value={this.state.phone} autoComplete="off" placeholder="Phone Number" required />
              </div>
              <Map id="reg-map" style={{height: "600px", width: "600px"}} length={4} center={this.state.latlng} onClick={this.handleClick} zoom={this.state.zoom} ref={this.mapRef}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {marker}
              </Map>
              <button className="btn btn-primary" type="submit" name="action">Submit</button>
          </form>
      </div>
    )
  }
}

export default withFirebaseHOC(About)
