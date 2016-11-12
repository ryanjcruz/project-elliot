import React, { Component } from 'react'
import '../css/Styles.css'
import photo from '../img/personal_photo.jpg'


class Heading extends Component {
	render() {
		return(
			<div>
				<header className="header">
					<div className="text-vertical-center cover-photo">
						<h1>Ryan Cruz</h1>
						<h3>Programmer Analyst</h3>
						<img src={photo} className="circle-photo" alt="circle-personal"/>
					</div>
				</header>

				
			</div>

		) 
	}
}

export default Heading