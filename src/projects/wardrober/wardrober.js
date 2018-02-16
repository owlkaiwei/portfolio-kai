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
import './wardrober.css';
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
	leftProjectName: 'M O o D (Music Infovis)',
	leftUrl: '#/work/mood',
	leftBgColor: 'black',
	leftTextColor: 'white',
	rightProjectName: 'GT Mobile',
	rightUrl: '#/work/gtmobile',
	rightBgColor: 'black',
	rightTextColor: 'white'
}


const loader = React.createElement('img', { className: 'loader', src: require('../src/loader.svg') })


class Wardrober extends Component {
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
			<div id='wardrober-page' className='project-page'>
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
			                <a className='text-link' href='#/work/mood'>
				                U P  &nbsp; N E X T : &nbsp; G T &nbsp; M O B I L E
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
			        <ScrollLink activeClass="scroll-active" to="research" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Research</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="design" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Design</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="flow-1" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Flow-1</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="flow-2" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Flow-2</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="prototype" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Prototype</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="evaluation" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Evaluation</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="visual" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Visual</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="future" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Next Steps</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="reflection" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Reflection</span><span className='circle'></span>
			        </ScrollLink>
			        <a onClick={this.scrollToTop}>Back to Top</a>

		        </div>

		        <Element name="banner" className="element banner-container">
		        	<div className='banner-container-inner container-center-inside banner-img-container'>
		        		<Img className='banner-img' src={require('./src/wardrober_banner@small.png')} loader={loader} />
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
				        		Everyone is a Fashion Icon.
				        	</a>
		        	</div>
		          
		         
		        </Element>

		        <Element name="info" className="element info-container margin-top-2">
		          <div className='row'>
		          	<p className='col s5 label'>Role</p>
		          	<p className='col s7 content'>
		          		Product Designer (Individual Challenge)
		          	</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Tool</p>
		          	<p className='col s7 content'>Pen & Paper <br/> Sketch<br/> Marvel<br/> Principle</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Duration</p>
		          	<p className='col s7 content'>01/08/2018 - 01/15/2018</p>
		          </div>
		        </Element>

		        <Element name='overview' data-aos="fade-up" >
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Your wardrobe is worth falling in love with -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
									There are moments when you feel like you just need a little bit inspiration for your 
									style and fasion in the morning. And there are moments when you stand in front of your wardrobe, shaking your head because of how messy it is.
								</p>
								<p>
									<span className='key-word'>Wardrober</span> is the solution to problems like these surrounding one's wardrobe. Here are some of the 
									screens in motion. 
								</p>
							</div>
						</div>

						<div className='row'>
							<div className='col s12 m4'>
								
								<div className='container-center-inside width-80'>
									<p>
										<Img className='shadow width-100 round' src={require('./src/Planning-Inspiration@shortened.gif')} loader={loader} />
									</p>
								</div>
								<div className='container-center-inside width-80'>
									<p>Planning outfit becomes an inspirational process.</p>
								</div>
							</div>
							<div className='col s12 m4'>
								
								<div className='container-center-inside width-80'>
									<p>
										<Img className='shadow width-100 round' src={require('./src/Plan@shortened.gif')} loader={loader} />
									</p>
								</div>
								<div className='container-center-inside width-80'>
									<p>The physical location of each item is now mirrored and managed on a digital platform.</p>
								</div>
							</div>
							<div className='col s12 m4'>
								
								<div className='container-center-inside width-80'>
									<p>
										<Img className='shadow width-100 round' src={require('./src/my_wardrobe-click@shortened.gif')} loader={loader} />
									</p>
								</div>
								<div className='container-center-inside width-80'>
									<p>Wardrober features engaging microinteractions that add enjoyment to a previously dull process.</p>
								</div>
							</div>
						</div>

						
					</div>


				</Element>

				<Element name="understanding" className="element margin-top-2">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Understanding The Challenge -</h2>
						</div>

