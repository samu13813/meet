import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        numberOfEvents: 32,
        errorText: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: '',
                errorText: 'Please select a number from 1 to 32'
            });
        } else {
            this.setState({
                numberOfEvents: value,
                errorText: ''
            });
        }
        this.props.updateNumberOfEvents(event.target.value);
    };

    render() {
        return (
            <div className='numberOfEvents'>
                <p>Number of Events:</p>
                <ErrorAlert text={this.state.errorText} />
                <input
                    className='inputNumberOfEvents'
                    type='number'
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;