import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';
import { WarningAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    warningText: '',
    showWelcomeScreen: undefined
  };

  updateNumberOfEvents = (eventCount) => {
    this.setState(
      { 
        numberOfEvents: eventCount
      }, 
      this.updateEvents(this.state.locations, eventCount)
    );
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid ) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }  
  };

  // async componentDidMount() {
  //   this.mounted = true;
  //   if (navigator.onLine && !window.location.href.startsWith('http://localhost')) {
  //     const accessToken = localStorage.getItem('access_token');
  //     const isTokenValid = (await checkToken(accessToken)).error ? false : true;
  //     const searchParams = new URLSearchParams(window.location.search);
  //     const code = searchParams.get("code");
  //     this.setState({ showWelcomeScreen: !(code || isTokenValid) });
  //     if ((code || isTokenValid) && this.mounted) {
  //       getEvents().then((events) => {
  //         if (this.mounted) {
  //           this.setState({
  //             events,
  //             locations: extractLocations(events),
  //             warningText: ''
  //           });
  //         }
  //       });
  //     }
  //   } else {
  //     getEvents().then((events) => {
  //       if (this.mounted) {
  //         this.setState({
  //           events,
  //           locations: extractLocations(events),
  //           warningText: 'You are offline. The displayed event list may not be up to date.',
  //           showWelcomeScreen: false
  //         });
  //       }
  //     });
  //   }
  // }

  componentWillUnmount() {
    this.mounted = false;
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };
  
  render() {
    
    const { events } = this.state;

    if (this.state.showWelcomeScreen === undefined) return <div className='App' />

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

        <div className='data-vis-wrapper'>

        <EventGenre events={events} />

        <ResponsiveContainer height={400} >
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        </div>
                
        <EventList 
          events={this.state.events} 
          numberOfEvents={this.state.numberOfEvents}
        />     

        <WelcomeScreen 
        showWelcomeScreen={this.state.showWelcomeScreen}
        getAccessToken={() => { getAccessToken() }} 
        />
      </div>
    );
  }
}

export default App;
