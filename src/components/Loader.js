import React, { Component } from 'react';

class Loader extends Component {
	constructor() {
	    super();
	    this.state = {
	    	isLoading: true,
	    	flipRight: null,
	    	flipLeft: null
	    }
  	}

  	handleClick() {
  		console.log("haha");
  	}


  	render() {
  		return (
  			<div>
  			{
  				this.props.isLoading ? <img src={require('../img/load.svg')} /> : 
  				
					<svg width="300" height="300" viewBox="0 0 300 300">
							<lineargradient id="linear-gradient" gradientTransform="matrix(0, 1, -1, 0, 220.98, 1.88)" gradientUnits="userSpaceOnUse" x1="87.24" x2="68.93" y1="106.4" y2="-8.13">
								<stop offset="0%" stopColor="#ff7bac"/>
								<stop offset="24%" stopColor="#ff7eae"/>
								<stop offset="41%" stopColor="#fe88b3"/>
								<stop offset="57%" stopColor="#fc98bd"/>
								<stop offset="72%" stopColor="#f9afca"/>
								<stop offset="86%" stopColor="#f6ccdc"/>
								<stop offset="99%" stopColor="#f2f0f1"/>
								<stop offset="100%" stopColor="#f2f2f2"/>
							</lineargradient>
						<g id="Layer_2">
							<g id="Layer_1-2">
								<path onClick={this.handleClick} className='flipRight' fill="#8ae5ff" d="M117.7,0,233.81,106.63a4,4,0,0,1,.24,5.65l-48.7,53a4,4,0,0,1-5.65.24l-62.15-57.07Z"/>
								<path className='flipLeft' fill="#8ae5ff" d="M49.6,165.12,1,112a4,4,0,0,1,.26-5.65L117.7,0l-.15,108.48-62.3,56.9A4,4,0,0,1,49.6,165.12Z"/>
							</g>
						</g>
					</svg>
  			}
  			</div>
  		);
  	}



}

export default Loader;