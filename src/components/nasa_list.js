import React from 'react';
import NasaListItem from './nasa_list_item';
import './nasa_list.css'
const NasaList = (props) => {
	const nasaItems = props.nasas.map((nasa) =>{ //return array of nasa
		return (
			<NasaListItem 
				key = {nasa.date}
				nasa = {nasa}
				handleOpenModal = {props.handleOpenModal}
			/>
			)
	});
	return (
			<div className="nasaList">
			{nasaItems}
			</div>
		)
}

export default NasaList;