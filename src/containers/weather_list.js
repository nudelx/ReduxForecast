import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WetherList extends Component {

	render(){
		// console.dir(this);
		return (
			<table className="table table-hover">
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature</th>
							<th>Presure</th>
							<th>Humidity</th>
						</tr>
					</thead>

					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			)
	}


	renderWeather(cityData){

		console.dir(cityData);
		const cityName = `${cityData.city.name}, ${cityData.city.country}`;
		const temp  = parseFloat(cityData.list[0].main.temp - 273.15).toFixed( 2 );;
		const pressure  = cityData.list[0].main.pressure;
		const humidity  = cityData.list[0].main.humidity;

		const tempArr  = cityData.list.map((data) => { return parseFloat(data.main.temp-273.15).toFixed(2) })
		const pressureArr  = cityData.list.map((data) => { return parseFloat(data.main.pressure).toFixed(2) })
		const humidityArr  = cityData.list.map((data) => { return parseFloat(data.main.humidity).toFixed(2) })
		console.dir(tempArr);
		// const pressure  = cityData.list[0].main.pressure;
		// const humidity  = cityData.list[0].main.humidity;



		return(<tr key={new Date().getTime()}>
			<td>{cityName}</td>
			<td><Chart data={tempArr} color="red" today={temp} type="C"/></td>
			<td><Chart data={pressureArr} color="blue" type="hPa"/></td>
			<td><Chart data={humidityArr} color="green" type="%"/></td>
		</tr>)
	}


}





function mapStateToProps({ weather }) {   /// like state.weather

		return { weather}; /// like { weather:weather }
}


export default connect( mapStateToProps )(WetherList);