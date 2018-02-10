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
import './rostery.css';
import AOS from 'aos'; 
import '../../../node_modules/aos/dist/aos.css'; 
import Headroom from 'react-headroom'
import Lightbox from "react-image-lightbox"
import ReactPlayer from 'react-player'

import Img from 'react-image'

var Scroll  = require('react-scroll');

var ScrollLink = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

const emptyStack = {
	isOpen : false,
	imgIndex : 0,
	imgCounter : 0,
	images : []
}

const loader = React.createElement('img', { className: 'loader', src: require('../src/loader.svg') })


class Rostery extends Component {
	constructor(props, context) { 
		console.log('construct')
		super(props, context); 
		this.state = {
			isOpen : false,
			imgIndex : 0,
			imgCounter : 0,
			images : [],
			passwordClass : 'p-show',
			contentStyle : {
				display: 'none'
			}
		}
		AOS.init({
	        once: false,
	        duration: 300
     	}); 
	} 

	componentDidMount() {
	 
	    scrollSpy.update();


	 
	  }

	  scrollToTop() {
	    scroll.scrollToTop();
	  }


	componentWillReceiveProps(nextProps) {
		console.log('will receive props')
		AOS.refresh();
	}

	checkPassword() {
		if ($('#password').val() === 'googledesign2018') {
			this.setState({
				contentStyle : {
					display: 'block'
				},
				passwordClass: 'p-hide'
			})
		}
	}



