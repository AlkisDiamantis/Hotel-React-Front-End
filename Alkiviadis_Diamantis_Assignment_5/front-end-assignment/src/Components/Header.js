import React from 'react';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: this.props.hotels,
            filteredHotels: null,
            pricearray: [],
            filtersArray: [],
            currentRangeValue: 0


        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        let priceArray = [0]
        let filtersArray = []
        this.state.hotels.map((hotel) => {
            return priceArray.push(hotel.price)
        })
        let priceSet = new Set(priceArray);

        let newPriceArray = [...priceSet];
        this.setState({
            pricearray: newPriceArray
        })
        this.state.hotels.map((hotel) => {
            hotel.filters.map((filter) => {
                return filtersArray.push(filter.name)
            })
        })
        let filterSet = new Set(filtersArray)

        let newFilterArray = [...filterSet];
        this.setState({
            filtersArray: newFilterArray
        })


    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const city = form.elements.city.value.toLowerCase();

        const filteredHotels = this.state.hotels.filter((hotel) => {

            return hotel.city.toLowerCase().indexOf(city) > -1

        })
        await this.setState({
            filteredHotels: filteredHotels
        })
        this.props.handleClick(this.state.filteredHotels)

    }

    handleChange = async (event) => {
        await this.setState({ currentRangeValue: event.target.value });
        // console.log(this.state.value)
        if (this.state.pricearray[this.state.currentRangeValue] === 0) {

            this.props.handleClick(this.state.hotels)

        } else {
            const filteredHotels = this.state.hotels.filter((hotel) => {

                return hotel.price <= this.state.pricearray[this.state.currentRangeValue]

            })
            await this.setState({
                filteredHotels: filteredHotels
            })
            this.props.handleClick(this.state.filteredHotels)
        }
        console.log(this.state.pricearray[this.state.currentRangeValue])

    }

    starsChoice = async (event) => {
        // console.log(event.target.value)
        if (event.target.value === "All") {
            this.props.handleClick(this.state.hotels)

        } else {
            const filteredHotels = this.state.hotels.filter((hotel) => {

                return hotel.rating == event.target.value

            })
            await this.setState({
                filteredHotels: filteredHotels
            })
            this.props.handleClick(this.state.filteredHotels)

        }
    }
    guestChoice = async (event) => {
        if (event.target.value === "All") {
            this.props.handleClick(this.state.hotels)

        } else if (event.target.value === "Ok") {

            const filteredHotels = this.state.hotels.filter((hotel) => {

                return hotel.ratings.no <= 2
                // 
            })
            await this.setState({
                filteredHotels: filteredHotels
            })
            this.props.handleClick(this.state.filteredHotels)

        } else if (event.target.value === "Fair") {

            const filteredHotels = this.state.hotels.filter((hotel) => {

                return hotel.ratings.no > 2
                // 
            })
            const morefilteredhotels = filteredHotels.filter((hotel) => {
                return hotel.ratings.no <= 6
            })
            await this.setState({
                filteredHotels: morefilteredhotels
            })
            this.props.handleClick(this.state.filteredHotels)

        } else if (event.target.value === "Good") {

            const filteredHotels = this.state.hotels.filter((hotel) => {

                return hotel.ratings.no > 6
                // 
            })
            const morefilteredhotels = filteredHotels.filter((hotel) => {
                return hotel.ratings.no <= 7
            })
            await this.setState({
                filteredHotels: morefilteredhotels
            })
            this.props.handleClick(this.state.filteredHotels)

        }
        else if (event.target.value === "Very Good") {

            const filteredHotels = this.state.hotels.filter((hotel) => {

                return hotel.ratings.no > 7
                // 
            })
            const morefilteredhotels = filteredHotels.filter((hotel) => {
                return hotel.ratings.no <= 8.5
            })
            await this.setState({
                filteredHotels: morefilteredhotels
            })
            this.props.handleClick(this.state.filteredHotels)

        }
        else if (event.target.value === "Excellent") {

            const filteredHotels = this.state.hotels.filter((hotel) => {

                return hotel.ratings.no > 8.5
                // 
            })
            const morefilteredhotels = filteredHotels.filter((hotel) => {
                return hotel.ratings.no <= 10
            })
            await this.setState({
                filteredHotels: morefilteredhotels
            })
            this.props.handleClick(this.state.filteredHotels)

        }
    }
    cityFilter = async (event) => {

        if (event.target.value === "all") {
            this.props.handleClick(this.state.hotels)

        } else {

            let filterHotels = this.state.hotels.filter((hotel) => {
                return hotel.city === event.target.value
            })
            await this.setState({
                filteredHotels: filterHotels
            })
            this.props.handleClick(this.state.filteredHotels)
        }
    }



    render() {
        const { pricearray, currentRangeValue } = this.state;

        let cityarray = []
        this.state.hotels.map((hotel) => {
            return cityarray.push(hotel.city)
        })
        let citySet = new Set(cityarray);
        let newCityArray = [...citySet];



        return (
            <div className="container1">

                <form onSubmit={this.handleSubmit} className="searchBar">
                    <datalist id="cities">
                        {newCityArray.map((city) => {
                            return (
                                <option key={city} value={city} />
                            );
                        })}
                    </datalist>
                    <input name="city" list="cities"></input>

                    <button><strong>Search</strong></button>
                </form>




                <div className="check-in-out">
                    <input type="date" className="checkin" placeholder="Check in" />

                    <input type="date" className="checkout" placeholder="Check out" />
                    <select>
                        <option> &#xf0c0; Family Room</option>
                        <option> &#xf007; Single</option>
                        <option> &#xf007;&#xf007; Double</option>

                    </select>
                </div>

                <div className="chooseMenu">
                    <div className="priceSlideBar">
                        <div className="maxPrice">
                            <p style={{ fontWeight: "bold" }}>Price</p>
                            <p> max $ : ${pricearray[currentRangeValue]}</p>
                        </div>

                        <input
                            onChange={this.handleChange}
                            type="range"
                            defaultValue={0}

                            max={this.state.pricearray.length - 1}
                        />



                    </div>
                    <div className="typeRating">
                        <div className="proptype">
                            <p>Property type</p>
                            <select onChange={this.starsChoice}>
                                <option>All</option>
                                <option value="1">&#xf005;</option>
                                <option value="2">&#xf005; &#xf005;</option>
                                <option value="3">&#xf005; &#xf005; &#xf005;</option>
                                <option value="4">&#xf005; &#xf005; &#xf005; &#xf005;</option>
                                <option value="5">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005;</option>
                            </select>
                        </div>
                        <div className="rating">
                            <p>Guest Rating</p>
                            <select onChange={this.guestChoice}>
                                <option value="All">All</option>
                                <option value="Ok">Ok</option>
                                <option value="Fair">Fair</option>
                                <option value="Good">Good</option>
                                <option value="Very Good">Very Good</option>
                                <option value="Excellent">Excellent</option>
                            </select>
                        </div>

                    </div>
                    <div className="hotelLocation">
                        <div className="hoteldropdown">
                            <p>Hotel location</p>
                            <select onChange={this.cityFilter}>
                                <option value="all">All</option>
                                {newCityArray.map((city) => {
                                    return (
                                        <option key={city} value={city}>{city}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="morefilters">
                            <p>More filters</p>
                            <select >
                                <option value="all">All</option>
                       
                            </select>
                        </div>


                    </div>

                </div>
            </div>
        );
    }
}