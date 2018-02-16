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
import Waypoint from 'react-waypoint';

export class Work extends Component {

	constructor() {
		super()
		AOS.init({
	        once: false,
	        duration: 500
     	}); 
	}

	componentWillMount() {
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

    $('#work-content').removeClass('hidden')
    $('#work-content').addClass('show')

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
                <a className='col s10 push-s1 m8 xl6' href='#/work/mood'>
                    <img className='thumbnail thumbnail-dark' src={require('./src/mood_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>M O o D</div>
                    <div className='text'>
                        <p>Music Information Visualization</p>
                        <p>Interaction Design</p>
                        <p>Visual Design</p>
                    </div>
                </div>
            </div>

             <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/wardrober'>
                    <img className='thumbnail thumbnail-dark' src={require('./src/wardrober_thumbnail@yellow.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>Wardrober</div>
                    <div className='text'>
                        <p>IOS 11 Design</p>
                        <p>UX Research</p>
                        <p>Rapid Prototyping</p>
                        <p>Motion Design</p>
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
                        <p>Information Architecture</p>
                        <p>Interaction Design</p>
                        <p>Style Guide</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/lifedash'>
                    <img className='thumbnail thumbnail-dark' src={require('./src/lifedash_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>LifeDash.com</div>
                    <div className='text'>
                        <p>UX Design</p>
                        <p>Web Design</p>
                        <p>UX Research Planning</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/yelp'>
                    <img className='thumbnail thumbnail-dark' src={require('./src/yelp_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>Yelp Mobile Website Redesign</div>
                    <div className='text'>
                        <p>Mobile Web Design</p>
                        <p>UI Design</p>
                        <p>Rapid Prototyping</p>
                    </div>
                </div>
            </div>


            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/taptile'>
                    <img className='thumbnail thumbnail-light' src={require('./src/taptile_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>TapTile</div>
                    <div className='text'>
                        <p>Physical Sensor-Based Prototyping</p>
                        <p>Interaction Design</p>
                        <p>UX Research</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/elavon'>
                    <img className='thumbnail thumbnail-light' src={require('./src/elavon_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>UX Internship @ Elavon</div>
                    <div className='text'>
                        <p>Help Center Design</p>
                        <p>Ecommerce App Design</p>
                        <p>Agile Development/Lean UX</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/rostery'>
                    <img className='thumbnail thumbnail-light' src={require('./src/rostery_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>Rostery</div>
                    <div className='text'>
                         <p>Google Design Challenge</p>
                        <p>Interaction Design</p>
                        <p>Material Design</p>
                        <p>UX Research</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' style={{display: 'none'}} data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/reco'>
                    <img className='thumbnail thumbnail-dark' src={require('./src/echoit_thumbnail@2x.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>Reco</div>
                    <div className='text'>
                        <p>iOS 11 App Design</p>
                        <p>Motion Design</p>
                        <p>Branding</p>
                    </div>
                </div>
            </div>

            

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='#/work/misc'>
                    <img className='thumbnail thumbnail-dark' src={require('./src/other_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>Miscellaneous</div>
                    <div className='text'>
                        <p>Graphic</p>
                        <p>Poster</p>
                        <p>Logo</p>
                    </div>
                </div>
            </div>



        



            <div className='row' data-aos="fade-up">
                <div className='col s10 push-s1 m12 title margin-top-page-start'>
                    I was also an engineer. Well, I still am.
                </div>
            </div>
            <div className='row margin-top-2' data-aos="fade-up">
                <div className='col s10 push-s1 m8 xl6 text'>
                    I did some cool stuff when I was a Computer Science & Engineering student. From machine learning to web dev, these projects shaped my understanding of the technical world.
                     I can’t count how many times my technical background made me <span style={{'position':'relative'}} className='team-player'>a versatile team player</span>.
                </div>
                <Waypoint
                      onEnter={()=>{$('.team-player').addClass('text-reveal')}}
                      onLeave={()=>{$('.team-player').removeClass('text-reveal')}}
                />
            </div>

            <div className='row margin-top-1'>
                 <div className='col s10 push-s1 m5' data-aos='fade-up'>
                    <a className='width-100' href='https://kaiwei.carbonmade.com/projects/5855524' target='_blank'>
                        <img className='thumbnail thumbnail-light' src={require('./src/pokecraft_thumbnail.png')}/>
                    </a>
                </div>
                <div className='col s10 push-s1 m5' data-aos='fade-up' data-aos-delay={300}>
                    <a className='width-100' href='http://www.imlc.io/apps' target='_blank'>
                        <img className='thumbnail thumbnail-light' src={require('./src/imlc_thumbnail.png')}/>
                    </a>
                </div>
            </div>

            <div className='row'>
                <div className='col s10 push-s1 m5' data-aos='fade-up'>
                    <a className='width-100' href='https://kaiwei.carbonmade.com/projects/5886152' target='_blank'>
                        <img className='thumbnail thumbnail-light' src={require('./src/latex_thumbnail.png')}/>
                    </a>
                </div>
               
                <div className='col s10 push-s1 m5' data-aos='fade-up' data-aos-delay={300}>
                    <a className='width-100' href='https://kaiwei.carbonmade.com/projects/5886319' target='_blank'>
                        <img className='thumbnail thumbnail-light' src={require('./src/piano_thumbnail.png')}/>
                    </a>
                </div>
            </div>


        <div style={{display: 'none'}}>
            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='https://kaiwei.carbonmade.com/projects/5886319' target='_blank'>
                    <img className='thumbnail thumbnail-light' src={require('./src/piano_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>Gamified Piano Trainer</div>
                    <div className='text'>
                        <p>Interaction Design</p>
                        <p>Arduino</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='https://kaiwei.carbonmade.com/projects/5886152' target='_blank'>
                    <img className='thumbnail thumbnail-light' src={require('./src/latex_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>LaTeX Transformer</div>
                    <div className='text'>
                        <p>Machine Learning</p>
                        <p>Image Processing</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
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

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6' href='https://kaiwei.carbonmade.com/projects/5855524' target='_blank'>
                    <img className='thumbnail thumbnail-light' src={require('./src/pokecraft_thumbnail.png')}/>
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>PokeCraft</div>
                    <div className='text'>
                        <p>Game Design</p>
                        <p>Unity</p>
                    </div>
                </div>
            </div>
        </div>

            <div className='row' data-aos="fade-up">
                <div className='col s10 push-s1 m12 title margin-top-page-start'>
                    Kaiwei.Design and Me &nbsp;
                    <img className='emoji-big' src={require('./src/emoji_30.svg')}/>
                </div>
            </div>

            <div className='row' data-aos="fade-up">
                <div className='col s10 push-s1 m8 xl6 text'>
                    <p>
                        I have been crafting kaiwei.design with ReactJS. This site itself has been a challenging
                        and rewarding web design project. 
                    </p>
                    <p>
                        Here I have the chance to sit down, collect the pieces, and document my journey as a designer. 
                        Kaiwei.design will always be under construction and I am enjoying every bit of the process.
                    </p>
                    <p>
                        I am open for job opportunities. If you are looking for a designer with skill, passion, and versatility, <span className='work-email-link'><a href='mailto:wangkw@gatech.edu' style={{color: '#fac466', fontWeight: '600'}}>let's talk!</a></span>
                    </p>
                    <Waypoint
                      onEnter={()=>{$('.work-email-link').addClass('text-reveal')}}
                      onLeave={()=>{$('.work-email-link').removeClass('text-reveal')}}
                    />
                </div>
            </div>

             <div className='row margin-top-2'>
                 <div className='col s10 push-s1 m8 xl6 text'>
                    <p style={{fontSize: '1rem'}}>
                        <span style={{opacity: '0.8', display: 'none'}}>Copyright</span>  <span style={{opacity: '0.8'}}>Design & Code by Kaiwei Wang</span> <span style={{color: '#fac466', fontWeight: 'bold'}}>©</span> <span style={{opacity: '0.8'}}>2018</span>
                    </p>
                </div>
            </div>


    		
    	</div>
    </div>
    )
  }
}