import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import CircularProgress from 'material-ui/CircularProgress';
import transformWeather from './../../services/transformWeather';
import './styles.css';



const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "b6dc8fe842b121149cc7b681c272b62c";




class WeatherLocation extends Component { //Functional component : Tiene una sola funcion, un class component tiene acceso al ciclo de vida de REACT

  constructor({city}){
    super();
    this.state = {
      data: null,
      city
    }
  }

  componentWillMount = () => {
    const {city} = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}`;
    fetch(api_weather).then(data => {
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data)
      this.setState({data})
    });
  }

  /*
  componentDidMount = () => {
    //Luego de renderizar
  }

  componentWillUpdate(){
    //Actualiza
  }
  componentDidUpdate(){
    //Luego de actualizar
  }
  */
  
  render = () =>  {
    const {onWeatherLocationClick} = this.props;
    const {city, data} = this.state;
    return(
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
      <Location city={city} />
      {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
    </div>
    )
  };
}
WeatherData.prototype = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;