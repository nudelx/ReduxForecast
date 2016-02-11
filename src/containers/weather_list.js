import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WetherList extends Component {

	render(){
		console.dir(this.props.weather);
		return (
			<table className="table table-hover">
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature (C)</th>
							<th>Presure hPa</th>
							<th>Humidity %</th>
						</tr>
					</thead>

					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			)
	}


	renderWeather(cityData){
		if( !cityData.list.length ){ return <span>"Data not available"</span>}

		let cityName = `${cityData.city.name}, ${cityData.city.country}`;
		let temp  = parseFloat(cityData.list[0].main.temp - 273.15).toFixed( 2 );;
		let pressure  = cityData.list[0].main.pressure;
		let humidity  = cityData.list[0].main.humidity;

		let tempArr  = cityData.list.map((data) => { return parseFloat(data.main.temp-273.15).toFixed(2) })
		let pressureArr  = cityData.list.map((data) => { return parseFloat(data.main.pressure).toFixed(2) })
		let humidityArr  = cityData.list.map((data) => { return parseFloat(data.main.humidity).toFixed(2) })


		return(<tr key={cityName}>
			<td>{cityName}</td>
			<td> <Chart data={tempArr} color="red" today={temp} type="C"/> </td>
			<td> <Chart data={pressureArr} color="blue" type="hPa"/> </td>
			<td> <Chart data={humidityArr} color="green" type="%"/> </td>
		</tr>)
	}


}





function mapStateToProps({ weather }) {   /// like state.weather

		return { weather}; /// like { weather:weather }
}


export default connect( mapStateToProps )(WetherList);