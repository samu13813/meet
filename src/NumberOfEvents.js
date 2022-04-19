import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        amountOfEvents: 10,
        errorMessage: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 10) {
            this.setState({
                amountOfEvents: '',
                errorMessage: 'Please enter a number between 1 and 10'
            })
        } else {
            this.setState({
                amountOfEvents: value
            });
        }
        this.props.updateNumberOfEvents(event.target.value);
    };

    render() {
        return (
            <div className='numberOfEvents'>
                <input
                    className='inputNumberOfEvents'
                    type='number'
                    value={this.state.amountOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;