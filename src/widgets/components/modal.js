import React from 'react';
import './modal.css';
function Modal(props){
	return(
		<div className="Modal" >
		hola Modal
		{props.children}
		<button onClick={props.handleCloseModal}>cerrar</button>
		</div>
		)
}

export default Modal;