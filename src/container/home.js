import React, { Component} from 'react';
import axios from 'axios'
import NasaList from '../components/nasa_list'
import ModalContainer from '../widgets/containers/modal';
import Modal from '../widgets/components/modal';

const API_KEY= 'sIxvZGy4zfmHD4OBX0p3UVyvWhARG7Ouqn2vNOHC';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			nasa: [],
			modalVisible: false,
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
	handleCloseModal = (event) =>{
		this.setState({
			modalVisible: false,
		})
	}
	handleOpenModal = (event) =>{
		this.setState({
			modalVisible: true,
		})
	}

	render(){
		return (
			<div>
				<NasaList 
					nasas= {this.state.nasa}
					handleOpenModal = {this.handleOpenModal}
				/>
				{this.state.modalVisible &&
					<ModalContainer>
						<Modal
						handleCloseModal= {this.handleCloseModal}
						>
							<h3>salió op</h3>
						</Modal>
					</ModalContainer>
				}
				
			</div>
			)
	}
}

export default Home;