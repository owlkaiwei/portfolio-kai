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

  foo() {
  	console.log('hey')
  }

	render() {
		return (
			<div>
			<div className='progress-container'>
					<ScrollLink activeClass="scroll-active" to="overview" spy={true} smooth={true} duration={500} onSetActive={this.foo} >
			          Overview
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="research" spy={true} smooth={true} duration={300} >
			          User Research
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="test1" spy={true}  smooth={true} duration={300}>
			          Ideation
			        </ScrollLink>
		        </div>
			<div className='taptile-project-page page-container-tt'>

		        <Element name="banner" className="element container-center-inside banner-container-tt">
		          <img className='banner-img-tt' src={require('./src/taptile_banner.svg')} />
		          <div className='banner-text-tt'>
		          	<div className='title-and-logo-tt'>
			          	<h1>TapTile</h1>
			          	<img className='logo-tt' src={require('./src/taptile_logo.svg')} />
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
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- Not another social app. But a phone-less game. -</h2>
		        	</div>
		        	<div className='row'>
		        		<div className='col s12 container-center-inside'>
		        			<p className='width-100 container-center-inside'>
		        				<img className='width-90 img-max-width-2' src={require('./src/taptile_concept.gif')}/>
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
			        		<p className='left-vertical-line'>Encouragibg collaboration and light competition</p>
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

		         <Element name='research' data-aos="fade-up" >
		        	<div className='my-container'>
		        	<div className='row container-center-inside margin-top-1'>
		        		<h2>- Ideation -</h2>
		        	</div>
		        	<div className='row'>
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

		        	<div className='row'>
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

		        	<div className='row'>
		        		<div className='col s12'>
		        			<p className='title'>
		        				Design Sprint
		        			</p>
		        			<p>For each of the three designs, we sketched out a storyboard for the participants to understand the features. The participants were asked to put stickers on the board to indicate how they like think of each design on certain aspects (willingness of use, for example).</p>
							<p>With the feedback, we finalized the design by combining Jumping Tiles and Game Table into - TapTile. </p>		        			
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


			</div>
			</div>
		)
	}
}

export default TapTile