import { combineReducers } from 'redux';
import WeatherReducer from './reduser_weather'

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
