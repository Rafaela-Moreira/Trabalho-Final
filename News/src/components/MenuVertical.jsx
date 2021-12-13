import React from 'react'
import { Link } from 'react-router-dom';

import './MenuVertical.css'

function MenuVertical() {
	return (
		<div className='menu-vertical-container'>
			<Link to='/' className="item">
				<span className="text-item">JOGOS</span>
			</Link>
			<Link to='/' className="item">
				<span className="text-item">FILMES</span>
			</Link>
			<Link to='/' className="item">
				<span className="text-item">CINEMA</span>
			</Link>
			
		</div>
	)
}

export default MenuVertical