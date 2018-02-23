import React from 'react';
import './nasa_list_item.css'
function NasaListItem ({nasa}){
	return(
		<div className="cardNasa">
			<div className="titleNasa">
				<h2>{nasa.title}</h2>
			</div>
			<div className="imageContent">
				<a target="_blank" href={nasa.url}>
					<img className="imageNasa" src={nasa.url} />
				</a>
			</div>
			<div className="dateNasa">
				<p>{nasa.date}
				<br/><a href="#">Reed more..</a>
				</p>
			</div>
		</div>
		)
}

export default NasaListItem;