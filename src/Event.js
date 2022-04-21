import React, { Component } from 'react';

class Event extends Component {

    state = {
        collapsed: false
    }

    handleButtonClicked = () => {
        this.setState({
            collapsed: !this.state.collapsed, //false
        });
    };

    render() {

        const { event } = this.props;
        const { collapsed } = this.state;

        return (
            <div className='event'>
                <h3 className='location'>
                    {event.location}
                </h3>
                <p className='summary'>
                    {event.summary}
                </p>
                <button 
                    className='show-details'
                    onClick={this.handleButtonClicked}
                >
                    {collapsed ? 'Hide Details' : 'Show Details'}                   
                </button>

                {collapsed && (
                    <div className='more-details'>
                        <p className='event-more-details'>
                            {event.description}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default Event;