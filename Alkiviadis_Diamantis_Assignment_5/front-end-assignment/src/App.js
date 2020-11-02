import React from 'react';
import Sale from './Components/Sale'
import Header from './Components/Header'
import ExtraBar from './Components/extraBar'
import 'bootstrap/dist/css/bootstrap.css';
import { data } from './data'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hotels: data[1].entries,

    }
    this.selectedHotels = this.selectedHotels.bind(this)
  }

  selectedHotels = (hotels) => {
    this.setState({
      hotels: hotels
    })

  }


  render() {


    return (
      <div className="container">
        <Header hotels={this.state.hotels} handleClick={this.selectedHotels} />
        <div className="backroundcolor">
          <ExtraBar hotels={this.state.hotels}  handleClick={this.selectedHotels}/>
          {this.state.hotels.map((hotel) => {
            return (
              <Sale key={hotel.thumbnail} hotel={hotel} ></Sale>
            );
          })
          }
        </div>
      </div>
    );
  }

}

export default App;
