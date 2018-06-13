import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import LocationList from './components/LocationList';


const cities = [
  'Buenos Aires,ar',
  'Mexico City,mx',
  'Bogota,co',
  'Santiago,cl',
  'Washington DC., US'
];
class App extends Component {
  handleSelectedLocation = city => {
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