						<div className='row margin-top-2'>
							<p className='col s12'>
								The core of the challenge was "to streamline the process of planning outfit", which is surrounded by a number of tasks. For example, it involves keeping the wardrobe organized, finding items, determining occasion, shopping for similar items and the list 
								can go on. I did not want to jump right into ideating concepts based on assumptions. Instead, I wanted to understand as much of the outfit planning experience as I could in this limited amount of time to make sure my concept was effective and valuable to users.
							</p>
						</div>
    			</div>
    			<div className='my-container-big margin-top-3'>
						<div className='row container-center-inside'>
							<Img className='width-80' src={require('./src/process.png')} loader={loader} />
						</div>
					</div>
    			</Element>


				<Element name="research" className="element margin-top-2">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Research -</h2>
						</div>

						<div className='row' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title margin-top-2'>
			        				Interview
			        			</p>
			        			<p>
			        				Fashion and style is such a subjective field that almost everyone has their own definition. I decided to first 
			        				talk to 5 people in my network. In the recruitment, I tried to have people different in age and clothing style for better generalizability. 
			        				</p>
			        				<p>When preparing 
			        				the <a className='key-word' href='https://docs.google.com/document/d/1Wp79cMh4frMz2GNmAcYawqsGdvPqlWcWkP05pGGrMH8/edit?usp=sharing' target='_blank'>script</a>, 
			        				I kept the questions open enough for the participant to elaborate on their relationship with their wardrobe. In this phase, it was especially important 
			        				for me to be unbiased and open so that I could spot the pain points.
			        			</p>
			        			<p>
			        				The interviews were conducted <span className='key-word'>in context</span>. The participant and I stood in front 
			        				of their wardrobe and went through details of different tasks surrounding the topic.
			        			</p>
			        			<p className='container-center-inside margin-top-3'>
			        				<Img className='width-100 shadow' src={require('./src/interview.png')} loader={loader} />
			        			</p>
			        			
	        				</div>
        				</div>

        				<div className='row'>
        					<div className='col s12'>
			        			<p className='title margin-top-2'>
			        				Persona Development
			        			</p>
			        			<p>
			        				I quickly coded the responses from the interviews and found that <span className='key-word'>organizing wardrobe</span> and <span className='key-word'>planning outfits</span>  
			        				were considered the central tasks because they took place almost everyday and the process involved the most pain points, which will be 
			        				discussed in a later section.
			        			</p>
			        			<p>
			        				Interestly, there were two other frequently mentioned elements - shopping and fashion's value in a social sense.
			        			</p>
			        			<p>
			        				Shopping for clothes
			        				usually does not happen on a daily basis, but can be easily triggered by inspirations from others. On the other hand, people 
			        				use other people's outfits as inspirations, and the desire to shop arises naturally. 
			        			</p>
			        			<p>
			        				Fashion is also a social subject. Most people do want to get complements from others to credit their effort spent on clothes.
			        			</p>
			        			<p>
			        				Last but not least, I narrowed my scope to <span className='key-word'> mobile </span> apps because when planning or organizing outfits, 
			        				the participants kept moving around between mirror and wardrobe and were constantly using a hand to fetch clothes. Mobility and portability is key.
			        			</p>
			        			<p>
			        				The communication with the partipants helped me create the following two personas.
			        			</p>
			        			<p className='container-center-inside margin-top-3'>
			        				<Img className='width-100 shadow' style={{maxWidth: '650px'}} src={require('./src/persona-1.png')} loader={loader} />
			        			</p>
			        			<p className='container-center-inside margin-top-3'>
			        				<Img className='width-100 shadow' style={{maxWidth: '650px'}} src={require('./src/persona-2.png')} loader={loader} />
			        			</p>
			        			
	        				</div>
        				</div>

        				<div className='row'>
        					<div className='col s12'>
			        			<p className='title margin-top-2'>
			        				Hierarchical Task Analysis
			        			</p>
			        			<p>
			        				My next step was to tell a story of how my personas were <span className='key-word'>currently</span> carrying out the tasks. My main strategy here was to

