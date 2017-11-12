import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  withRouter,
  Link
} from 'react-router-dom';
import $ from 'jquery';
import 'jquery.easing';
import './work.css';
import AOS from 'aos'; 
import '../../node_modules/aos/dist/aos.css'; 

export class Work extends Component {

	constructor() {
		super()
		AOS.init({
	        once: false,
	        duration: 500
     	}); 
	}

	componentWillMount() {
		$("html, body").scrollTop(0)
	}

	componentDidMount() {
    $('#work-btn').addClass('after-animation');
    $('#home-btn').removeClass('after-animation');
    $('#playground-btn').removeClass('after-animation');

    $('#vertical-line-right').removeClass('vertical-line-right-playground');
    $('#vertical-line-right').removeClass('vertical-line-right-home');
    $('#vertical-line-right').addClass('vertical-line-right-work');

    $('#vertical-line-left').removeClass('vertical-line-left-playground');
    $('#vertical-line-left').removeClass('vertical-line-left-home');
    $('#vertical-line-left').addClass('vertical-line-left-work');
  }

  render() {
    return (
    <div id='work-content' className='work-scope work-container-outer'>
    	<div className='work-container-inner container'>
    		<div className='row'>
    			<div className='col s12 title margin-top-page-start'>
    				Selected Projects
    			</div>
    		</div>
    		<div className='row'>
    			<div className='col s6 text'>
    				As a designer, I try my best to make sure the design decisions are results of a human-centered process. I keep adopting new tools and trends while telling myself - the user gives the most valuable insights and my team is my strongest backbone.
    			</div>
    		</div>
    		<div className='row'>
    			<div className='col s12 title margin-top-page-start'>
    				Selected Projects
    			</div>
    		</div>
    		<div className='row'>
    			<div className='col s6 text'>
    				As a designer, I try my best to make sure the design decisions are results of a human-centered process. I keep adopting new tools and trends while telling myself - the user gives the most valuable insights and my team is my strongest backbone.
    			</div>
    		</div>
    		<div className='row' data-aos='zoom-in-up'>
    			<div className='col s12 title margin-top-page-start'>
    				Selected Projects
    			</div>
    		</div>
    		<div className='row' data-aos='zoom-in-up'>
    			<div className='col s6 text'>
    				As a designer, I try my best to make sure the design decisions are results of a human-centered process. I keep adopting new tools and trends while telling myself - the user gives the most valuable insights and my team is my strongest backbone.
    			</div>
    		</div>
    	</div>
    </div>
    )
  }
}