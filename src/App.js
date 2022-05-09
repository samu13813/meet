import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    offlineText: ''
  };

  // componentDidMount() {
  //   this.mounted = true;
  //   getEvents().then((events) => {
  //     if (this.mounted) {
  //       this.setState({ events, locations: extractLocations(events) });
  //     }
  //   });
  // };

  async componentDidMount() {
    this.mounted = true;
    if (navigator.onLine && !window.location.href.startsWith('http://localhost')) {
      const accessToken = localStorage.getItem('access_token');
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({
              events,
              locations: extractLocations(events),
              warningText: ''
            });
          }
        });
      }
    } else {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events,
            locations: extractLocations(events),
            warningText: 'You are offline. The displayed event list may not be up to date.',
            showWelcomeScreen: false
          });
        }
      });
    }
  };

  componentWillUnmount() {
    this.mounted = false;
  };

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      { 
        numberOfEvents 
      }, 
      this.updateEvents(this.state.locations, numberOfEvents)
    );
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events : 
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          numberOfEvents: eventCount
        });
      }
    });
  };
  
  render() {
    return (
      <div className='App'>
        <h1>MEET APP</h1>
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents} 
        />
        <NumberOfEvents 
          numberOfEvents={this.state.numberOfEvents} 
          updateNumberOfEvents={this.updateNumberOfEvents} 
        />
        <EventList 
          events={this.state.events} 
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default App;
