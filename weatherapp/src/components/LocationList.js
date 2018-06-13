import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';



const LocationList = ({cities, onSelectedLocation}) => {
  const handleWeatherLocationClick = city =>{
    onSelectedLocation(city);
  };
  
  const strToComponent = cities => (
    cities.map(city => (<
      WeatherLocation 
        key={city} 
        city={city}
        onWeatherLocationClick={()=> handleWeatherLocationClick(city)}
        />)
    )
  );
  return(<div>
    {strToComponent(cities)}
  </div>)
}
Location.PropTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}
export default LocationList;