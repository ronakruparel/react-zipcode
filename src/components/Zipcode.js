import React, { Component } from 'react';
import { getStateAndCity } from '../API/GeocodeApi'
import '../App.css';
class Zipcode extends Component {
    constructor() {
        super()
        this.state = {
            zipcode: '',
            state: '',
            city: ''
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
                city: data.city
            }))
    }
    render() {
        const state = this.state
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
            </div>
        )
    }



}
export default Zipcode

