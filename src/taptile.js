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
import './responsive.css';
import './project.css';
import AOS from 'aos'; 
import '../node_modules/aos/dist/aos.css'; 

var Scroll  = require('react-scroll');

var ScrollLink = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;



class TapTile extends Component {
	constructor(props, context) { 
		console.log('construct')
		super(props, context); 
		AOS.init({
	        once: true,
	        duration: 500
     	}); 
	} 

	componentDidMount() {
 
	    Events.scrollEvent.register('begin', function(to, element) {
	      console.log("begin", arguments);
	    })
	 
	    Events.scrollEvent.register('end', function(to, element) {
	      console.log("end", arguments);
	    })
	 
	    scrollSpy.update();
	 
	  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  componentWillReceiveProps(nextProps) {
  	console.log('will receive props')
  	AOS.refresh();
  }

	render() {
		return (
			<div className='project page-container-tt'>
				<div style={{position:'fixed', left:'100px', top:'100px', display: 'none'}}>
					<ScrollLink activeClass="active" to="test1" spy={true} smooth={true}  duration={300} >
			          Overview
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="test2" spy={true} smooth={true} duration={300} >
			          Test 2 (delay)
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="test3" spy={true}  smooth={true} duration={300}>
			          Test 6 (anchor)
			        </ScrollLink>
		        </div>

		        <Element name="banner" className="element container-center-inside banner-container-tt">
		          <img className='banner-img-tt' src={require('./taptile/taptile_banner.svg')} />
		          <div className='banner-text-tt'>
		          	<div className='title-and-logo-tt'>
			          	<h1>TapTile</h1>
			          	<img className='logo-tt' src={require('./taptile/taptile_logo.svg')} />
		          	</div>
		          	<p>bringing people together in public space.</p>
		          </div>
		        </Element>

		        <Element name="info" className="element info-container-tt margin-top-2">
		          <div className='row'>
		          	<p className='col s4 label'>Role</p>
		          	<p className='col s8 content'>
		          		Lead Interaction Designer<br/>
		          		UX Researcher
		          	</p>
		          </div>
		          <div className='row'>
		          	<p className='col s4 label'>Tool</p>
		          	<p className='col s8 content'>Arduino<br/> Processing.js</p>
		          </div>
		          <div className='row'>
		          	<p className='col s4 label'>Award</p>
		          	<p className='col s8 content'><a href='http://cic.gatech.edu/fall-2016/winners'>First Prize @ Georgia Tech Convergence Innovation Competition</a></p>
		          </div>
		          <div className='row'>
		          	<p className='col s4 label'>Duration</p>
		          	<p className='col s8 content'>Fall 2016</p>
		          </div>
		        </Element>

		        <Element name='overview' data-aos="fade-up" >
		        	<div className='container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- Overview -</h2>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width' src={require('./taptile/highlevel_model.svg')}/>
		        			</p>
		        		</div>
		        		<div className='col s12 l6'>
			        		<p>By transforming a 100’’-by-100’’ flat surface into a 3v3 multi-player gaming area, TapTile lowers the barrier to social interaction and brings people together in public spaces.</p>
			        		<p>TapTile is a result of dedicated user research. I take pride in the project not just for the award-winning result, but also for the user-centered process I was involved in.</p>
			        		<p>Skip to the prototype to try it out!</p>
		        		</div>
		        	</div>
		        	</div>
		        </Element>

		        <Element name='research' data-aos="fade-up" >
		        	<div className='container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- User Research -</h2>
		        	</div>
		        	<div className='row'>
		        		<div className='row col s12 container-center-inside margin-top-2'>
		        			<p className='quote'>Why be on the phone, when you can interact with people around you?</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6'>
		        			<p className='title'>
		        				Initiative
		        			</p>
			        		<p>School started, and our project team soon observed that students were not interacting with each other at public spaces on campus, especially bus stops.</p>
			        		<p>Not everyone is an extrovert. But could there be a design opportunity to encourage social interaction at public spaces?</p>
		        		</div>
		        		<div className='col s12 l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width' src={require('./taptile/people_on_phone.png')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
			        		<p className='title'>
			        				Problem Space & Research Questions
			        			</p>
		        			<p>
		        				Realizing that "public area" was too broad of a problem space, I proposed
		        				to choose on-campus bus stops to be our location of interest. We then developed three primary research questions
		        			</p>
		        			<div className='left-vertical-line'>
		        			<p className='important'>
	        					What are students' current behaviors and attitudes towards social interaction at on-campus bus stops?
	        				</p>
	        				<p className='important'>
	        					For students waiting for buses, is there a barrier to social interaction? If yes, what constitutes it?
	        				</p>
	        				</div>
			        	</div>
		        	</div>
		        	</div>
		        </Element>

				
				<Element name="test1" className="element col " style={{height:'1000px'}}>
	
		        </Element>
		 
		        <Element name="test2" data-aos="fade-up" data-aos-duration="3000" className="element" style={{height:'1000px'}}>
		          test 2
		          <div>hahaha</div>
		          <div>hahaha</div>
		          <div>hahaha</div>
		          <div>hahaha</div>
		          <div>hahaha</div>
		        </Element>

		        <Element name="test3" className="element" style={{height:'1000px'}}>
		          test 3
		          <div>hahaha</div>
		          <div>hahaha</div>
		          <div>hahaha</div>
		        </Element>

			</div>
		)
	}
}

export default TapTile