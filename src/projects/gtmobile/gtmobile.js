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
	    scrollSpy.update();
	 
	  }

	  scrollToTop() {
	    scroll.scrollToTop();
	  }

	componentWillUnmount() {
		$("html, body").scrollTop(0)
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
		              <a href='#/work/mood'>
		                U P  N E X T :  M O o D
		              </a>
		            </div>
		        </Headroom>
				<div className='progress-container progress-responsive-position'>
					<ScrollLink activeClass="scroll-active" to="overview" smooth={true} offset={-100} >
			          <span className='label'>Overview</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="understanding" smooth={true} offset={-100} >
			          <span className='label'>Research</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="design" smooth={true} offset={-100}>
			          <span className='label'>Design</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="high-fidelity" smooth={true} offset={-100}>
			          <span className='label'>Prototype</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="guideline" smooth={true} offset={-100}>
			          <span className='label'>Visual</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="reflection" smooth={true} offset={-100}>
			          <span className='label'>Reflection</span><span className='circle'></span>
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
			        		<p className='left-vertical-line'>My effort was focused on making GT Mobile a platform that was usable, pleasant, and unified.</p>
		        		</div>
		        		<div className='col s12 l6 pull-l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-70 img-max-width-3 shadow' src={require('./src/homepage_shortened.gif')}/>
		        			</p>
		        		</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6'>
			        		<p className='left-vertical-line'>Previously disconnected apps are now re-designed to create a more integrated experience. This is the transition from GT Places to GT Buses.</p>
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

		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
			        		<p className='left-vertical-line'>Responsive design is practiced to make the apps adaptive to changing device dimensions.</p>
		        		</div>
		        	</div>
		        	

		        	</div>

		        	<div className='my-container-big'>
		        		<div className='row'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-70' src={require('./src/responsive@x2.png')}/>
		        			</p>
		        		</div>
		        		</div>
		        	</div>

		        	<div className='my-container'>
		        		<div className='row margin-top-2'>
			        		<div className='col s12'>
				        		<p className='left-vertical-line'>A design guideline is generated to inform future apps built by student developers.
				        		I made sure the guideline not only follows the legacy style of Georgia Tech's digital designs but also embodies GT Mobile's unique identity.
				        		</p>
			        		</div>
			        	</div>
			        	<div className='row'>
			        		<div className='col s12'>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-70' src={require('./src/design_guideline@x3_profile.png')}/>
			        			</p>
			        		</div>
			        	</div>
		        	</div>
	        	</Element>

	        	<Element name='understanding'>
	        		<div className='my-container'>
		        		<div className='row container-center-inside margin-top-1'>
			        		<h2>- Understanding -</h2>
			        	</div>
	        			<div className='row margin-top-2'>
	        				<div className='col s12'>
	        					<p>When I first met with the team, I was given the task of <span className='quote'>"just redesigning the platform to make it look better"</span>.
	        					With this "task" in mind, I took a look at the current product.
	        					</p>
	        				</div>
	        			</div>

	        			<div className='row'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				The First Look at The Current System
			        			</p>
			        			<p className='width-100 container-center-inside'>
				        				<img className='width-100' src={require('./src/current_product.png')}/>
			        			</p>
			        			<p>
			        				With a quick glance, I was able to identify several noticeable issues with the visual aspect and usability of the current product
			        			</p>
			        			<p className='left-vertical-line'>
			        				<span className='key-word'>Functional Inconsistency: &nbsp;</span> 
			        				Across the multiple applications, many shared UI components such as the navigation bar
			        				have different interactions and functionalities, which affects the system's overall learnability and usability.
		        				</p>
		        				<p className='left-vertical-line'>
			        				<span className='key-word'>Style Inconsistency:&nbsp;</span>
			        				Similar to functional inconsistency, GT Mobile's apps are lacking consistency in terms of typography, interaction, look and feel.
		        				</p>
			        			<p className='left-vertical-line'>
			        				<span className='key-word'>Style Outdatedness:&nbsp;</span>
			        				As can be seen from above screenshots, current GT Mobile interface lacks mordernization in style.
		        				</p>

		        				<p>
		        					<span className='quote'>"But is that all?"</span> &nbsp; I asked myself. My experience from previous design projects
		        					was telling me that above observations were informative but not necessarily complete. <span className='key-word'>Look does not equal usability</span>.
		        				</p>

			        		</div>
		        		</div>

		        		<div className='row'>
			        		<div className='col s12 margin-top-2'>
			        			<p className='title'>
			        				Usability Testing - What are the pain points?
			        			</p>
			        			<p>
			        				GT Mobile consists of 6 legacy applications and many other links, which is too big of a group for me to start with. I decided to start gaining empathy with users
			        				by conducting a usability testing on Homepage and the most used app - GT Places. I recruited 5 students and asked each to 
			        				participate in a one-on-one user testing session with a think-aloud protocol. In the session, the participant was asked to conduct several 
			        				tasks such as navigating the homepage and finding a campus building with a specific attribute.
			        			</p>
			        			<p>
			        				Apart from complaints about visual inconsistencies, what I heard most from the participants were &nbsp;
			        				<span className='quote'>"I wish it took me from GT Places straight to GT Buses because school bus is the most convenient."</span> &nbsp;
			        				That was when I realized that <span className='key-word'>the current information architecture was poor not just in the homapage, but also between apps</span>.
			        			</p>

			        		</div>
		        		</div>

		        		<div className='row'>
			        		<div className='col s12 margin-top-2'>
			        			<p className='title'>
			        				Card Sorting - What does a desirable IA look like?
			        			</p>
			        			<p>
			        				To further understand the desired information architecture, I conducted a closed card sorting excersise
			        				with each of the five participants. For initialization, I wrote the most high-level categories and essential functionalities
			        				of apps on the cards. Then I asked the participant to group the cards based on their understand of the current
			        				platform. The participant started with the scheme on the left and typical end result was shown on the right.
			        			</p>
			        		
			        		</div>
		        		</div>

		        	</div>

	        		<div className='my-container-big'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
				        				<img className='width-70' src={require('./src/card_sorting.png')}/>
			        			</p>
		        		</div>
		        	</div>

		        	<div className='my-container'>
		        		<div className='row'>
			        		<div className='col s12'>
	
			        			<p>
			        				The card sorting exercise resulted in the following insights
			        			</p>
			        			<p className='left-vertical-line'>
			        				What makes GT Mobile useful is the <span className='key-word'>updated and relevant information</span> about campus events and functional
			        				facilities like bus stops and printers.
			        			</p>
			        			<p className='left-vertical-line'>
			        				Apps are expected to work together (turns out that's what the participant meant by "Shared DB"). An example was: as a campus event is annouced in GT Feeds,
			        				the user should be redirected to GT Places for it's location, and then to GT Buses for a route to get there.
			        			</p>
			        		
			        		</div>
		        		</div>
		        		<div className='row'>
		        			<div className='col s12 margin-top-2'>
			        			<p className='title'>
			        				My Proposal
			        			</p>
			        			<p>
			        				With the empathy I built during the research phase, I proposed the following deliverable
			        			</p>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-100' src={require('./src/proposal_small.png')}/>
			        			</p>
			        			<p className='left-vertical-line'>
			        				<span className='key-word'>Information Architecture:&nbsp;</span>
			        				A new information architecture that addresses the issues in the organization of Homepage, apps, and links.
			        			</p>
			        			<p className='left-vertical-line'>
			        				<span className='key-word'>Redesign:&nbsp;</span>
			        				Redesign the experience of Homepage, GT Places, and GT Buses.
			        			</p>
			        			<p className='left-vertical-line'>
			        				<span className='key-word'>Design Guideline:&nbsp;</span>
			        				In the future, GT Mobile will be featureing more apps created by student developers. In order
			        				to keep the consistency of the platform, a design guideline should be provided to them.
			        			</p>
			        		</div>
		        		</div>
		        	</div>

	        	</Element>

	        	<Element name='design'>	
	        		<div className='my-container'>
		        		<div className='row container-center-inside margin-top-1'>
			        		<h2>- Design -</h2>
			        	</div>
	        			<div className='row margin-top-2'>
	        				<div className='col s12'>
		        				<p className='title'>
			        				Information Architecture
			        			</p>
	        						<p className='width-100 container-center-inside'>
				        				<img className='width-100' src={require('./src/IA.png')}/>
			        				</p>
	        					<p>
	        						Instead of having all the apps and social medialinks randomly listed on the Homapage, I decided
	        						to better organize the Homapage by separating them. Furthermore, apps are divided into two categories 
	        						based on the kind of information they provide
	        					</p>
	        					<p className='left-vertical-line'>
			        				<span className='key-word'>Event-Based:&nbsp;</span>
			        				Event-based apps feature information that are frequently updated as campus events take place. They are connected
			        				to provide the user with different aspects of the same piece of information.
			        			</p>
			        			<p className='left-vertical-line'>
			        				<span className='key-word'>Static: &nbsp;</span>
			        				Static apps contains content that does not change frequently. They serve as a reference to campus offices, services, and facilities.
			        			</p>
			        			<p>
			        				GT Places is designed to be the connecting point of all current apps because most information consumed are surrounding
			        				a geolocaion(building) on campus.
			        			</p>
	        				</div>
	        			</div>

	        			<div className='row margin-top-2'>
	        				<div className='col s12'>
		        				<p className='title'>
			        				Low-Fidelity Prototype
			        			</p>
	        				</div>
	        			</div>



	        			<div className='row margin-top-2'>
	        				<div className='col s12'>
		        				<p className='title container-center-inside'>
			        				Wireframe
			        			</p>
	        				</div>
	        			</div>


        			</div>

        			<div className='my-container-big margin-top-2'>
        				<div className='row'>
        					<p className='width-100 container-center-inside'>
		        				<img className='width-100' src={require('./src/wireframe.png')}/>
	        				</p>
        				</div>
        			</div>

        			


	        	</Element>

	        	<Element name='high-fidelity'>
	        		<div className='my-container margin-top-2'>
        				<div className='row'>
        					<div className='col s12'>
		        				<p className='title container-center-inside'>
			        				Hight-Fidelity Prototype
			        			</p>
			        			<p className='container-center-inside margin-top-2'>
			        				<iframe src="https://marvelapp.com/3da435g?emb=1" width="452" height="901" allowTransparency="true" frameBorder="0"></iframe>
			        			</p>
	        				</div>
        				</div>
        			</div>

        			<div className='my-container margin-top-2'>
        				<div className='row'>
        					<div className='col s12'>
		        				<p className='title container-center-inside'>
			        				Homepage
			        			</p>
	        				</div>
        				</div>

        				<div className='row'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>The homepage is rearranged so that legacy apps and social media links are separated
				        		I also made sure that Homepage is scalable by adding pages to contain apps made by students developers.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-70 img-max-width-3 shadow' src={require('./src/homepage_shortened.gif')}/>
			        			</p>
			        		</div>
		        		</div>
        			</div>

        			<div className='my-container margin-top-2'>
        				<div className='row'>
        					<div className='col s12'>
		        				<p className='title container-center-inside'>
			        				Places
			        			</p>
	        				</div>
        				</div>

        				<div className='row'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>
				        		For places, I made sure relevant information (eg. events, newly introduced facilities) is curated for
				        		the user.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-70 img-max-width-3 shadow' src={require('./src/places_pages_final.gif')}/>
			        			</p>
			        		</div>
		        		</div>
        			</div>

        			<div className='my-container margin-top-2'>
        				<div className='row'>
        					<div className='col s12'>
		        				<p className='title'>
			        				GT Places' Tag Feature
			        			</p>
			        			<p>
			        				In the research phase, one user need that really stood out was the ability to 
			        				find campus buildings with certain functionalities or facilities, which inspired
			     					a redesigned tag feature.
			        			</p>
	        				</div>
        				</div>

        				<div className='row'>
			        		<div className='col s12 l6'>
			        			<p className='left-vertical-line'>
			        				The user can add a tag to a building with an explanation of tha tag.
			        			</p>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-70 img-max-width-3 shadow' src={require('./src/add_tag_shortened.gif')}/>
			        			</p>
			        		</div>
			        		<div className='col s12 l6'>
				        		<p className='left-vertical-line'>
			        				The user can also report a tag if they think it is incorrect or irrelavant.
			        			</p>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-70 img-max-width-3 shadow' src={require('./src/report_tag_shortened.gif')}/>
			        			</p>
			        		</div>
		        		</div>

        				<div className='row margin-top-2'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>The user can search certain buildings by their name or tags.</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-70 img-max-width-3 shadow' src={require('./src/search_final.gif')}/>
			        			</p>
			        		</div>
		        		</div>
        			</div>

        			<div className='my-container margin-top-2'>
        				<div className='row'>
        					<div className='col s12'>
		        				<p className='title container-center-inside'>
			        				Connecting Places and Buses
			        			</p>
	        				</div>
        				</div>

        				<div className='row'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>
				        			In the new design, I introduced the transition from Places to Buses for the user to get an optimized route
				        			to the destination by school bus.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-70 img-max-width-3 shadow' src={require('./src/places_to_buses@x1_128.gif')}/>
			        			</p>
			        		</div>
		        		</div>
        			</div>

        			<div className='my-container margin-top-2'>
        				<div className='row'>
        					<div className='col s12'>
		        				<p className='title container-center-inside'>
			        				Buses
			        			</p>
	        				</div>
        				</div>

        				<div className='row'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>
				        			Buses feature a card-based UI design that provides the user with information of bus stops around them.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-70 img-max-width-3 shadow' src={require('./src/buses-main_x0.5_shortened.gif')}/>
			        			</p>
			        		</div>
		        		</div>
        			</div>


	        	</Element>





	        	<Element name='guideline'>
	        		<div className='my-container'>
	        			<div className='row container-center-inside margin-top-1'>
			        		<h2>- Visual Identity -</h2>
			        	</div>

			        	<div className='row margin-top-2'>
        					<div className='col s12'>
		        				<p className='title'>
			        				Mood Board
			        			</p>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-100' src={require('./src/mood_board.png')}/>
		        				</p>
		        				<p>
		        					My choices of product mood and color were based on a combination of
		        					Geoagia Tech's physical apperance and its virtual branding identity.
		        				</p>
	        				</div>
        				</div>


			        	<div className='row margin-top-2'>
        					<div className='col s12'>
		        				<p className='title'>
			        				Design Guideline
			        			</p>
			        			<p className='width-100 container-center-inside'>
			        				<img className='width-100' src={require('./src/design_guideline_light.png')}/>
		        				</p>
		        				<p>
		        					I extracted a set of design guideline from
		        					the design I did for Homepage, Places, and Buses. Due to confidentiality reasons I couldn't share all details of guideline here.
		        				</p>
	        				</div>
        				</div>

	        		</div>

	        	</Element>

	        	<Element name='reflection' style={{marginBottom: '100px'}}>
	        		<div className='my-container'>
	        			<div className='row container-center-inside margin-top-1'>
			        		<h2>- Reflection -</h2>
			        	</div>
			        	<p className='margin-top-2'>
			        		GT Mobile's redesign has just started and I am so proud to have been leading the process. GT Places
			        		has been shipped and is going through development iterations. I want to write a note to myself reminding me the most valuable
			        		lessons I was taught
			        	</p>
			        	<p className='left-vertical-line'>
	        				<span className='key-word'>Critical Thinking: &nbsp;</span> 
	        				I did not simply take the initial task of "making it look better". Being a little skeptical and patient, I
	        				looked into how users were interacting with the exiting platform. Without the research process, I would not
	        				have reached the design that really addressed the pain points.
	    				</p>
	    				<p className='left-vertical-line'>
	        				<span className='key-word'>Documentation Is Key:&nbsp;</span>
	        				From research to insights, from low-fidelity design to high-fidelity prototype, there were so many documents
	        				involved. I really took time to think about how to organize the documents tell a story of my process, not just for stakeholders but also for myself.
	    				</p>
	    				<p className='left-vertical-line'>
	        				<span className='key-word'>Design with Constraints:&nbsp;</span>
	        				One of the constraints given to me was "not adding any new features" due to lack to development labor. That was actually quite a new experience for me because
	        				I had been used to throwing in new features when user asked for them. This constraint really inspired me to look closely
	        				at existing product and optimizing it with new information architecture. I really got a taste of <span className='key-word'>converting constraints into inspiration</span>.
	    				</p>
	        		</div>

	        	</Element>


			</div>
		)
	}
}

export default GtMobile