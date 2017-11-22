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
import AOS from 'aos'; 
import '../../../node_modules/aos/dist/aos.css'; 

var Scroll  = require('react-scroll');

var ScrollLink = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;



export default class Test extends Component {
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

  foo() {
  	console.log('hey')
  }

	render() {
		return (
			<div>
				<div>
				<ScrollLink activeClass="active" to="test1"  smooth={true} offset={50} duration={500}>
		          Test 1
		        </ScrollLink>
		        <ScrollLink activeClass="active" to="test2" smooth={true} offset={50} duration={500} delay={1000}>
		          Test 2 (delay)
		        </ScrollLink>
		        <ScrollLink className="test6" to="anchor"  smooth={true} duration={500}>
		          Test 6 (anchor)
		        </ScrollLink>
		        </div>

		        <Element name="test1" className="element" style={{height: '1000px'}}>
		          test 1
		        </Element>
		 
		        <Element name="test2" className="element" tyle={{height: '1000px'}}>
		          test 2
		        </Element>
		 
		        <div id="anchor" className="element" tyle={{height: '1000px'}}>
		          test 6 (anchor)
		        </div>
			</div>
			)}
	}



