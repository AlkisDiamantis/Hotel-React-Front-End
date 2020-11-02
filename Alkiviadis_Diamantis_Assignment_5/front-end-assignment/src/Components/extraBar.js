import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

export default class ExtraBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            filtersArray: [],
            hotels: this.props.hotels,
            filteredHotels: null,
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    };
    handleShow = () => {
        this.setState({
            show: true,
        })
    };
    morefilters = async (event) => {
        if (event.target.value === "all") {
            this.props.handleClick(this.state.hotels)

            // const result = initialState.filter((o) =>
            //     o.tags.some((tag) => filterByTagSet.has(tag))
            // );
        } else {

            let filterHotels = this.state.hotels.filter((hotel, i) => {

                return hotel.filters.some(filter => {
                  
                    return filter.name === event.target.value
                    
                })


            })
            await this.setState({
                filteredHotels: filterHotels
            })
            this.props.handleClick(this.state.filteredHotels)
        }
    }
    componentDidMount() {
        let filtersArray = []
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
    render() {
        return (

            <>
                <div className="extrabar">
                    <div className="maplink">
                        <Button className="mapButton" variant="primary"
                            onClick={this.handleShow}>
                            <div className="inside">View Map</div>
                        </Button>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Google Map</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><iframe title="whatever" className="iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.94722687619!2d2.277019841665155!3d48.8588377391234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1554987763683!5m2!1sen!2sgr" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
          </Button>
                                <Button variant="primary" onClick={this.handleClose}>
                                    Save Changes
          </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="sortby">
                        <strong>sort by</strong>
                        <select onChange={this.morefilters}>
                            <option value="all">All</option>
                            {this.state.filtersArray.map((filter) => {
                                return (
                                    <option key={filter} value={filter}>{filter}</option>
                                )
                            })}
                        </select>
                        <i className="fa fa-info-circle"></i>
                    </div>

                </div>
            </>
        )
    }
}
