import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  withRouter,
  Link
} from 'react-router-dom';
import $ from 'jquery';
import 'jquery.easing';
import './intro.css';
import AOS from 'aos'; 
import '../../node_modules/aos/dist/aos.css'; 

import resume from './src/Kaiwei_Wang_Resume.pdf'
import portrait from './src/portrait-2.jpg'

export class Intro extends Component {
	render() {
		return(
			<div className='intro-outer-outer-container intro-scope'>
			<div className='intro-outer-container'>
				<div className='row intro-inner-container'>
					<div className='col l5 push-l2 m8 push-m2 s10 push-s1 intro-left-container'>
						<div className='name intro-text-size-1 intro-margin-top-1'>
							Kaiwei Wang
						</div>
						<div className='intro-text intro-text-size-2 intro-margin-top-2'>
							I am a product designer with passion for creating useful and delightful user experience.
						</div>
						<div className='intro-text intro-text-size-2'>
							Currently I am working for Georgia Tech while pursuing my Masters degree in Human-Computer Interaction.
						</div>
						<div className='intro-link intro-text-size-2 intro-margin-top-2'>
							<a href='#/work'>
								Check out <span>My Work</span>
							</a>
						</div>
						<div className='intro-link intro-text-size-2'>
							<a href={resume} target='_blank'>
								Download <span>Resume</span>
							</a>
						</div>
						<div className='intro-link intro-text-size-2'>
							<a href='#/playground'>
								Have Some <span>Fun! :D</span>
							</a>
						</div>
						<div className='intro-icon-container intro-icon-left intro-margin-top-2'>
							<i className="fa fa-medium" aria-hidden="true"></i>
							<i className="fa fa-linkedin" aria-hidden="true"></i>
							<i className="fa fa-dribbble" aria-hidden="true"></i>
							<i className="fa fa-envelope-o" aria-hidden="true"></i>
						</div>
					</div>
					<div className='col s3 push-s3 intro-right-container'>
						<img id='portrait' src={portrait} />
						<div className='intro-icon-container intro-icon-right'>
							<a>
								<i className="fa fa-medium" aria-hidden="true"></i>
							</a>
							<a>
								<i className="fa fa-linkedin" aria-hidden="true"></i>
							</a>
							<a href='https://dribbble.com/kkkai' target='_blank'>
								<i className="fa fa-dribbble" aria-hidden="true"></i>
							</a>
							<a>
								<i className="fa fa-envelope-o" aria-hidden="true"></i>
							</a>
						</div>
					</div>


				</div>
			</div>
			<div>
				<div className='intro-cr-container'>
					<span>
						<i className="fa fa-copyright" aria-hidden="true"></i>
						2017. Made by Kaiwei Wang w/ 
						<i className="fa fa-heart" aria-hidden="true"></i>
						(and ReactJS).
					</span>
				</div>
			</div>
			</div>
		)
	}

}