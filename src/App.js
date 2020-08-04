import React from 'react';
import Weather from './app_component/weather.component';
import './App.css';
import Form from './app_component/form.component'

import 'weather-icons/css/weather-icons.css';

const API_key ='c84342540efa3dc61c7a7ce1d7dca6c4';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celcius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
  

    this.weatherIcon = {
      thunderstrom:"wi-thunderstrom",
      Drizzle: "wi-sleet",
      Rain:"wi-snow-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Cear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
  }


  get_WeatherIcon(icons,rangeId){
    switch(true){
      case rangeId >=200 && rangeId<=232:
          this.setState({icon:this.weatherIcon.thunderStrom});
          break;
      
          case rangeId >=300 && rangeId<=321:
            this.setState({icon:this.weatherIcon.Drizzle});
            break;    

            case rangeId >=500 && rangeId<=531:
              this.setState({icon:this.weatherIcon.Rain});
              break;        
            
              case rangeId >=600 && rangeId<=622:
                this.setState({icon:this.weatherIcon.snow});
                break;

                case rangeId >=702 && rangeId<=781:
                  this.setState({icon:this.weatherIcon.Atmosphere});
                  break;

                  case rangeId ==800:
                    this.setState({icon:this.weatherIcon.Clear});
                    break;

                    case rangeId >=801 && rangeId<=804:
                      this.setState({icon:this.weatherIcon.Clouds});
                      break;

                      default:
                        this.setState({icon:this.weatherIcon.Cloudes})
                        break;
                    }                    
  }

  calCelcius(temp){
    let cell = Math.floor(temp-273);
    return(cell);
  }
  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    if(city&&country){
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

    const response = await api_call.json();

  this.setState({
    city:`${response.name}, ${response.sys.country}`,

    celcius:this.calCelcius(response.main.temp),
    temp_min:this.calCelcius(response.main.temp_min),
    temp_max:this.calCelcius(response.main.temp_max),
    description:response.weather[0].description,

  });
  this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    }
    else{
      this.setState({error:true});
    }
  };
  render(){
    return(
    <div className="App">
    <h2>Weather Info Portal</h2>
    <Form loadWeather={this.getWeather} error={this.state.error}/>
    <Weather 
    city={this.state.city} 
    country={this.state.country}
    temp_celcius={this.state.celcius}
    temp_max={this.state.temp_max}
    temp_min={this.state.temp_min}
    weatherIcon={this.state.icon}
    description={this.state.description}
    />
    </div>
    )
  }
}

export default App;
