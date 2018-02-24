import React from 'react';
import './nasa_list_item.css'
function NasaListItem ({nasa, handleOpenModal}){
	return(
		<div className="cardNasa" onClick={() => handleOpenModal()}>
			<div className="imageContent">
				<img className="imageNasa" src={nasa.url} />
			</div>
			<div className="titleNasa">
				<h2>{nasa.title}</h2>
			</div>
			<div className="dateNasa">
				<p>{nasa.date}
				<br/><span>Reed more..</span>
				</p>
			</div>
		</div>
		)
}

export default NasaListItem;