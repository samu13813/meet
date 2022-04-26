import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        numberOfEvents: 32,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: '',
            });
        } else {
            this.setState({
                numberOfEvents: value
            });
        }
        this.props.updateNumberOfEvents(event.target.value);
    };

    render() {
        return (
            <div className='numberOfEvents'>
                <p>Number of Events:</p>
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