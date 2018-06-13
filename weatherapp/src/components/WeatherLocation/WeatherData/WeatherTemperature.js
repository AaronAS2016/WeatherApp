import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, DRIZZLE, THUNDER} from './../../../constants/weather';
import PropTypes from 'prop-types';
import './styles.css';

const stateToIconName = weatherState => {
  switch(weatherState){
    case CLOUD:
      return  'cloud';
    case CLOUDY:
      return 'cloudy';
    case SUN:
      return 'day-sunny';
    case RAIN:
      return 'rain';
    case SNOW :
      return 'snow';
    case WINDY:
      return 'windy';
    case DRIZZLE :
      return 'day-showers';
    case THUNDER:
      return 'day-thunderstorm';
    default:
      return  'day-sunny';

  }
}

const getWeatherIcons = weatherState =>{
  return (<WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="2x"/>)
};
const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="weatherTemperatureCont">
    
    {getWeatherIcons(weatherState)}
    <span className="temperature">{`${temperature} `}</span>
    <span className="temperatureType">C°</span>
  </div>
)

WeatherTemperature.protoTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string
}

export default WeatherTemperature;
