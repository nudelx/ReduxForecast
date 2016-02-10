import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{


	constructor(props){

		// initial state of the component
		super(props);
		this.state = { term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	render(){

		return (
				<form className="input-group" onSubmit={this.onFormSubmit}>

					<input
						className="form-control"
						onChange={ this.onInputChange }
						placeholder=" get 5 days forecats"
						value={this.state.term}	/>

					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary"> Go</button>
					</span>

				</form>
			)
	}

	onFormSubmit(event){

		event.preventDefault();
		// console.dir(this);
		this.props.fetchWeather(this.state.term)
		this.setState({ term: ''});

	}

	onInputChange(event){

		// console.log(event);

		let value  = event.target.value;
		this.setState({term: value });

		// clearTimeout(this.Timer);
		// this.Timer = setTimeout( function(){
		// 	console.log(value);

		// }, 500);

	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect( null , mapDispatchToProps)(SearchBar)
/// null is only for dspatch to be the second param


