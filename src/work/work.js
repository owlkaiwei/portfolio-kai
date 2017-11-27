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
	        once: true,
	        duration: 500
     	}); 
	}

	componentWillMount() {
        console.log('work will mount')
	}

	componentDidMount() {
        console.log('work did mount')
    $('#work-btn').addClass('after-animation');
    $('#home-btn').removeClass('after-animation');
    $('#playground-btn').removeClass('after-animation');

    $('#vertical-line-right').removeClass('vertical-line-right-playground');
    $('#vertical-line-right').removeClass('vertical-line-right-home');
    $('#vertical-line-right').addClass('vertical-line-right-work');

    $('#vertical-line-left').removeClass('vertical-line-left-playground');
    $('#vertical-line-left').removeClass('vertical-line-left-home');
    $('#vertical-line-left').addClass('vertical-line-left-work');

    $('#work-content').removeClass('hidden')
    $('#work-content').removeClass('show')

  }

  componentWillUnmount() {
    $("html, body").scrollTop(0)
  }

  render() {
    console.log('work render')
    return (
    <div className='work-scope work-container-outer'>
    	<div id='work-content' className='work-container-inner container hidden'>


    		<div className='row'>
    			<div className='col s10 push-s1 m12 title margin-top-page-start'>
    				Selected Projects
    			</div>
    		</div>
    		<div className='row margin-top-2'>
    			<div className='col s10 push-s1 m8 xl6 text'>
    				As a designer, I try my best to make sure the design decisions are results of a human-centered process. I keep learning new tools and trends while telling myself - the user gives the most valuable insights and the team is my strongest backbone.
    			</div>
    		</div>



            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/taptile'>
                    <img className='thumbnail thumbnail-light' src={require('./src/taptile_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>TapTile</div>
                    <div className='text'>
                        <p>Interaction Design</p>
                        <p>UX Research</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/gtmobile'>
                    <img className='thumbnail thumbnail-dark' src={require('./src/gtmobile_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>GT Mobile</div>
                    <div className='text'>
                        <p>Responsive Web App Design</p>
                        <p>Style Guide</p>
                        <p>Information Architecture</p>
                    </div>
                </div>
            </div>



            <div className='row'>
                <div className='col s10 push-s1 m12 title margin-top-page-start'>
                    I was also an engineer. Well, I still am.
                </div>
            </div>
            <div className='row margin-top-2'>
                <div className='col s10 push-s1 m8 xl6 text'>
                    I did some cool stuff when I was a Computer Science & Engineering student. From machine learning to web dev, these projects shaped my understanding of the technical world.
                     I can’t count how many times my technical background made me a versatile team player.
                </div>
            </div>


            <div className='row margin-top-1'>
                <a className='col s10 push-s1 m8 xl6' href='http://www.imlc.io/apps' target='_blank'>
                    <img className='thumbnail thumbnail-light' src={require('./src/imlc_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>WeCollabrify</div>
                    <div className='text'>
                        <p>Web Development</p>
                        <p>UI Design</p>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col s10 push-s1 m12 title margin-top-page-start'>
                    About Kaiwei.Design
                </div>
            </div>
            <div style={{marginBottom: '10rem'}} className='row'>
                <div className='col s10 push-s1 m8 xl6 text'>
                    I have been designing and developing this website with ReactJS. It is definitely one of the most
                    rewarding passion projects of mine. It is still under construction and I am enjoying every bit of the process.
                </div>
            </div>


    		
    	</div>
    </div>
    )
  }
}