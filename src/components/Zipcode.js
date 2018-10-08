import React, { Component } from 'react';
import { getStateAndCity } from '../API/GeocodeApi'
import '../App.css';

class Zipcode extends Component {
    constructor() {
        super()
        this.state = {
            zipcode: '',
            State: '',
            city: '',
            lat: 38.8881493,
            lng: -77.0150773
        }

    }
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            zipcode: value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        getStateAndCity(this.state.zipcode)
            .then(data => this.setState({
                state: data.state,
                city: data.city,
                lat: data.lat,
                lng: data.lng
            }))
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            center: { lat: this.state.lat, lng: this.state.lng },
            zoom: 16,
            fullscreenControl: false,
            disableDefaultUI: true
        });
    }

    render() {
        const {city, State} = this.state
        const mapStyle = {
            width: 700,
            height: 200,
            border: '1px solid black'
        };
        return (
            <div>
                <h2>Enter Zip Code to find respective State and City</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={state.zipcode}
                        placeholder="Zip"
                        onChange={this.handleChange}
                    />
                </form>
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                />
                <input
                    type="text"
                    placeholder="State"
                    value={State}
                />
                <div ref="map" style={mapStyle}></div>
            </div>

        )

    }
}
export default Zipcode