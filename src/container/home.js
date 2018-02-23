import React, { Component} from 'react';
import axios from 'axios'
import NasaList from '../components/nasa_list'
const API_KEY= 'sIxvZGy4zfmHD4OBX0p3UVyvWhARG7Ouqn2vNOHC';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			nasa: []
		}
	}
	componentDidMount(){
		axios.get('https://api.nasa.gov/planetary/apod',{
			params: { 
				api_key: API_KEY,
				count: 24,
			}
		})
		.then(result =>{
			console.log(result.data)
			this.setState({
				nasa: result.data,
			})
		})
	}
	render(){
		return (
			<div>
				<NasaList 
					nasas= {this.state.nasa}
				/>
			</div>
			)
	}
}

export default Home;