import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  withRouter,
  Link
} from 'react-router-dom';
import $ from 'jquery';
import 'jquery.easing';
import Loader from './components/Loader';
import logo from './logo.svg';
import './App.css';
import './intro.css';
import AOS from 'aos'; 
import '../node_modules/aos/dist/aos.css'; 

export class Intro extends Component {
	render() {
		return(
			<div className='intro-outer-container'>
				<div className='row intro-inner-container'>
					<div className='col s5 push-s2 intro-left-container'>
						<div className='name intro-margin-top-1'>
							Kaiwei Wang
						</div>
						<div className='intro-text intro-margin-top-2'>
							I am a product designer with a passion for creating useful and delightful user experience.
						</div>
						<div className='intro-text intro-margin-top-2'>
							Currently I am working for Georgia Tech while pursuing my Masters degree in Human-Computer Interaction.
						</div>
						<div className='intro-link intro-margin-top-2' href='#/work'>
							Check out My Work
						</div>
						<div className='intro-link intro-margin-top-2' href='#/work'>
							Download Resume
						</div>
						<div className='intro-link intro-margin-top-2' href='#/work'>
							Have Some Fun :D
						</div>
					</div>
					<div className='col s3 push-s2'>
						<img id='portrait' src={require('./img/portrait-2.jpg')} />
					</div>
				</div>
			</div>
		)
	}

}