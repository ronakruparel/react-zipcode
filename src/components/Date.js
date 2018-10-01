import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
const response =
{
    "marriageServiceOrderCode": "MON",
    "marriageServiceOrderNumber": "000513604221",
    "marriageAppointmentDate": "2018-04-08",
    "marriageAppointmentStartTime": "07:00:00",
    "marriageAppointmentEndTime": "20:00:00",
    "appointments": [
        {
            "appointmentDate": "2018-04-24",
            "appointmentBusinessDayIndicator": "X",
            "appointmentUnavailable": "X",
            "appointmentServiceOrderCode": "FRC"
        },
        {
            "appointmentDate": "2018-04-25",
            "appointmentBusinessDayIndicator": "X",
            "appointmentUnavailable": "X",
            "appointmentServiceOrderCode": "FRC"
        },
        {
            "appointmentDate": "2018-04-26",
            "appointmentBusinessDayIndicator": "X",
            "appointmentUnavailable": "X",
            "appointmentServiceOrderCode": "FRC"
        },
        {
            "appointmentDate": "2018-04-27",
            "appointmentBusinessDayIndicator": "X",
            "appointmentUnavailable": "X",
            "appointmentServiceOrderCode": "FRC",
            "appointmentStartTime": "07:00:00",
            "appointmentEndTime": "17:00:00"
        },
        {
            "appointmentDate": "2018-04-27",
            "appointmentBusinessDayIndicator": "X",
            "appointmentUnavailable": "X",
            "appointmentServiceOrderCode": "FRC",
            "appointmentStartTime": "12:30:00",
            "appointmentEndTime": "15:30:00"
        }
    ]
}

const dateFormat = 'YYYY-MM-DD';
class Date extends Component {
    constructor() {
        super()
        this.state = {
            selectedDate: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            selectedDate: date.format(dateFormat)
        })
    }
    availableDates(dateArray) {
        let priority={
            appointmentDate:response.marriageAppointmentDate
        }
        dateArray.push(priority)
        return dateArray.map(date => {
            return moment(date.appointmentDate, dateFormat)
        })
    }
    monthChange() {
        console.log("Month changed");
    }
    render() {
        const state = this.state;

        return (
            <div>
                <DatePicker
                    selected={moment(response.marriageAppointmentDate, dateFormat)}
                    inline
                    onChange={this.handleChange}
                    monthsShown={2}
                    includeDates={this.availableDates(response.appointments)}
                    highlightDates={this.availableDates(response.appointments)}
                    onMonthChange={this.monthChange}
                />
                <label>Date Selected: {state.selectedDate}</label>
            </div>
        )
    }
}
export default Date