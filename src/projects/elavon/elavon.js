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
import './elavon.css';
import AOS from 'aos'; 
import '../../../node_modules/aos/dist/aos.css'; 
import Headroom from 'react-headroom'
import Lightbox from "react-image-lightbox"

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


class Elavon extends Component {
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
			<div id='elavon-page' className='project-page'>
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
			                <a className='text-link' href='#/work/misc'>
				                U P  &nbsp; N E X T : &nbsp; M I S C.
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
			        <ScrollLink activeClass="scroll-active" to="What I Did" spy={true} smooth={false} offset={-100} >
			          <span className='label'>What I Did</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="What I Learned" spy={true} smooth={false} offset={-100}>
			          <span className='label'>What I Learned</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="recommendation" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Recommendation</span><span className='circle'></span>
			        </ScrollLink>


			        <a onClick={this.scrollToTop}>Back to Top</a>

		        </div>

		        <Element name="banner" className="element banner-container">
		        	<div className='banner-container-inner container-center-inside banner-img-container'>
		        		<Img className='banner-img' src={require('./src/banner@1x.jpg')} loader={loader} />
		        	</div>
		        	<div className='banner-container-inner container-center-inside banner-text-container'>
		        		<div className='banner-text' style={{display:'none'}}>
			          	<div className='title-and-logo'>
				          	<h1 data-aos='fade-up' data-aos-duration={600}>Reco</h1>
			          	</div>
			          	<p data-aos='fade-up' data-aos-duration={600} data-aos-delay={200}>celebrating empathy.</p>
			          </div>
		        	</div>

		          
		         
		        </Element>

		        <Element name="info" className="element info-container margin-top-2">
		          <div className='row'>
		          	<p className='col s5 label'>Role</p>
		          	<p className='col s7 content'>
		          		UX Design Intern
		          	</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Tool</p>
		          	<p className='col s7 content'>Axure <br/> Sketch<br/> UserTesting.com</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Duration</p>
		          	<p className='col s7 content'>2017.5.15 - 2017.8.4</p>
		          </div>
		        </Element>

		        <Element name='overview' data-aos="fade-up" >
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- A Summer about Learning and Growing -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
							<p>
									<Img className='width-100 container-center-inside' src={require('./src/welcome.jpg')} loader={loader}/>
								</p>
								<p className='margin-top-3'>
									During Summer 2017, I worked as a UX design intern at <a href="https://www.elavon.com/index.html" target='_blank'>Elavon, Inc</a>. 
									Due to confidentiality concerns, I could not showcase my work in full here, but I want to document what I learned working 
									on a real product with industry designers and stakeholders.
								</p>
								
							</div>
						</div>

						

						
					</div>


				</Element>

				<Element name='What I Did' data-aos="fade-up" >
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- What I Did -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='left-vertical-line key-word margin-top-3'>
				        			Design Help Center for <a href="https://play.google.com/store/apps/details?id=com.elavon.discovery.convergemobile" target='_blank'>Converge</a>
				        		</p>
				        		<p>
				        			After being introduced to the current customer journey of Converge, I spotted the pain points in both the onboarding and 
				        			help seeking process, and decided to take on the job of leading the design of Converge Help Center. 
				        		</p>

				        		<p className='left-vertical-line key-word margin-top-3'>
				        			Initiate and Lead Design Sessions
				        		</p>
				        		<p>
				        			I was not afraid of calling fellow designers and stakeholders together and initiate design sessions when needed. 
				        		</p>
				        		<p>
									<Img className='width-100 container-center-inside' src={require('./src/design_session.jpg')} loader={loader}/>
								</p>
								<p>
									I identified information architecture as the key to designing a content-management system like help center. 
									In order to transfer the user from the cellphone call center to the help center website, I also needed to 
									understand how the customers approached the help seeking process. So I initiated a design session to discuss the 
									information architecture of the help center.
								</p>

								<p className='left-vertical-line key-word margin-top-3'>
				        			Contextual Inquiry at Local Merchant Store
				        		</p>
				        		<p>
				        			I was lucky to be sent to a local merchant store to see how the staff there were using Converge. I was amazed by 
				        			how some usability issues were only possible to be spotted in a contextual setting. For example, the time gap between 
				        			two customers there were often just enough to log out the merchant automatically. That observation resulted in a succesful 
				        			re-design of the auto-logout mechanism.
				        		</p>

				        		<p className='left-vertical-line key-word margin-top-3'>
				        			Participate in Daily Agile/Scrum Meeting
				        		</p>
				        		<p>
				        			I took part in daily scrum meeting with fellow designers, developers, and the PM. It was in those meetings that I pitched my 
				        			crazy ideas to the team and made sure my design was interpretated well by the developers. What a rewarding and inspiring experience!
				        		</p>
							</div>
						</div>	
					</div>
				</Element>

				<Element name='What I Learned' data-aos="fade-up" >
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- What I Learned -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p className='left-vertical-line key-word margin-top-3'>
				        			UX-ers Fought Their Way
				        		</p>
				        		<p>
				        			One of the most enjoyable parts of my internship was the bi-weekly chat with my manager <a href='https://www.linkedin.com/in/uxkaizen/' target='_blank'>Frank Stanton</a>. He shared his experience 
				        			in his ealier years, especially how he and his fellow UX pioneers fought for UX design's position in the product cycle. It made me 
				        			so proud to be in this industry.
				        		</p>

				        		<p className='left-vertical-line key-word margin-top-3'>
				        			Communicate, Communicate, Communicate
				        		</p>
				        		<p>
				        			Ecommerce was a brand new domain for me, and all those design constraints and compliances seemed overwhelming. I could not get onboard so quickly without communicating with my coworkers. 
				        			In an environment where no one would slow down, I had to catch up by asking.
				        		</p>
								<p className='left-vertical-line key-word margin-top-3'>
				        			Creativity Comes from an Open Mind
				        		</p>
				        		<p>
				        			I have always enjoyed inter-disciplinary collaboration, and the internship was full of that. Many times my design 
				        			was inspired by unintentional comments from developers, marketing professionals, and other stakeholders. I did not 
				        			sit in my own seat and cover my ears. Instead, I leanred to open up my mind and embraced inspirations from everyone around me.
				        		</p>

							</div>
						</div>	
					</div>
				</Element>

				<Element name='recommendation'>
					<div className='my-container'>
					<div className='row'>
					<div className='col s12'>
						<p>
									<Img className='width-100 container-center-inside margin-top-3' src={require('./src/recommendation.png')} loader={loader}/>
								</p>

								<p>
									<Img className='width-100 container-center-inside margin-top-2' src={require('./src/team.jpg')} loader={loader}/>
								</p>
								</div>
					</div>
					</div>
				</Element>

				


				<div style={{height: '100px'}}>
				</div>

		       

		        

	        	


			</div>
		)
	}
}

export default Elavon