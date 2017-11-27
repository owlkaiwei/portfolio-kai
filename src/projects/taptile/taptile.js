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
import './taptile.css';
import AOS from 'aos'; 
import '../../../node_modules/aos/dist/aos.css'; 
import Headroom from 'react-headroom'

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
			<div id='taptile-page' className='project-page'>
				<Headroom disableInlineStyles={true}>
		            <div className='project-navbar'>
		              <div className='project-nav-background'/>
		              <a href='#/work'>
		                W O R K
		              </a>
		              <a href='#/'>
		                H O M E
		              </a>
		              <a href='#/work/gtmobile'>
		                N E X T : G T M O B I L E
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
		        		<img className='banner-img' src={require('./src/taptile_banner.svg')} />
		        	</div>
		        	<div className='banner-container-inner container-center-inside'>
		        		<div className='banner-text'>
			          	<div className='title-and-logo'>
				          	<h1>TapTile</h1>
				          	<img className='logo-tt' src={require('./src/taptile_logo.svg')} />
			          	</div>
			          	<p>bringing people together in public space.</p>
			          </div>
		        	</div>
		          
		         
		        </Element>

		        <Element name="info" className="element info-container margin-top-2">
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
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- Not another social app. But a phone-less game. -</h2>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90' src={require('./src/taptile_concept.gif')}/>
		        			</p>
		        		</div>
		        		<div className='col s12'>
			        		<p>By transforming a flat surface on the ground into a 3v3 multi-player gaming area, TapTile lowers the barrier to social interaction and brings people together in public spaces.</p>
			        		<p>TapTile is a result of dedicated user research. I take pride in the project not just for the award-winning result, but also for the user-centered process I was involved in.</p>
			        		<p><a className='emphasis' href='https://owlkaiwei.github.io/taptile/' target='_blank' style={{cursor:'pointer'}}>Try it out!</a></p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6'>
			        		<p className='left-vertical-line'>Encouraging collaboration and light competition</p>
		        		</div>
		        		<div className='col s12 l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width-2' src={require('./src/tiles.svg')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6 push-l6'>
			        		<p className='left-vertical-line'>Simple stepping action with low mental load</p>
		        		</div>
		        		<div className='col s12 l6 pull-l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width-2' src={require('./src/step.svg')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6'>
			        		<p className='left-vertical-line'>Engaging and rewarding visual feedback</p>
		        		</div>
		        		<div className='col s12 l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width-2 shadow' src={require('./src/compete.gif')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
			        		<p>TapTile is an innovative yet simple solution to induce positive interaction between people. As a researcher and designer in this project, I started without 
			        		any idea what the solution should be like. The next section details the process how I, with my team, used a user-centered process to arrive at the design of TapTile.
			        		</p>
		        		</div>
		        	</div>
		        	</div>
		        </Element>

		        <Element name='research' data-aos="fade-up" >
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- User Research -</h2>
		        	</div>

		        	<div className='row' style={{display: 'none'}}>
		        		<div className='row col s12 container-center-inside'>
		        			<p className='quote'>Why be on the phone, when you can interact with people around you?</p>
		        		</div>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12'>
		        			<p className='title'>
		        				Initiative
		        			</p>
			        		<p>School started, and our project team soon observed that students were not interacting with each other at public spaces on campus, especially bus stops.</p>
			        		<p>Not everyone is an extrovert. But could there be a design opportunity to encourage social interaction at public spaces?</p>
		        			
		        		</div>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width-2' src={require('./src/people_on_phone.png')}/>
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
		        			<div>
		        			<p className='left-vertical-line important'>
	        					What are students' current behaviors and attitudes towards social interaction at on-campus bus stops?
	        				</p>
	        				<p className='left-vertical-line important'>
	        					For students waiting for buses, is there a barrier to social interaction? If yes, what constitutes it?
	        				</p>
	        				</div>
			        	</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6'>
		        			<p className='title'>
		        				Contextual Inquiry
		        			</p>
			        		<p>Three of the busiest bus stops on campus were chosen to be our first research spot. There, the team approached students waiting for buses for a quick survey.</p>
		        		</div>
		        		<div className='col s12 l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width-2' src={require('./src/survey.png')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row no-margin-bottom'>
		        		<div className='col s12'>
		        			<p>
		        				One of the most interesting findings was the distribution of attitutes.
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row no-margin-bottom'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-100 img-max-width-1 shadow' src={require('./src/question@x5.png')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row no-margin-bottom'>
		        		<div className='col s12'>
		        			<p>
		        				From the above result one question arose, which I brought to the interview phase
		        			</p>
		        			<p className='left-vertical-line important'>
		        				The dominant attitute was <span className='emphasis'>passive</span> rather than unwilling. How might we engage the passive people?
	        				</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6 push-l6'>
		        			<p className='title'>
		        				Follow-Up Interview
		        			</p>
			        		<p>Among the survey participants, 10 agreed to participant in a 20-min long interview where we inquired more detailed information behind their survey responses. We coded their responses and analyzed them with an affinity diagram.</p>
		        		</div>
		        		<div className='col s12 l6 pull-l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-100 img-max-width-2' src={require('./src/interview@x5.png')}/>
		        			</p>
		        		</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
			        		<p className='title'>
			        			Affinity Mapping
			        		</p>
			        		<p>
			        			The interview responses were coded and analyzed by affinity mapping.
			        		</p>
		        			<p className='width-100 container-center-inside' style={{marginTop: '3rem'}}>
		        				<img className='width-100 shadow' src={require('./src/affinity.png')}/>
		        			</p>
			        	</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
			        		<p className='title'>
			        			Persona & Scenario
			        		</p>
			        		<p>
			        			With the valuable responses from the survey and interview, the team still felt that the traget user group still appear a little vague.
			        		</p>
			        		<p>
			        			In consideration of the diversity within the target user group and the fact that people's attitutes played a key part in the research, we developed a set of personas with <span className='key-word'>behavorial attributes</span>.
			        		</p>
		        			<p className='width-100 container-center-inside' style={{marginTop: '3rem'}}>
		        				<img className='width-90 img-max-width-1' src={require('./src/persona.png')}/>
		        			</p>
			        	</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
			        		<p className='title'>
			        			Key Findings
			        		</p>
			        		<p className='left-vertical-line'>
			        			Most students wait for buses alone and find it to be one of the most <span className='key-word'>boring and frustrating</span> event throughout their school days.
			        		</p>
			        		<p className='left-vertical-line'>
			        			<span className='key-word'>Passiveness can be converted into willingness</span> with triggers like casual topics, or a common focus of attention (eg. a street band).
			        		</p>
		        			<p className='left-vertical-line'>
		        				Students spend an average of about <span className='key-word'>10 minutes</span> at most bus stops on campus.
		        			</p>
			        	</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
			        		<p className='title'>
			        			Design Goals
			        		</p>
			        		<p>
			        			Based on the insights drawn from user research, I proposed that the solution should be a system that 
			        		</p>
			        		<p className='left-vertical-line'>
			        			converts passiveness to willingness by lowering the barrier to social interaction 
			        		</p>
		        			<p className='left-vertical-line'>
		        				encourages simple and positive activity for students to take part in
		        			</p>
		        			<p className='left-vertical-line'>
		        				features a typical use case flexible enough to fit in a 10-min time range
		        			</p>
			        	</div>
		        	</div>
		        	</div>
		        </Element>

		         <Element name='ideation' data-aos="fade-up" >
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- Ideation -</h2>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p className='title'>
		        				Diverge
		        			</p>
		        			<p>In order to get a rich pool of design alternatives, the team started a brainstormimg phase where each team member came up with at least 5 roughly sketched ideas. </p>
							<p><span className='key-word'>Creativity</span>, <span className='key-word'>Visualization</span>, and <span className='key-word'>Quantity</span> were emphasized in this phase.</p>		        			
		        		</div>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width-2 shadow' src={require('./src/brainstorm@x10.png')}/>
		        			</p>
		        		</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p className='title'>
		        				Converge
		        			</p>
		        			<p>More than 20 ideas were narrowed down to 3 with the help of <span className='key-word'>Impact/Feasibility Diagram</span>. </p>
							<p>The three ideas in the upper right corner were selected to go through a design sprint at the bus stop on campus.</p>		        			
		        		</div>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width-2' src={require('./src/diagram@x1.svg')}/>
		        			</p>
		        		</div>
		        	</div>

		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p className='title'>
		        				Design Sprint
		        			</p>
		        			<p>For each of the three designs, we sketched out a storyboard for the participants to understand the features. The participants were asked to put stickers on the board to indicate how they like think of each design on certain aspects (willingness of use, for example).</p>
		        		</div>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width-2' src={require('./src/design_sprint_4.png')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12'>
							<p>With the feedback, we finalized the design by combining Jumping Tiles and Game Table into - TapTile. </p>		        			
		        		</div>
		        	</div>



		        	</div>
	        	</Element>

	        	<Element name='solution' data-aos="fade-up" >
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- Solution -</h2>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-100 img-max-width-2' src={require('./src/highlevel.svg')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p className='title'>
		        				The Rule
		        			</p>
		        			<p> People on each side try to make their circle grow faster than the other side by stepping faster on the tiles.</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p className='title'>
		        				Overall System Design
		        			</p>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-100' src={require('./src/system.svg')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12 l6'>
		        			<p className='title'>
		        				Visual
		        			</p>
			        		<p>I chose a background with vibrant color and bubble effect to attract attention.</p>
		        		</div>
		        		<div className='col s12 l6 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-100 img-max-width-2 shadow' style={{borderRadius: '3rem'}} src={require('./src/visual.gif')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p className='title'>
		        				Encouraging Collaboration
		        			</p>
		        		</div>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12 l6'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-100 img-max-width-2 shadow' style={{borderRadius: '3rem'}} src={require('./src/one_person_tap.gif')}/>
		        			</p>
		        			<p>
		        				One person tapping hardly fights against the circle shrinking.
		        			</p>
		        		</div>
		        		<div className='col s12 l6'>
			        		<p className='width-100 container-center-inside'>
			        				<img className='width-100 img-max-width-2 shadow' style={{borderRadius: '3rem'}} src={require('./src/two_people_tap.gif')}/>
		        			</p>
		        			<p>
		        				More people make the circle grow faster.
		        			</p>
		        		</div>
		        	</div>
		        	</div>
	        	</Element>

	        	<Element name='prototype' data-aos="fade-up" >
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- Prototype -</h2>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p>We rapidly prototyped TapTile with Arduino and Processing.js. We used some of the most simple material to create a high-fidelity proof of concept.</p>
		        		</div>
		        	</div>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
			        				<img className='width-80' src={require('./src/prototype.png')}/>
		        			</p>
		        		</div>
		        	</div>
		        	<div className='my-container'>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p>
		        				<iframe className='width-100' style={{height: '40rem'}} src="https://www.youtube.com/embed/y4J8tKREnso" allowFullScreen></iframe>
		        			</p>
		        		</div>
		        	</div>
		        	</div>
	        	</Element>

	        	<Element name='reflection' data-aos="fade-up" >
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- Feedback & Reflection -</h2>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p>We showcased TapTile at Convergence Innovation Competition. Not only did we win the First Prize, we also gathered value feedback from numerous people trying it out.</p>
		        			<p>Strangers came together and had fun for a couple of minutes. They left TapTile smiling and talking to each other about how they could have tapped a little faster. </p>
		        			<p><span className='quote'>“I usually don’t do this but I couldn’t help but join that one guy on the left side while he was against two other people. I’m glad we won!”</span></p>
		        			<p>TapTile was like a door through the invisible wall between strangers and it was fascinating to see people crossing it.</p>
		        			<p><span className='quote'>“I had fun just watching them play.”</span> A girl said to me after a group of people left. At first I took the comment as a complement on TapTile but I wondered why she did not join. <span className='quote'>“I guess I’m just not that competitive.”</span> Maybe more game mode can be added to TapTile to balance the need for competitiveness and cooperation.</p>

		        		</div>
		        	</div>
		        	</div>
		        	
	        	</Element>

	        	<Element name='fin' data-aos="fade-up" >
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- Fin. -</h2>
		        	</div>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p>TapTile was such a special project for me, not just for the smiling faces of people trying it out, but also for the good memory with my team. I can’t describe how much fun we had during the process. From the first time the program successfully ran, to being obssessed with competing against each other, we worked as a team, and more importantly bonded as friends.</p>
		        			
		        		</div>
		        	</div>
		        	</div>
		        	<div className='my-container-big'>
		        	<div className='row margin-top-2'>
		        		<div className='col s12'>
		        			<p className='width-100 container-center-inside'>
			        				<img className='width-80' src={require('./src/group.jpg')}/>
		        			</p>
		        		</div>
		        	</div>
		        	</div>
		        	
	        	</Element>


			</div>
		)
	}
}

export default TapTile