	render() {
		const { isOpen, imgIndex, imgCounter, images} = this.state;
		return (
			<div id='rostery-page' className='project-page'>
				{isOpen && (
		          <Lightbox
		            mainSrc={images[imgIndex]}
		            nextSrc={images[(imgIndex + 1) % images.length]}
		            prevSrc={images[(imgIndex + images.length - 1) % images.length]}
		            onCloseRequest={() => this.setState({ isOpen: false })}
		            onMovePrevRequest={() =>
		              this.setState({
		                imgIndex: (imgIndex + images.length - 1) % images.length
		              })}
		            onMoveNextRequest={() =>
		              this.setState({
		                imgIndex: (imgIndex + 1) % images.length
		              })}
		          />
		        )}

		        <div className={'password-container ' + this.state.passwordClass}>
		        	<div className='password my-container'>
			        	<div className="row">
					        <div className="input-field col s12">
					          <input id="password" type="password" className="validate"/>
					          <label htmlFor="password">Password</label>
					        </div>
				      </div>

				      <div className="row container-center-inside">
					        <a onClick={this.checkPassword.bind(this)} className="waves-effect waves-light btn password-btn">SUBMIT</a>
				      </div>

				      <div className="row">
					        <div className="col s12 container-center-inside">
					          <p>
					          	<a href='mailto:wangkw@gatech.edu' className='emphasis-new'>Send a request</a> to view this project.
					          </p>
					        </div>
				      </div>

				      </div>
		        </div>
				<Headroom disableInlineStyles={true}>
		            <div className='project-navbar'>

		            <div className='nav-container-outer'>
		            	<div className='back-container'>
			                <a className='back-wrapper' href='#/work'>
			                        <img className='back-arrow' src={require('./src/back_arrow.svg')}/>
			                </a>
			                <a className='text-link' href='#/work/taptile'>
				                U P  &nbsp; N E X T : &nbsp; T A P T I L E
				            </a>
			              </div>
		              </div>

			          <div className='nav-container-outer'>
		                  <div className='container name-container'>
		                    <Link id='nav-name' className='name' to={{
		                        pathname: '/',
		                        state: { toIntro: true }
		                      }}
		                      onMouseEnter={(e)=>{
		                        $(e.target).addClass("text-reveal"); 
		                      }}
		                      onMouseOut={(e)=>{
		                        $(e.target).removeClass("text-reveal"); 
		                      }}
		                    >
		                      K A I W E I &nbsp; W A N G
		                    </Link>
		                  </div>
	                </div>

		              <div className='project-nav-background'/>

		              <a className='text-link' href='#/work'>
		                W O R K
		              </a>
		              <a className='text-link' href='#/'>
		                H O M E
		              </a>
		              <a className='text-link' href='#/playground'>
		                P L A Y G R O U N D
		              </a>
		            </div>
		        </Headroom>
				<div className='progress-container progress-responsive-position' style={this.state.contentStyle}>
					<ScrollLink activeClass="scroll-active" to="overview" spy={true} smooth={false} offset={-100} >
			          <span className='label'>Overview</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="research" spy={true} smooth={false} offset={-100} >
			          <span className='label'>Research</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="finding" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Findings</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="proposal" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Proposal</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="story-1" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Story One</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="story-2a" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Story Two - A</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="story-2b" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Story Two - B</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="story-3" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Story Three</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="evaluation" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Evaluationn</span><span className='circle'></span>
			        </ScrollLink>
			         <ScrollLink activeClass="scroll-active" to="details" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Details</span><span className='circle'></span>
			        </ScrollLink>
			         <ScrollLink activeClass="scroll-active" to="reflection" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Reflection</span><span className='circle'></span>
			        </ScrollLink>
			        <a onClick={this.scrollToTop}>Back to Top</a>

		        </div>

		        <Element name="banner" className="element banner-container" >
		        	<div className='banner-container-inner container-center-inside banner-img-container'>
		        		<Img className='banner-img' src={require('./src/banner.jpg')} loader={loader} />
		        	</div>
		        	<div className='banner-container-inner container-center-inside banner-text-container'>
		        		<div className='banner-text' style={{display:'none'}}>
			          	<div className='title-and-logo'>
				          	<h1 data-aos='fade-up' data-aos-duration={600}>Reco</h1>
			          	</div>
			          	<p data-aos='fade-up' data-aos-duration={600} data-aos-delay={200}>celebrating empathy.</p>
			          </div>
		        	</div>
		        	<div className='banner-container-inner container-center-horizontal' style={{display:'none'}}>

			        		<a className='link-to-project'  target='_blank'>
				        		Design for Good
				        	</a>
		        	</div>
		          
		         
		        </Element>

		        <Element name="info" className="element info-container margin-top-2" style={this.state.contentStyle}>
		          <div className='row'>
		          	<p className='col s5 label'>Role</p>
		          	<p className='col s7 content'>
		          		Interaction Designer (Individual Design Exercise)
		          	</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Tool</p>
		          	<p className='col s7 content'>Pen & Paper <br/> Sketch<br/> Marvel<br/> Principle</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Duration</p>
		          	<p className='col s7 content'>02/02/2018 - 02/09/2018</p>
		          </div>
		        </Element>

		        <Element name='overview' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>Matching names with faces can be fun and easy.</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
									At the beginning of the school year, teachers are challenged to remember the students' faces and names. It is 
									often overwhelming and frustrating.
								</p>
								<p>
									<span className='key-word'>Rostery</span> solves this problem with fun, simplicity, and flexibility in different contexts.
								</p>
							</div>
						</div>

						<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>01. <br/></span>
			        				In <span className='key-word'>Rostery</span>, classes and sections are managed in a simple and clear way.
			        			</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/home-to-roster.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6 push-l6'>
			        			<p className='scenario'>
			        				<span className='number'>02. <br/></span>
			        				Meaningful gamification is utilized to make memorization a fun process.
			        			</p>
			        		</div>
			        		<div className='col s12 l5 pull-l6  container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/bence-correct.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>03. <br/></span> 
			        				I also considered multiple use contexts and corresponding devices suitable in each.
			        			</p>
			        		</div>
			        	</div>
					</div>

					<div className='my-container-big'>
						<div className='row'>
			        		<div className='col s12'>
			        			<p>
			        				<Img     
										className='width-100'
		        						src={require('./src/contexts.jpg')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>
					</div>
				</Element>

				<Element name='oresearch' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Planning the Week -</h2>
						</div>
						
						
					</div>

					<div className='my-container-big'>
						<div className='row container-center-inside margin-top-3'>
							<p>
								<Img className='width-100' 
		        						src={require('./src/process.png')}
		        						loader={loader}
	        						/>
							</p>
						</div>
						
						
					</div>
				</Element>

				  <Element name='oresearch' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- User Research -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title'>
									Problem Scope & Target Audience
								</p>
								<p>
									<span className='key-word'>"Teacher"</span> was the subject in this design exercise. However, I realized that teachers of different 
									grades and settings have <span className='key-word'>implicit characteristics</span> that are not generalizable. In order to keep my scope clear, I decided to focus 
									on only <span className='key-word emphasis-new'>college teachers who teach on campus</span>, which I have easy access to. Some of their characteristics are
								</p>
								<p className='left-vertical-line'>
									College classes usually don't have fixed seats. Therefore, memorization based on seat position does not work.
								</p>
								<p className='left-vertical-line'>
									Teachers and students encounter with each other both in class and out of class(campus, office hour, etc.)
								</p>
							</div>
						</div>

						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title'>
									Interview & Affinity Mapping
								</p>
								<p>
									To quickly inquire the pain points and current solutions, I approached five Georgia Tech professors for a semi-structured interview. 
									The interview script can be viewed <a className='emphasis-newa' href='https://docs.google.com/document/d/1Zw2zwP-apvJcDwEiK44tZZkjdImbuYcGD60K8U4KOsw/edit?usp=sharing' target='_blank'>here</a>.
								</p>
								<p>
									<Img className='width-100' 
		        						src={require('./src/interview.jpg')}
		        						loader={loader}
	        						/>
								</p>
								<p>
									I coded the responses and analyzed it with an affinity diagram.
								</p>

							</div>
						</div>

						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title'>
									Existing Products
								</p>
								<p>
									My next step was to look at some of the existing products and see what pain points they were addressing. What I studied 
									include <a href='https://play.google.com/store/apps/details?id=com.ivystandard.facesnamesfree' target='_blank'> Names and Faces 
									Memory Lite</a> and <a href='https://play.google.com/store/apps/details?id=exodusinteractive.remembernames' target='_blank'>Remembering Names</a>. 
									One common drawback of these apps is that they don't provide a good onboarding process in the setting of a whole class of students. 
									Importing student one by one is too time-consuming.
								</p>

								<p>
									I was also inspired by volcabulary-improvement apps like <a href='https://play.google.com/store/apps/details?id=com.magoosh.gre.quiz.vocabulary' target='_blank'>Volcabulary Builder</a> where 
									repetition and gamification were used to enhance memory.
								</p>
							</div>
						</div>
					</div>
				</Element>


				  <Element name='finding' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Findings -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title container-center-inside'>
									A Three-Phase User Journey
								</p>
							</div>
						</div>
					</div>
					<div className='my-container-big'>
						<div className='row'>
							<div className='col s12'>
								<p>
									<Img className='width-100' 
		        						src={require('./src/journey.png')}
		        						loader={loader}
	        						/>
								</p>
							</div>
						</div>
					</div>

					<div className='my-container'>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title container-center-inside'>
									Two Contexts, Two Peronas
								</p>
								<p className='margin-top-3'>
									From the interviews, I also noticed two drastically different patterns of teaching styles and strategies for 
									memorization.
								</p>
							</div>
						</div>
					</div>
					<div className='my-container-big'>
						<div className='row'>
							<div className='col s12'>
								<p>
									<Img className='width-100' 
		        						src={require('./src/persona.png')}
		        						loader={loader}
	        						/>
								</p>
							</div>
						</div>
					</div>
				</Element>


				  <Element name='proposal' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Design Proposal -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title'>
									Deliverables
								</p>
								<p>
									I wanted to practice my storytelling skills by showing my design as stories of the above personas. Based on 
									the pain points spotted, the proposed stories are
								</p>
								<p className='left-vertical-line'>
									<span className='scenario'>Story One</span>: a registration process that is <span className='key-word'>easy and worry-free</span>
								</p>
								<p className='left-vertical-line'>
									<span className='scenario'>Story Two</span>: an out-of-class practice that is <span className='key-word'>fun and rewarding</span>
								</p>
								<p className='left-vertical-line'>
									<span className='scenario'>Story Three</span>: an in-class memory reinforcement process
								</p>

							</div>
						</div>

						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title'>
									Assumptions
								</p>
								<p className='left-vertical-line'>
									I imagine having the resource of a company like Google, and feel encouraged to be creative 
									when it comes to advanced features that involve <span className='key-word'>machine learning, computer vision, and voice assistant</span>.
								</p>
								<p className='left-vertical-line'>
									For this exercise, only <span className='key-word'>English</span> language is considered. I do realize that multiple-language support is important for 
									such an app to be internationally accessible.
								</p>
								<p className='left-vertical-line'>
									The app can establish API connection with <span className='key-word'>existing student portals</span> like Canvas or T-Square.
								</p>

							</div>
						</div>
					</div>
				</Element>




				<Element name='story-1' style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>Story One - Creating the Roster</h2>
						</div>
						<div className='row container-center-inside margin-top-2'>
							<p>
								It is an exciting new semester, and Professor Bruce decides to create a new roster for MATH 3001 Section B.
							</p>
						</div>

						<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>01. <br/></span> She opens up Rostery app on her phone and sees the home screen. 
			        			</p>
				        		<p className='left-vertical-line'>This is an overview of all the rosters she has, where each roster contains students in a section 
				        		of a class .</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/home.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>02.<br/></span> She sees the "Edit" icon and finds the "Create Roster" option there. 
			        			</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/create.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>03.<br/></span> Prof. Bruce has always found it hard to remember the pronunciation of certain names. She checked “Pronunciation” for the students to submit their names’ phonetic pronunciations.
			        			</p>
			        			<p className='left-vertical-line'>
			        				For this screen I imagined an API connection between Rostery and the exiting student-portal(ex.<a className='emphasis-new' href='http://canvas.gatech.edu/' target='_blank'>Canvas</a>).
			        			</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100 shadow' 
		        						src={require('./src/create-edited.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>04.<br/></span> Prof. Bruce clicks "Create Roster" and puts away her phone, feeling relaxed because 
			        				she does not need to create and print out a paper roster like last year.
			        			</p>
			        		</div>
			        	</div>

						

						
					</div>


				</Element>

				<Element name='story-2a' style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>Story Two - Professor Bruce's Out-of-Class Practice</h2>
						</div>
						<div className='row container-center-inside margin-top-2'>
							<p>
								Professor Bruce is waiting in line at Starbucks. To kill the time, she decides to practice matching students’ names with faces on her phone. 
							</p>
						</div>

						<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>01. <br/></span> She opens up Rostery app on her phone and enters the roster she wants to work on.
			        			</p>
				        		<p className='left-vertical-line'>"Memory Progress" is a calculated score indicating how well the user remembers names and faces in this roster.</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/home-to-roster.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>02. <br/></span> Prof. Bruce notices that there are three students on the top of the list.
			        			</p>
				        		<p className='left-vertical-line'>This is a <span className='emphasis-new'>recommendation system based on machine learning </span> of
				        		<br/><br/>
				        		<span className='left-vertical-line'><span>the user's previous difficulty in remembering certain types of names/faces</span></span>
				        		<br/><br/>
				        		<span className='left-vertical-line'>the user's previous difficulty in pronouncing certain types of names</span>
				        		<br/><br/>
				        		This feature was inspired by the user's pain point in remembering students of certain origin/race.
				        		</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100 shadow' 
		        						src={require('./src/roster--highlighted.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3' >
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>03. <br/></span> She moves on to start the practice session by clicking on "PRACTICE".
			        			</p>
				        		<p style={{display:'none'}} className='left-vertical-line'>Each practice session contains about 5 students' names and faces.</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/roster-to-practice.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>04.<br/></span> 
			        				This is the first time Prof. Bruce saw Garima, and she finds “Garima wears Glasses” helpful for memorization. She then clicks “Next”. 
			        			</p>
			        			<p className='left-vertical-line'>This is a feature based on <span className='emphasis-new'>computer vision </span> that extracts physical 
			        			attributes that are memorable to the user.
				        		</p>		
			        		</div>	        	
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100 shadow' 
		        						src={require('./src/practice-1.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>05.<br/></span> 
			        				"OK next. Hmmm, I am not sure if this is Bence or Blaise.
			        			</p>		
			        		</div>	        	
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100 shadow' 
		        						src={require('./src/practice-2.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>06. <br/></span> “Oh snap. It was Bence who gave that funny answer! I should remember that.”
			        			</p>
				        		<p style={{display:'none'}} className='left-vertical-line'>Each practice session contains about 5 students' names and faces.</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/bence-incorrect.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario container-center-inside'>
			        				 Several practice questions later...
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>07. <br/></span> “I need a hint for this one... Garima wears glasses! Easy!”
			        			</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/garima-correct.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>08. <br/></span> “I'll never get this one wrong!”
			        			</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/bence-correct.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>09. <br/></span> Prof. Bruce finishes the practice session and gladly sees that she made progress.
			        			</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/score.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				Wireframe
			        			</p>
			        			<p>
			        				For the above story I created a wireframe. Please click on the image below to see the full wireframe.
			        			</p>
			        			<p>
			        				<Img className='width-100 shadow expandable' 
		        						onLoad={()=>{
		        							images.push(require('./src/flow-big.png'))
		        							this.setState({
		        								images : images,
		        								flow_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.flow_index
		        							})
		        						}}
		        						src={require('./src/flow-small.png')}
		        						loader={loader}
	        						/>
			        			</p>

			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				Prototype
			        			</p>
			        			<p>
			        				You can try out the process in the <a href='https://marvelapp.com/2cegcac' target='_blank' className='key-word emphasis-new'> interactive prototype</a> built with Marvel.
			        			</p>
			        		</div>
			        	</div>


		        	</div>
	        	</Element>

	        	<Element name='story-2b' style={this.state.contentStyle} >
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>Story Two - Alternative Version</h2>
						</div>
						<div className='row container-center-inside margin-top-3'>
							<Img
		        						src={require('./src/voice-icon.png')}
		        						loader={loader}
	        						/>
						</div>
						<div className='row container-center-inside margin-top-2'>
							<p>
								While I was exploring how to make the practice session more <span className='key-word'>conversational and casual</span>, Google Assistant came 
								into my mind. Here are two example flows of how Prof. Bruce can interact with Rostery without opening the app.
							</p>
						</div>

						<div className='row margin-top-3'>
							<div className='col s12 m5'>
								<Img     
										className='width-100'
		        						src={require('./src/voice-1.png')}
		        						loader={loader}
	        						/>
							</div>
							<div className='col s12 m5 push-m2'>
								<Img
										className='width-100'
		        						src={require('./src/voice-2.png')}
		        						loader={loader}
	        						/>
							</div>
						</div>
					</div>
				</Element>



			
				<Element name='story-3' style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>Story Three - Dr Chen's in-Class Reinforcement</h2>
						</div>
						<div className='row container-center-inside margin-top-2'>
							<p>
								In the chemistry class, Dr. Chen divides the students into groups for discussion. With a tablet in hand, he walks around the classroom to see how the students are doing and answer their questions.
							</p>
						</div>

						<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>01. <br/></span> 
			        				Dr. Chen opens Rostery app and enters the roster for the chemistry class.
			        			</p>
			        		</div>
			        		<div className='col s12'>
			        			<p>
			        				<Img     
										className='width-100 shadow'
		        						src={require('./src/roster--tablet.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        				<p className='scenario'>When Dr. Chen walks by Garima, she stopped him.</p>
									<p className='student'>Garima: “Excuse me Dr. Chen can I ask you a question?”</p>
									<p className='scenario'>Dr. Chen: “Of course!”</p>
									<p className='student'>Garima: “I visited your website and saw you had a focus on organic chemistry. Can I borrow some organic chemistry books from you?”</p>
									<p className='scenario'>Dr. Chen: “You sure can. Can you remind me of your name?”</p>
									<p className='student'>Garima: “It’s Garima!”</p>
									<p className='scenario'>Dr. Chen: “Thanks Garima. You can come to my office hours and we’ll see what books you like.”</p>
									<p className='student'>Garima: “Thank you Dr. Chen!”</p>

			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>02. <br/></span> 
			        				Dr.Chen is impressed by Garima’s interest in chemistry and decides to add that to her information. He clicks on the "Search" 
			        				button and starts typing her name.
			        			</p>
			        		</div>
			        		<div className='col s12'>
			        			<p>
			        				<Img     
										className='width-100 shadow'
		        						src={require('./src/roster--tablet-input.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>03. <br/></span> 
			        				Garima's information is presented to him. He then clicks the "ADD" button.
			        			</p>
			        		</div>
			        		<div className='col s12'>
			        			<p>
			        				<Img     
										className='width-100 shadow'
		        						src={require('./src/student.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>04. <br/></span> 
			        				Dr. Chen describes the conversation briefly.
			        			</p>
			        		</div>
			        		<div className='col s12'>
			        			<p>
			        				<Img     
										className='width-100 shadow'
		        						src={require('./src/student-add--typing.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>05. <br/></span> 
			        				He is glad to see that one more association is added to Garima, and he is more confident that 
			        				he will not forget her name next time they meet.
			        			</p>
			        		</div>
			        		<div className='col s12'>
			        			<p>
			        				<Img     
										className='width-100 shadow'
		        						src={require('./src/student--added.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>
		        	</div>
	        	</Element>

	        	<Element name='evaluation' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Evaluation -</h2>
						</div>

						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title'>
			        				Overall Feedback
			        			</p>
								<p>
									Due to time contraint, I could not conduct full usability testing for Rostery. However I let two of 
									the interview participants try out the prototype and they reacted very positively.

								</p>
								<p className='left-vertical-line'>
									The pratice game feels fun and rewarding. More importantly, it effiently simulates the process of 
									meeting a student one-on-one, which the teacher does not get to do without Rostery. That 
									really helps the teacher achieve unaided accuracy.
								</p>
								<p className='left-vertical-line'>
									The registration process is really simple and efficient, <span className='scenario'>"so much better than printing out the roster myself."</span>
								</p>
								<p className='left-vertical-line'>
									The voice assistant concept is very interesting and the participant would love to see a more fleshed-out design.
								</p>
								

							</div>
						</div>

						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title'>
			        				One UI Tweak
			        			</p>
							</div>
						</div>
						<div className='row'>
							<div className='col s12 m5'>
							<p>
										Before
									</p>
								<Img     
										className='width-100'
		        						src={require('./src/button-position-before.png')}
		        						loader={loader}
	        						/>
							</div>
							<div className='col s12 m5 push-m2'>
							<p>
										After
									</p>
								<Img
										className='width-100'
		        						src={require('./src/button-position-after.png')}
		        						loader={loader}
	        						/>
							</div>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
			        				In the roster view, I originally put the "Edit" functionality on the floating button, and the "Search" functionality on 
			        				the app bar, because it somehow felt "natural" to me (I was so wrong). A participant pointed out to me 
			        				that he would be using "Search" so much more frequently than "Edit" because 

			        			</p>
			        			<p className='left-vertical-line'>
			        				what he would do mostly in this page is to index a student and see/edit their information
			        			</p>
			        			<p className='left-vertical-line'>
			        				editing the the roster would seldom take place because it is taken care of in the registration functionality
			        			</p>
			        			<p>
			        				In order to increase the prominence of the more frequently used functionality, I switch their positions.
			        			</p>
							</div>
						</div>

					</div>
				</Element>



	        	 <Element name='details' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Design Details -</h2>
						</div>
						<div className='row margin-top-2'>
			        		<div className='col s12 l6'>
			        			<p className='title'>
			        				Keylines & Metrics
			        			</p>
			        			<p>
			        				Throughout the design process, I made sure the grid layout is
			        				consistent and that touch size of interactice components are big enough according 
			        				to Material guideline.
			        			</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img     
										className='width-100 shadow'
		        						src={require('./src/annotate.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title'>
									Meaningful Motion
								</p>
								

							</div>

							<div className='row margin-top-3'>
								<div className='col s12 m5'>
									<p>
										Shape transformation for transition within one question
									</p>
									<video autoPlay loop className='width-100 shadow' src={require('./src/within.mov')}/>
								</div>
								<div className='col s12 m5 push-m2'>
									<p>
										Card shifting for transition between two questions
									</p>
									<video autoPlay loop className='width-100 shadow' src={require('./src/between.mov')}/>
								</div>
							</div>

						</div>

						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='title'>
									Mood & Visual
								</p>
								

							</div>

							<div className='row margin-top-3'>
								<div className='col s12'>
									<p>
										When deciding the overall style of the app, I kept in mind the target user (teacher) and the context (college campus), 
										and decided on the mood keyword <span className='scenario'> calm and youthful</span>.
									</p>
								</div>
							</div>

						</div>
					</div>
					<div className='my-container-big'>
						<div className='row'>
							<div className='col s12'>
								<p>
									<Img     
										className='width-100'
		        						src={require('./src/visual.jpg')}
		        						loader={loader}
	        						/>
								</p>
							</div>

						</div>
					</div>
				</Element>

				 

				 <Element name='future' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Future Effort -</h2>
						</div>

						<div className='row' data-aos='fade-up'>
			        		<div className='col s12 margin-top-2'>
			        			<p>
			        				I had so much fun creating Rostery and I am pround of it. However, there is much more to be done to make Rostery better.
			        			</p>
			        			<p className='left-vertical-line key-word margin-top-3'>
				        			More Complete User Research & Literature Review
				        		</p>
				        		<p>
				        			To understand the mechanism of matching faces with names, I need to know about the cognitive model behind memorization and face recognition. 

				        		</p>
				        		<p className='container-center-inside'>
				        			<Img     
										className='width-100 img-max-width-2'
		        						src={require('./src/curve.png')}
		        						loader={loader}
	        						/>
				        		</p>
				        		<p className='left-vertical-line key-word margin-top-3'>
				        			Underrepresented User Group
				        		</p>
				        		<p>
				        			For elderly teachers, default scale of text/images on touch screen can be hard to read. Accessible design for such underrepresented user group should be done.
				        		</p>
		        			</div>
	        			</div>
					</div>
				</Element>

				<Element name='reflection' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Reflection -</h2>
							

						
						</div>


						<div className='row' data-aos='fade-up'>
			        		<div className='col s12 margin-top-2'>
			        			<p>
								One of the things I learned from this exercise is the importance of considering <span className='key-word'>different contexts and user environments</span>. Due to many possible reasons(life style, habit, etc.), 
								one user can have drastically different needs than another user, and one user can have different needs at different times. 
							</p>
							</div>


					</div>
					</div>
				</Element>

				<Element name='reflection' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- The End -</h2>
						</div>


					
					</div>
				</Element>



<p className='end-image container-center-inside' style={this.state.contentStyle}>
			        			<Img className='width-100' src={require('./src/rostery-logo.png')} loader={loader} />
			        		</p>

		       



	        	


			</div>
		)
	}
}

export default Rostery