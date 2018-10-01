/*global google*/
import React, { Component } from 'react';
import { getStateAndCity } from '../API/GeocodeApi'
import '../App.css';
class Zipcode extends Component {
    constructor() {
        super()
        this.state = {
            zipcode: '',
            state: '',
            city: '',
            lat: 38.8881493,
            lng: -77.0150773
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({
            zipcode: value
        })

    }
    handleSubmit(event) {
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
        const state = this.state
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

                    {/* <input type="text" placeholder="City" />  */}

                </form>
                <input
                    type="text"
                    placeholder="City"
                    value={state.city}
                />
                <input
                    type="text"
                    placeholder="State"
                    value={state.state}
                />
                <div ref="map" style={mapStyle}></div>
            </div>

        )

    }
}
export default Zipcode