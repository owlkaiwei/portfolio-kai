import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  withRouter,
  Link
} from 'react-router-dom';
import $ from 'jquery';
import 'jquery.easing';
import '../project.css';
import './gtmobile.css';
import AOS from 'aos'; 
import '../../../node_modules/aos/dist/aos.css'; 
import Headroom from 'react-headroom'

var Scroll  = require('react-scroll');

var ScrollLink = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;



class GtMobile extends Component {
	constructor(props, context) { 
		console.log('construct')
		super(props, context); 
		AOS.init({
	        once: false,
	        duration: 300
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

	  scrollToTop() {
	    scroll.scrollToTop();
	  }

	componentWillUnmount() {
		Events.scrollEvent.remove('begin')
		Events.scrollEvent.remove('end')
	}

	componentWillReceiveProps(nextProps) {
		console.log('will receive props')
		AOS.refresh();
	}

	foo() {
		console.log('hey')
	}

	render() {
		return (
			<div id='gtmobile-page' className='project-page'>
				<Headroom disableInlineStyles={true}>
		            <div className='project-navbar'>
		              <div className='project-nav-background'/>
		              <a href='#/work'>
		                W O R K
		              </a>
		              <a href='#/'>
		                H O M E
		              </a>
		              <a href='#/work/taptile'>
		                N E X T : T A P T I L E
		              </a>
		            </div>
		        </Headroom>
				<div className='progress-container progress-responsive-position'>
					<ScrollLink activeClass="scroll-active" to="overview" smooth={true} offset={-100} >
			          <span className='label'>Overview</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="research" smooth={true} offset={-100} >
			          <span className='label'>Research</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="ideation" smooth={true} offset={-100}>
			          <span className='label'>Ideation</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="solution" smooth={true} offset={-100}>
			          <span className='label'>Solution</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="prototype" smooth={true} offset={-100}>
			          <span className='label'>Prototype</span><span className='circle'></span>
			        </ScrollLink>
			        <a onClick={this.scrollToTop}>Back to Top</a>

		        </div>

		        <Element name="banner" className="element banner-container">
		        	<div className='banner-container-inner container-center-inside'>
		        		<img className='banner-img shadow' src={require('./src/homepage_shortened.gif')} />
		        	</div>
		        	<div className='banner-container-inner container-center-inside'>
		        		<div className='banner-text'>
			          	<div className='title-and-logo'>
				          	<h1>GT Mobile</h1>
			          	</div>
			          	<p>everyone's partner on GT campus</p>
			          </div>
		        	</div>
		          
		         
		        </Element>

		        <Element name="info" className="element info-container margin-top-2">
		          <div className='row'>
		          	<p className='col s4 label'>Role</p>
		          	<p className='col s8 content'>
		          		Lead UX Designer<br/>
		          		UX Researcher
		          	</p>
		          </div>
		          <div className='row'>
		          	<p className='col s4 label'>Employer</p>
		          	<p className='col s8 content'>Research Network Operation Center @ Georgia Tech</p>
		          </div>
		          <div className='row'>
		          	<p className='col s4 label'>Tool</p>
		          	<p className='col s8 content'>Framer Studio<br/> Principle<br/> ReactJS</p>
		          </div>
		          <div className='row'>
		          	<p className='col s4 label'>Duration</p>
		          	<p className='col s8 content'>Spring 2017</p>
		          </div>
		        </Element>

		        <Element name='overview' data-aos="fade-up" >
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- A Redesign. More Than A New Look. -</h2>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
			        		<p>In early 2017, I took on the job of redesigning GT Mobile - a web app suite that provides 
			        		everyone in Georgia Tech with campus-related information. </p>
		        		</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6 push-l6'>
			        		<p className='left-vertical-line'>GT Mobile is now redesigned to be unified in style.</p>
		        		</div>
		        		<div className='col s12 l6 pull-l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-70 img-max-width-3 shadow' src={require('./src/homepage_shortened.gif')}/>
		        			</p>
		        		</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6'>
			        		<p className='left-vertical-line'>Previously disconnected apps are now integrated to create a more integrated experience. This is the transition from GT Places to GT Buses.</p>
		        		</div>
		        		<div className='col s12 l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-70 img-max-width-3 shadow' src={require('./src/places_to_buses@x1_128.gif')}/>
		        			</p>
		        		</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6 push-l6'>
			        		<p className='left-vertical-line'>Relevant information is presented in an optimized structure.</p>
		        		</div>
		        		<div className='col s12 l6 pull-l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-70 img-max-width-3 shadow' src={require('./src/places_pages_final.gif')}/>
		        			</p>
		        		</div>
		        	</div>

		        	</div>
	        	</Element>


			</div>
		)
	}
}

export default GtMobile