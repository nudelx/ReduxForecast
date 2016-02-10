import React from 'react';
import { Sparklines , SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function avg(data){

	let sum =0;

	data.map( function(item){	sum+=parseFloat(item);});

	return parseFloat(sum/(data.length-1) ).toFixed(2);
}

export default (props) => {
	return (
			<div>
			<div>TODAY: {props.today} </div>
				<Sparklines height={100} width={180} data={props.data}>
					<SparklinesLine color={props.color} />
					<SparklinesReferenceLine type="avg"/>
				</Sparklines>
				<div>Average:{avg(props.data)} {props.type}</div>
			</div>
		)
}
