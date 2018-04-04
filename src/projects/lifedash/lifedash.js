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
import './lifedash.css';
import AOS from 'aos'; 
import '../../../node_modules/aos/dist/aos.css'; 
import Headroom from 'react-headroom'
import Lightbox from "react-image-lightbox"

import Footer from '../Components/footer/footer'

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

const footer = {
	leftProjectName: 'Rostery',
	leftUrl: '#/work/rostery',
	leftBgColor: 'black',
	leftTextColor: 'white',
	rightProjectName: 'TapTile',
	rightUrl: '#/work/taptile',
	rightBgColor: 'black',
	rightTextColor: 'white'
}

const loader = React.createElement('img', { className: 'loader', src: require('../src/loader.svg') })


class LifeDash extends Component {
	constructor(props, context) { 
		console.log('construct')
		super(props, context); 
		this.state = {
			isOpen : false,
			imgIndex : 0,
			imgCounter : 0,
			images : []
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



	render() {
		const { isOpen, imgIndex, imgCounter, images} = this.state;
		return (
			<div id='lifedash-page' className='project-page'>
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
				<div className='progress-container progress-responsive-position'>
					<ScrollLink activeClass="scroll-active" to="overview" spy={true} smooth={false} offset={-100} >
			          <span className='label'>Overview</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="understanding" spy={true} smooth={false} offset={-100} >
			          <span className='label'>Understanding</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="features" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Features</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="IA" spy={true} smooth={false} offset={-100}>
			          <span className='label'>IA</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="design" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Design</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="prototype" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Prototype</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="testing" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Evaluation</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="reflection" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Reflection</span><span className='circle'></span>
			        </ScrollLink>
			        <a onClick={this.scrollToTop}>Back to Top</a>

		        </div>

		        <Element name="banner" className="element banner-container">
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
		        	<div className='banner-container-inner container-center-horizontal'>

			        		<a className='link-to-project'  target='_blank'>
				        		Design for Good
				        	</a>
		        	</div>
		          
		         
		        </Element>

		        <Element name="info" className="element info-container margin-top-2">
		          <div className='row'>
		          	<p className='col s5 label'>Role</p>
		          	<p className='col s7 content'>
		          		UX Designer
		          	</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Tool</p>
		          	<p className='col s7 content'>Pen & Paper <br/> Sketch<br/> Marvel<br/> Framer Studio</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Duration</p>
		          	<p className='col s7 content'>02/2018</p>
		          </div>
		        </Element>

		        <Element name='overview' data-aos="fade-up" >
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- We Can Get through the Disaster Together -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
									It is always a tragedy when a large-scale disaster hits the city. What's worse, the struggle does not 
									end after the first hit. For a city like San Francisco, the bay area is home to about 7 million residents and evacuation 
									can take days if not weeks.
								</p>
								<p>
									<span className='key-word'>LifeDash.com</span> is the solution to meet people's basic needs in a situation like this and help them endure 
									through the disaster.
								</p>
							</div>
						</div>

						<div className='row'>
							<div className='col s12'>
									<p className='left-vertical-line'>
										Critical information is centralized and categorized on the dashboard. More importantly, information 
										is authentic so that the user is free of rumors in an already unsettling situation.
									</p>
									<p>
										<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/dashboard--folded.png'))
		        							this.setState({
		        								images : images,
		        								dashboard_1_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        							
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.dashboard_1_index
		        							})
		        						}}
		        						src={require('./src/dashboard--folded.png')}
		        						loader={loader}
	        						/>
									</p>
							</div>

							<div className='col s12 margin-top-2'>
									<p className='left-vertical-line'>
										A resource map is provided to help the user find resources they need and view transportation methods avaible.
									</p>
									<p>
										<video loop autoPlay className='width-100' src={require('./src/map.mov')}>
										</video>
									</p>
							</div>

							<div className='col s12 margin-top-2'>
									<p className='left-vertical-line'>
										LifeDash also features delightful micro-interactions and feedback to create a positive emotion response.
									</p>
									<p>
										<video loop autoPlay className='width-100' src={require('./src/feedback.mov')}>
										</video>
									</p>
							</div>
						</div>

						
					</div>


				</Element>

				<Element name="understanding" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Understanding -</h2>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p>
									Due to the time constraint, I was not able to conduct full research for this design exercise. An <a className='emphasis-new key-word' href='https://docs.google.com/document/d/1sIKTvwWnAu0K1V55DwgjUn_pNYQWB-anOI8pCQJIErs/edit?usp=sharing' target='_blank'>Initial Research Plan</a> was 
									created to inform future effort.
								</p>
							</div>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p className='title'>
									Scenario
								</p>
								<p>
									My first step was to provide my design with a context. To do that, I came up with the following scenario
								</p>
								<p className='left-vertical-line'>
									At 3:16 PM on March 21th, a large-scale hurricane hit the south west section of the United States. San Francisco was one of the most affected cities, especially the bay area. Huge flood swept from Fort Point all the way down to Lake Merced, destroying buildings and facilities. Over 7 million residents were affected. The government and other organizations are currently evacuating the residents to safer inland cities, but the process is going to take days if not weeks. What’s worse, <span className='key-word'>there is tsunami threat at multiple locations near the bay area</span>.
									<br/><br/>Julia, 41, a single mother of two sons, Tom and Alex, lived on Portola Drive. When the first wave occurred with no warning, Julia was at work and the two boys were both in school. The building she worked in was strong enough to stand the waves. Julia is safe and sound. Right now, several hours after the disaster, she and her coworkers are <span className='key-word'>in need of electricity and drinkable water</span>. Also, she has been dialing the numbers of her family who lives in the bay area but <span className='key-word'>no one has picked up</span>. All she has access to are a mobile phone (82% charged), a laptop (76% charged), and some Internet connection.
								</p>
							</div>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p className='title'>
									Target User Group & Persona
								</p>
								<p>
									The target user group is
								</p>
								<p className='left-vertical-line key-word'>
									residents in the affected area of a large-scale disaster who still have access to the Internet
								</p>
								<p>
									Based on the scenario and target user group, I created the following persona to keep in mind
								</p>
								<p className='container-center-inside margin-top-3'>
			        				<Img className='width-100' src={require('./src/persona-1.jpg')} loader={loader} />
			        			</p>
							</div>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p className='title'>
									Underrepresented Groups
								</p>
								<p>
									For a technology aiming at disaster relief, some minority groups are often underrepresented. 
									In fact, they need even more resources and information. Some of the groups I have considered include
								</p>
								<p className='left-vertical-line key-word margin-top-3'>
									The Elderly & The Disabled
								</p>
								<p>
									Older and/or disabled people often lack the physical ability to access the technology in an optimal way.
								</p>
								<p className='left-vertical-line key-word  margin-top-3'>
									Refugees & New Immigrants
								</p>
								<p>
									Refugees and new immigrants often lack the knowlegde of local language and local navigation. 
								</p>
								<p className='margin-top-3'>
									For this design exercise, I am aware of the above underrepresented groups. However, more in-depth understanding 
									of their needs should be studied through initial user research.
								</p>
							</div>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p className='title'>
									My Assumptions
								</p>
								<p className='left-vertical-line'>
									The user still has some access to the Internet via mobile phone and/or computer.
								</p>
								<p className='left-vertical-line'>
									The user is physically able to operate a mobile phone and/or computer.
								</p>
								<p className='left-vertical-line'>
									The user is familiar with navigating a web browser on a mobile phone or computer.
								</p>
								<p className='left-vertical-line'>
									The solution is operated by an official organization and all uploaded information is monitored and verified to ensure authenticity.
								</p>
								<p className='left-vertical-line'>
									The authenticity of the solution has already been established and the user trusts it.
								</p>
							</div>
						</div>
    			</div>
    			</Element>


    			<Element name="features" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Proposed Features -</h2>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p>
									With the initial understanding of the problem, I proposed the following features for a minimum viable product.
								</p>
								<p className='left-vertical-line key-word margin-top-3'>
									Provide official, updated, and authentic information regarding threats, supplies, and other announcements.
								</p>
								<p>
									Rationale: I actually experienced the 2008 5.12 Wenchuan Earthquake in Southern China. As a survivor, one of the biggest pain points was not being able to tell rumors from authentic announcements. Rumors like “huge aftershock will happen tomorrow in local area” would make everyone panic and run around. We lacked a system to provide centralized authentic information for us to rely on.
								</p>

								<p className='left-vertical-line key-word margin-top-3'>
									Provide a method for the user to reconnect with their loved ones. This feature includes two sub-features. First, the user is able to report their status to the system. Second, the user can search for the status of another person and get notified when their status is available in the system.
								</p>
								<p>
									Rationale: Post-disaster days are stressful and every bit of energy/resource is precious. Instead of trying to dial other people’s number non-stop to reconnect, the user needs a mechanism that is more energy-saving and worry-free.
								</p>

								<p className='left-vertical-line key-word margin-top-3'>
									Allow the user to share information on the post-disaster situation. Examples include injured individuals, unidentified individuals, and available resources.
								</p>
								<p>
									Rationale: Some people might not be able to use the system due to injure or no access to Internet/computer. In such situation, the system user can help by providing information on behalf of the injured. This is also to utilize the power of crowdsourcing to quickly establish a information system that can be useful to the mass. 
								</p>

								<p className='left-vertical-line key-word margin-top-3'>
									[Accessibility] Support multiple languages
								</p>
								<p>
									Rationale: According to <a href='https://statisticalatlas.com/place/California/San-Francisco/Languages' target='_blank'>Statistical Atlas</a> San Francisco is home to a great number of people whose primary language is not English. Therefore, the user should be able to select a language they are most comfortable with.
								</p>
							</div>
						</div>



    			</div>

    			</Element>

    			<Element name="IA" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Information Architecture -</h2>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p>
									With the features and content in mind, I moved onto coming up with a structure of the website.
								</p>
								<p>
									<Img className='width-100 expandable' 
		        						onLoad={()=>{
		        							images.push(require('./src/IA.png'))
		        							this.setState({
		        								images : images,
		        								IA_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        							
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.IA_index
		        							})
		        						}}
		        						src={require('./src/IA.png')}
		        						loader={loader}
	        						/>
								</p>

								<p>
									I then created the user flows for two of the most primary tasks in LifeDash.com.
								</p>

								<p>
									<Img className='width-100 expandable' 
		        						onLoad={()=>{
		        							images.push(require('./src/flow-1.png'))
		        							this.setState({
		        								images : images,
		        								flow_1_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        							
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.flow_1_index
		        							})
		        						}}
		        						src={require('./src/flow-1.png')}
		        						loader={loader}
	        						/>
								</p>

								<p>
									<Img className='width-100 expandable' 
		        						onLoad={()=>{
		        							images.push(require('./src/flow-2.png'))
		        							this.setState({
		        								images : images,
		        								flow_2_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        							
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.flow_2_index
		        							})
		        						}}
		        						src={require('./src/flow-2.png')}
		        						loader={loader}
	        						/>
								</p>


							</div>
						</div>



    			</div>

    			</Element>


    			<Element name="design" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Design -</h2>
						</div>


						<div className='row margin-top-2'>
							<div className='col s12'>
								<p className='title'>
									Sketching w/ Pen & Paper
								</p>
								<p>
									<Img className='width-100' 
		        						src={require('./src/sketch.jpg')}
		        						loader={loader}
	        						/>
								</p>
								<p>
									I kicked off the design by sketching out low-fidelity concepts on paper.
								</p>

							</div>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p className='title'>
									Annotated Wireframe
								</p>
								<p className='left-vertical-line key-word margin-top-2'>
									Screen One - Dashboard
								</p>
							</div>
						</div>
					</div>

					<div className='my-container-big'>
						<div className='row'>
							<div className='col s12'>

								<p className='container-center-inside'>
									<Img className='width-80 have-big' 
		        						onLoad={()=>{
			        							images.push(require('./src/dashboard_wireframe.png'))
			        							this.setState({
			        								images : images,
			        								dashboard_wireframe_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.dashboard_wireframe_index
			        							})
			        						}}
			        						src={require('./src/dashboard_wireframe.png')}
			        						loader={loader}
		        						/>
								</p>
							</div>
						</div>
					</div>

					<div className='my-container'>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='left-vertical-line'>
									A real-time notification feature is always available on the top section of the UI, making sure that 
									the user gets notified with critical announcements in time.
								</p>
								<p className='container-center-inside'>
									<video loop autoPlay className='width-80' src={require('./src/Realtime_Notification.mov')}/>
								</p>
							</div>
						</div>

						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='left-vertical-line'>
									A list is presented for a quick view of missing people. It is horizontally laid out to fit in 
									the card UI component. The user can always expand the card to get a full view.

								</p>
								<p className='container-center-inside'>
									<video loop autoPlay className='width-100' src={require('./src/scroll.mov')}/>
								</p>
							</div>
						</div>

						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='left-vertical-line'>
									The Help button can be expanded to quick links to major functionalities. There are two considerations here: 1. To promote the major functionalities. 2. To create a sense of being assisted for the user in a emotionally unsettling situation.

								</p>
								<p className='container-center-inside'>
									<video loop autoPlay className='width-100' src={require('./src/help.mov')}/>
								</p>

								<p className='left-vertical-line key-word margin-top-2'>
									Screen Two - Resource Map
								</p>
							</div>
						</div>
					</div>

					<div className='my-container-big'>
						<div className='row'>
							<div className='col s12'>

								<p className='container-center-inside'>
									<Img className='width-80 have-big' 
		        						onLoad={()=>{
			        							images.push(require('./src/map_wireframe.png'))
			        							this.setState({
			        								images : images,
			        								map_wireframe_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.map_wireframe_index
			        							})
			        						}}
			        						src={require('./src/map_wireframe.png')}
			        						loader={loader}
		        						/>
								</p>
							</div>
						</div>
					</div>

					<div className='my-container'>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='left-vertical-line'>
									The user can filter the locations of different types of resources and find out how to get there.
								</p>
								<p className='container-center-inside'>
									<video loop autoPlay className='width-100' src={require('./src/map.mov')}/>
								</p>
								<p className='left-vertical-line key-word margin-top-2'>
									Screen Three - Find Person
								</p>
							</div>
						</div>
					</div>

					<div className='my-container-big'>
						<div className='row'>
							<div className='col s12'>

								<p className='container-center-inside'>
									<Img className='width-90 have-big' 
		        						onLoad={()=>{
			        							images.push(require('./src/find_person_wireframe.jpg'))
			        							this.setState({
			        								images : images,
			        								find_person_wireframe_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.find_person_wireframe_index
			        							})
			        						}}
			        						src={require('./src/find_person_wireframe.jpg')}
			        						loader={loader}
		        						/>
								</p>
							</div>
						</div>
					</div>
					<div className='my-container'>
						<div className='row'>
							<div className='col s12'>
								<p className='left-vertical-line'>
									The forms in LifeDash.com features delightful micro-interactions and feedback to create a positive emotion response.
								</p>
								<p className='container-center-inside'>
									<video loop autoPlay className='width-100' src={require('./src/feedback.mov')}/>
								</p>
							</div>
						</div>
					</div>
				</Element>


				<Element name="prototype" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- The Prototype -</h2>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p>
									An interactive prototype built with Marvel is hosted <a className='emphasis-new key-word' href='https://marvelapp.com/2c0e892' target='_blank'>here</a>.
								</p>
							</div>
						</div>
					</div>
				</Element>

				<Element name="testing" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Usability Testing Plan -</h2>
						</div>

						<div className='row margin-top-2'>
							<div className='col s12'>
								<p>
									Due to time constraint I was not able to conduct a full usability testing with the initial prototype. I have 
									created a <a className='emphasis-new key-word' href='https://docs.google.com/document/d/1FziKuWemdPk4UbE-KkBIV7h2n5DffY4zjRJgz-3lN0U/edit?usp=sharing' target='_blank'>Usability Testing Plan</a> for potential future effort.
								</p>
							</div>
						</div>
					</div>
				</Element>

				<Element name="reflection" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Some Words to Myself -</h2>
						</div>

						<div className='row' data-aos='fade-up'>
			        		<div className='col s12 margin-top-2'>
			        			<p className='left-vertical-line key-word margin-top-3'>
				        			Design for Good
				        		</p>
				        		<p>
			        				When the two days are over and this exercise is "done", I did not want to end this project. It was through this 
			        				small project that I really felt the responsibility for a designer to make a positive impact to the world. "Design for good" is 
			        				so much easier said than done. In a tragic situation like this, a good design can save life, but a good design takes thorough consideration in not just vidual appeals, but also <span className='key-word'>accessibility, user environment, and the underrepresented user groups</span>.
			        			</p>
			        			<p>
			        				That's why I didn't want to stop where I did - I want to hear the survivors' stories and apply the empathy to every detail 
			        				of LifeDash.com. <span className='emphasis-new'>I want to thank this exercise for reminding me why I love doing what I do</span>.
			        			</p>

		        			</div>
	        			</div>

					
        			</div>



    			</Element>


				<img className='width-100' style={{display:'block'}}
		        	src={require('./src/wave.jpg')}
				
	        	/>

	        	


				<Footer footer={footer}/>
		       

		        

	        	


			</div>
		)
	}
}

export default LifeDash