			        			</p>
			        			<p className='left-vertical-line'>
				        			Use the two central tasks - organizing wardrobe and planning outfits - as the "storyline",
				        		</p>
				        		<p className='left-vertical-line'>
				        			Find where shopping and social feedback fit in the stories,
				        		</p>
				        		<p className='left-vertical-line'>
				        			Label the negative emotions(red) and positive emotions(green) in order to tell where the problems are and what I could leverage in my design.
				        		</p>
				        		<p className='margin-top-3'>
				        			(Please click on the following images to expand them.)
				        		</p>
				        		<p className='container-center-inside'>
			        				<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/HTA-1.png'))
		        							this.setState({
		        								images : images,
		        								HTA_1_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.HTA_1_index
		        							})
		        						}}
		        						src={require('./src/HTA-1.png')}
		        						loader={loader}
	        						/>

			        			</p>
			        			<p className='container-center-inside margin-top-3'>
			        				<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/HTA-2.png'))
		        							this.setState({
		        								images : images,
		        								HTA_2_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        							
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.HTA_2_index
		        							})
		        						}}
		        						src={require('./src/HTA-2.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        			
	        				</div>
        				</div>


        				<div className='row'>
        					<div className='col s12'>
			        			<p className='title margin-top-2'>
			        				Competitive Analysis
			        			</p>
			        			<p>
			        				Now that I had knowledge about the high and low in the user's emotion when conducting the tasks, I could look 
			        				at some existing solutions to see how they are handling the issues. I picked
			        				 the highest rated apps in Clothing&Fashion category on Play Store and here are three of them. Please click on the links below to see 
			        				 the analysis.
			        			</p>
			        			<p className='left-vertical-line'>
				        			<a  className='key-word' onClick={()=>{
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.CA_1_index
		        							})
		        						}}>
				        				Chicisimo</a>
				        			<Img className='width-100 expandable shadow'  style={{display:'none'}}
		        						onLoad={()=>{
		        							images.push(require('./src/CA-1.png'))
		        							this.setState({
		        								images : images,
		        								CA_1_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						src={require('./src/CA-1.png')}
		        						loader={loader}
	        						/>
				        		</p>
				        		<p className='left-vertical-line'>
				        			<a  className='key-word' onClick={()=>{
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.CA_2_index
		        							})
		        						}}>
				        				Smart Closet</a>
				        			<Img className='width-100 expandable shadow'  style={{display:'none'}}
		        						onLoad={()=>{
		        							images.push(require('./src/CA-2.png'))
		        							this.setState({
		        								images : images,
		        								CA_2_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						src={require('./src/CA-2.png')}
		        						loader={loader}
	        						/>
				        		</p>
				        		<p className='left-vertical-line'>
				        			<a  className='key-word' onClick={()=>{
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.CA_3_index
		        							})
		        						}}>
				        				YourCloset</a>
				        			<Img className='width-100 expandable shadow'  style={{display:'none'}}
		        						onLoad={()=>{
		        							images.push(require('./src/CA-3.png'))
		        							this.setState({
		        								images : images,
		        								CA_3_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						src={require('./src/CA-3.png')}
		        						loader={loader}
	        						/>
				        		</p>
				        		<p>
				        			Except for Chicisimo, the apps all lack customized recommendation catered to the user's preference/style. While Chicisimo featured 
				        			a well-designed process of getting customized inspiration, its functionality is pretty limited.
				        		</p>

		        			</div>
	        			</div>

	        			<div className='row'>
        					<div className='col s12'>
			        			<p className='title margin-top-2'>
			        				My Proposal: The New Flows
			        			</p>
			        			<p>
			        				I proposed two user flows, one for adding item to wardrobe, which is a reversible process when the user takes an item out, and one 
			        				for planning outfit.
			        			</p>
			        		<p>
				        			(Please click on the following images to expand them.)
				        		</p>
				        		<p>
				        			For adding item to wardrobe
				        		</p>
				        		<p className='container-center-inside'>
			        				<Img className='width-100 expandable shadow' 
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
			        			<p className='margin-top-3'>
				        			For planning outfits
				        		</p>
			        			<p className='container-center-inside'>
			        				<Img className='width-100 expandable shadow' 
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

	        			<div className='row'>
        					<div className='col s12'>
			        			<p className='title margin-top-2'>
			        				The Hook Model
			        			</p>
			        			<p>
			        				Not long before I started this chanllenge, I finished Nir Eyal's book <a style={{fontStyle: 'italic'}} href='https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products-ebook/dp/B00LMGLXTS/ref=sr_1_1?ie=UTF8&qid=1515998532&sr=8-1&keywords=book+hooked' target='_blank'>Hooked</a> and 
			        				was amazed the theories behind building a <span className='key-word'>habit-forming product</span>. Wardrobe and outfit are things people think of at least once
			        				a day.  Hence I asked myself 

			        			</p>
			        			<p>
			        				<span className='key-word'> how might we leverage people's pain points and existing attachment to wardrobe to create a habit-forming design?</span>
			        			</p>
			        			<p>
			        				Based on the Hook Model, I created the following diagram to help myself think about the potentials of my design being habit-forming.
			        			</p>
			        			<p className='container-center-inside margin-top-3'>
			        				<Img className='width-100' src={require('./src/hook.png')} loader={loader} />
			        			</p>

		        			</div>
	        			</div>


					</div>

				</Element>



				<Element name="design" className="element margin-top-2">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Design -</h2>
						</div>

						<div className='row' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title margin-top-2'>
			        				Sketching w/ Pen & Paper
			        			</p>
			        			<p>
			        				Entering the design phase, I kept in mind everything I had collected so far - personas, their pain points, and the new flows. 
			        				I started visualizing stuff by roughly sketching out concepts.
			        			</p>
			        			<p>
			        				I was able to obtain some heuristic feedback from my peers before starting high-fidelity design.
			        			</p>
		        			</div>
	        			</div>
        			</div>
        			<div className='my-container-big margin-top-3'>
						<div className='row container-center-inside'>
							<Img className='width-80' src={require('./src/sketches.png')} loader={loader} />
						</div>
					</div>
				</Element>
				<Element name="flow-1" className="element">
					<div className='my-container'>

						<div className='row' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title margin-top-2'>
			        				High-Fidelity Design
			        			</p>
			        			<p>
			        				In this phase, my emphasis was put on visual consistency and how my interface and interaction could serve the core 
			        				functionalities. Also, I challenged myself a little bit by using iPhone X as the device. 
			        			</p>

			        			<p className='left-vertical-line key-word margin-top-3'>
			        				Organizing Wardrobe (Adding Item)
			        			</p>
		        			</div>
	        			</div>


        			</div>
        			<div className='my-container-big'>
						<div className='row container-center-inside'>
							<Img className='width-80 have-big' 
			        						onLoad={()=>{
			        							images.push(require('./src/high-fi-1.png'))
			        							this.setState({
			        								images : images,
			        								high_fi_1_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.high_fi_1_index
			        							})
			        						}}
			        						src={require('./src/high-fi-1.png')}
			        						loader={loader}
		        						/>
						</div>
					</div>
					<div className='my-container'>
						<div className='row margin-top-2'>
							<div className='col s12 l6 push-l6'>
									<p className='number'>01.</p>
					        		<p className='left-vertical-line'>
					        			This is a small "eye candy" that I added to the homepage. It fits there perfectly because 
					        			it initiates the two core functionalities. Having something enjoyable and even addictive here encourages 
					        			the user to use it.
					        		</p>
				        		</div>

							<div className='col s12 l6 pull-l6 container-center-inside'>
				        			<p className='width-100 container-center-inside'>
				        				<Img className='width-80 img-max-width-2 shadow expandable round' 
			        						onLoad={()=>{
			        							images.push(require('./src/my_wardrobe-click@shortened.gif'))
			        							this.setState({
			        								images : images,
			        								click_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.click_index
			        							})
			        						}}
			        						src={require('./src/my_wardrobe-click@shortened.gif')}
			        						loader={loader}
		        						/>
				        			</p>
				        		</div>
		        		</div>

		        		<div className='row margin-top-2'>
							<div className='col s12 l6 push-l6'>
									<p className='number'>02.</p>
					        		<p className='left-vertical-line'>
					        			Scanning the label of a newly purchased item significantly expedites the process 
					        			of registering an item in the wardrobe. But the user is also left with the option 
					        			to edit the recommended input.
					        		</p>
				        		</div>

							<div className='col s12 l6 pull-l6 container-center-inside'>
				        			<p className='width-100 container-center-inside'>
				        				<Img className='width-80 img-max-width-2 shadow expandable round' 
			        						onLoad={()=>{
			        							images.push(require('./src/scan@shortened.gif'))
			        							this.setState({
			        								images : images,
			        								scan_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.scan_index
			        							})
			        						}}
			        						src={require('./src/scan@shortened.gif')}
			        						loader={loader}
		        						/>
				        			</p>
				        		</div>

			        		<div className='col s12'>
			        			<p className='left-vertical-line key-word margin-top-2'>
			        				Planning Outfit
			        			</p>
			        		</div>
		        		</div>

        			</div>
        			</Element>
        			<Element name="flow-2" className="element">

        			<div className='my-container-big'>
						<div className='row container-center-inside'>
							<Img className='width-95 have-big' 
			        						onLoad={()=>{
			        							images.push(require('./src/high-fi-2.png'))
			        							this.setState({
			        								images : images,
			        								high_fi_2_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.high_fi_2_index
			        							})
			        						}}
			        						src={require('./src/high-fi-2.png')}
			        						loader={loader}
		        						/>
						</div>
					</div>

					<div className='my-container'>
						<div className='row margin-top-2'>
							<div className='col s12 l6 push-l6'>
									<p className='number'>01.</p>
					        		<p className='left-vertical-line'>
					        			The user can start getting inspirations by simply clicking on one of the keywords provided. The keywords are 
					        			not random. Instead, they are provided according to the user's style, preference, and the occasion.
					        		</p>
					        		<p className='left-vertical-line'>
					        			Here the user selected "Date".
					        		</p>
				        		</div>

							<div className='col s12 l6 pull-l6 container-center-inside'>
				        			<p className='width-100 container-center-inside'>
				        				<Img className='width-80 img-max-width-2 shadow expandable round' 
			        						onLoad={()=>{
			        							images.push(require('./src/Planning-Inspiration@shortened.gif'))
			        							this.setState({
			        								images : images,
			        								planning_inspiration_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.planning_inspiration_index
			        							})
			        						}}
			        						src={require('./src/Planning-Inspiration@shortened.gif')}
			        						loader={loader}
		        						/>
				        			</p>
				        		</div>
		        		</div>

		        		<div className='row margin-top-2'>
							<div className='col s12 l6 push-l6'>
									<p className='number'>02.</p>
					        		<p className='left-vertical-line'>
					        			As soon as the user starts scrolling, the style tab is collapsed to provide a bigger view. It can always be expanded by 
					        			clicking on the search bar.
					        		</p>
				        		</div>

							<div className='col s12 l6 pull-l6 container-center-inside'>
				        			<p className='width-100 container-center-inside'>
				        				<Img className='width-80 img-max-width-2 shadow expandable round' 
			        						onLoad={()=>{
			        							images.push(require('./src/Inspiration-scroll@shortened.gif'))
			        							this.setState({
			        								images : images,
			        								ins_scroll_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.ins_scroll_index
			        							})
			        						}}
			        						src={require('./src/Inspiration-scroll@shortened.gif')}
			        						loader={loader}
		        						/>
				        			</p>
				        		</div>
		        		</div>

		        		<div className='row margin-top-2'>
							<div className='col s12 l6 push-l6'>
									<p className='number'>03.</p>
					        		<p className='left-vertical-line'>
					        			This is the interaction of a specific inspiration being expanded. By making it a layer on top of the original view, 
					        			I made sure the use does not get lost during transition.
					        		</p>
				        		</div>

							<div className='col s12 l6 pull-l6 container-center-inside'>
				        			<p className='width-100 container-center-inside'>
				        				<Img className='width-80 img-max-width-2 shadow expandable round' 
			        						onLoad={()=>{
			        							images.push(require('./src/Inspiration-expand@shortened.gif'))
			        							this.setState({
			        								images : images,
			        								ins_expand_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.ins_expand_index
			        							})
			        						}}
			        						src={require('./src/Inspiration-expand@shortened.gif')}
			        						loader={loader}
		        						/>
				        			</p>
				        		</div>
		        		</div>

		        		<div className='row margin-top-2'>
							<div className='col s12 l6 push-l6'>
									<p className='number'>04.</p>
					        		<p className='left-vertical-line'>
					        			This is the interaction of adding all items from an inspiration.
					        		</p>
				        		</div>

							<div className='col s12 l6 pull-l6 container-center-inside'>
				        			<p className='width-100 container-center-inside'>
				        				<Img className='width-80 img-max-width-2 shadow expandable round' 
			        						onLoad={()=>{
			        							images.push(require('./src/inspiration-add@shortened.gif'))
			        							this.setState({
			        								images : images,
			        								ins_add_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.ins_add_index
			        							})
			        						}}
			        						src={require('./src/inspiration-add@shortened.gif')}
			        						loader={loader}
		        						/>
				        			</p>
				        		</div>
		        		</div>

		        		<div className='row margin-top-2'>
							<div className='col s12 l6 push-l6'>
									<p className='number'>05.</p>
					        		<p className='left-vertical-line'>
					        			The user can always view their current planning in progress. They can also index the physical location 
					        			of an item.
					        		</p>
				        		</div>

							<div className='col s12 l6 pull-l6 container-center-inside'>
				        			<p className='width-100 container-center-inside'>
				        				<Img className='width-80 img-max-width-2 shadow expandable round' 
			        						onLoad={()=>{
			        							images.push(require('./src/Plan@shortened.gif'))
			        							this.setState({
			        								images : images,
			        								plan_index : imgCounter,
			        								imgCounter : imgCounter + 1
			        							})
			        						}} 
			        						onClick={()=>{
			        							this.setState({
			        								isOpen : true,
			        								imgIndex : this.state.plan_index
			        							})
			        						}}
			        						src={require('./src/Plan@shortened.gif')}
			        						loader={loader}
		        						/>
				        			</p>
				        		</div>
		        		</div>

        			</div>


    			</Element>

    			<Element name='prototype' className='element margin-top-1'>
    				<div className='my-container'>
    					<div className='row' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title container-center-inside'>
			        				The Prototype
			        			</p>
			        			<p className='container-center-inside margin-top-2'>
			        				<iframe src="https://marvelapp.com/4c06701?emb=1" width="453" height="884" allowTransparency="true" frameBorder="0"></iframe>
			        			</p>
		        			</div>
	        			</div>
    				</div>

    			</Element>


    			<Element name="evaluation" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Evaluation & Iteration -</h2>
						</div>

						<div className='row' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='margin-top-2'>
			        				After finishing the initial prototype, I tested it with several friends. Overall they had positive reaction to the visual and interaction design. 
			        				However, one detail of the initial prototype was complained about multiple times.
			        			</p>
			        			<p className='left-vertical-line key-word'>
			        				Challenge: The Single-Hand Operation
			        			</p>
			        			<p className='container-center-inside'>
			        				<Img className='width-100' src={require('./src/iteration.png')} loader={loader} />
			        			</p>
			        			<p>
			        				One of the most frequent operations in Wardrober is <span className='key-word'> checking outfit planning in progress</span> and 
			        				<span className='key-word'> going back to the list of inspirations</span>. During the evaluations, it was observed that the user 
			        				was constantly <span className='key-word'>picking out outfit with one hand, while holding the phone with the other hand</span>.
			        			</p>
			        			<p>
			        				Therefore, my original design was not supporting this use case because the "Check Planning In Progress" button was placed in the top right corner, which is 
			        				hard to reach with one hand. My solution 
			        				was to change the button to a screen-wide tab in the bottom.
			        			</p>
			        			<p>
			        				This is not a perfect solution either, because iPhone X's home bar is positioned in the bottom too. I had to be very careful about the space between 
			        				the touch area of the tab and the home bar.
			        			</p>
		        			</div>
	        			</div>
        			</div>
    			</Element>

    			<Element name="visual" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Visual Design -</h2>
						</div>

					
        			</div>

        			<div className='my-container-big'>
						<div className='row container-center-inside'>
							<Img className='width-90' src={require('./src/visual.png')} loader={loader} />
						</div>
					</div>

					<div className='my-container'>
						<div className='row'>
							<div className='col s12'>
								<p>
									When deciding the visual style of the app, I kept in mind that Wardrober should be <span className='key-word'>inspirational</span> insead of leading. 
									It should support the content(clothes, looks, outfits). Therefore I created the mood board above where a sense of simplicity and normcore dominates 
									the visual. With mostly black and white, combined with a little bit of accent color, the UI does not overshadow the colors of the outfits themselves while still 
									reminding the user of fashion and style.
								</p>
							</div>
						</div>
					</div>


    			</Element>

    			<Element name="future" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Future Steps -</h2>
						</div>

						<div className='row' data-aos='fade-up'>
			        		<div className='col s12 margin-top-2'>
			        			<p>
			        				I am proud of what I have created in the past 7 days, but Wardrober is no where near finished.
			        			</p>
			        			<p className='left-vertical-line key-word margin-top-3'>
				        			Flesh Out The Rest Of Functionalities
				        		</p>
				        		<p>
				        			As the research process showed, shopping and social feedback are just as crucial to one's wardrobe experience. 
				        			My design touched on the issues there but did not fully flesh out them. It would definitely be beneficial to 
				        			add depth to the design and test the concepts out.
				        		</p>
				        		<p className='left-vertical-line key-word margin-top-3'>
				        			Detail the Incorporation of mixed reality, smart home and AI 
				        		</p>
				        		<p>
				        			Two significant features of Wardrober are the mirror image of the physical wardrobe and a intelligent recommendation 
				        			system. It is necessary to define how the itntelligence blends into the habit-forming product.
				        		</p>
				        		<p className='left-vertical-line key-word margin-top-3'>
				        			Design The Onboarding Process
				        		</p>
				        		<p>
				        			It can be foreseen that, when introduced to Wardrober, the user would feel overwhelmed by the need to register every single item in their wardrobe. 
				        			What could be a easier onboarding process?
				        		</p>

		        			</div>
	        			</div>

					
        			</div>



    			</Element>

    			<Element name="reflection" className="element margin-top-1">
					<div className='my-container'>
						<div className='row container-center-inside'>
							<h2>- Reflection -</h2>
						</div>

						<div className='row' data-aos='fade-up'>
			        		<div className='col s12 margin-top-2'>
			        			<p>
			        				I gave my best in this design project and learned a ton.
			        			</p>
			        			<p className='left-vertical-line key-word margin-top-3'>
				        			The Importance of Planning
				        		</p>
				        		<p>
				        			With a broad problem in hand, I needed to plan the research and design process in order to narrow down to the core of the challenge.
				        		</p>
				        		<p className='left-vertical-line key-word margin-top-3'>
				        			The Voice of The User
				        		</p>
				        		<p>
				        			I am glad that I kept the process user-centered. Otherwise I wouldn't be able to look at the problem with 
				        			neutrality, nor can I spot some of the most fatal usability issues in my original design.
				        		</p>
				        		<p className='left-vertical-line key-word margin-top-3'>
				        			The Just-Do-It Attitude
				        		</p>
				        		<p>
				        			I have always found it hard to make decisions, especially design decisions that would potentially influence 
				        			way more people than I could imagine. This time I practiced forcing myself to use not just 
				        			what I learnd from the user, but also instincts as a designer, to quickly get the ball rolling. It is always the iterative process 
				        			that brings a design to a better state, and I just have to start somewhere.
				        		</p>

				        		<p className='margin-top-1 container-center-inside'>
				        			<Img className='width-20' src={require('./src/tie.svg')} loader={loader} />
				        		</p>

		        			</div>
	        			</div>

					
        			</div>



    			</Element>


				<div style={{height: '200px'}}>
				</div>

				<Footer footer={footer}/>

		       

		        

	        	


			</div>
		)
	}
}

export default Wardrober