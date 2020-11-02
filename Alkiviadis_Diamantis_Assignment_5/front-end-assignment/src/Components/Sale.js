import React from 'react';
import DisplayStars from './DisplayStars';

export default class Sale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: this.props.hotel
        }
    }



    render() {

        return (
            <div className="Sale" onClick={this.choosehotel}>
                <div className="image">

                    <img src={this.state.hotel.thumbnail}  alt="#"/>
                    <div className="bottom-left">1/30</div>
                    <div className="top-left"><i className="fas fa-heart"></i></div>

                </div>
                <div className="firstDetails">
                    <h3>{this.state.hotel.hotelName}</h3>
                    <DisplayStars stars={this.state.hotel.rating}/>
                    <br></br>
                    <p>{this.state.hotel.city}</p>
                    <p><span className="ratingbox">{this.state.hotel.ratings.no}</span><strong>{this.state.hotel.ratings.text}</strong> (17777 reviews)</p>
                    <p>Excellent Location etc.</p>
                </div>
                <div className="secondDetails">
                    <p>Hotel website<br /><strong>${this.state.hotel.price}</strong> </p>
                    <p>Agoda<br /> <strong>$575</strong></p>
                    <p>Travelocity<br /><strong>$708</strong></p>
                    <p className="moredetails"><strong>More Details from<br /> $706</strong></p>
                </div>
                <div className="dealDetails">
                    <p>
                        <span className="green">Hotel Website
                    <br></br>
                            <strong style={{ fontSize: "24px" }}>${this.state.hotel.price}</strong></span>
                        <br></br>
        3 nights for <span className="green">${this.state.hotel.price*3}</span>
                    </p>


                    <button >View Deal <span className="arrow"> &#xf105;</span></button>
                </div>
            </div>
        )
    }
}