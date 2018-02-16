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
import './yelp.css';
import AOS from 'aos'; 
import '../../../node_modules/aos/dist/aos.css'; 
import Headroom from 'react-headroom'
import Lightbox from "react-image-lightbox"
import ReactPlayer from 'react-player'
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
	leftProjectName: 'Wardrober',
	leftUrl: '#/work/wardrober',
	leftBgColor: 'black',
	leftTextColor: 'white',
	rightProjectName: 'M O o D (Music Infovis)',
	rightUrl: '#/work/mood',
	rightBgColor: 'black',
	rightTextColor: 'white'
}


const loader = React.createElement('img', { className: 'loader', src: require('../src/loader.svg') })


class Yelp extends Component {
	constructor(props, context) { 
		console.log('construct')
		super(props, context); 
		this.state = {
			isOpen : false,
			imgIndex : 0,
			imgCounter : 0,
			images : [],
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
			<div id='yelp-page' className='project-page'>
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
				                U P  &nbsp; N E X T : &nbsp; M O o D
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
			        <ScrollLink activeClass="scroll-active" to="understanding" spy={true} smooth={false} offset={-100} >
			          <span className='label'>Understanding</span><span className='circle'></span>
			        </ScrollLink>
			         <ScrollLink activeClass="scroll-active" to="low-fi" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Low Fidelity</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="high-fi" spy={true} smooth={false} offset={-100}>
			          <span className='label'>High Fidelity</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="scroll-active" to="alternatives" spy={true} smooth={false} offset={-100}>
			          <span className='label'>Alternatives</span><span className='circle'></span>
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
	        	</Element>

	        	<Element name="info" className="element info-container margin-top-2">
		          <div className='row'>
		          	<p className='col s5 label'>Role</p>
		          	<p className='col s7 content'>
		          		UI/UX Designer
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

		        <Element name='overview' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>Reimagining the List-Map View</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
									On Yelp's mobile website, the list-map view of nearby options is the primary interface. I conducted a case study 
									on the view and reimagined the experience to address some existing pain points.
								</p>
							</div>
						</div>

						<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>01. <br/></span>
			        				An Overview of the Redesigned Interface & Flow
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
		        						src={require('./src/overview-1.jpg')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>
					</div>

					<div className='my-container'>

						<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>02. <br/></span>
			        				Meaningful Motion
			        			</p>
			        			<p>
			        				I defined some of the core interactions through motion design. I made sure the motion conveys 
			        				the transitions with simplicity and swiftness.
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l5'>
			        			<p className='scenario'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/list-to-map.mov')}/>
			        			</p>
			        		</div>

			        		<div className='col s12 l5 push-l2'>
			        			<p className='scenario'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/map-scroll.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>03. <br/></span>
			        				Two Design Alternatives
			        			</p>
			        			<p>
			        				I also explored two design alternatives for the transition between two views. The exploration 
			        				could inform future validations.
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
		        						src={require('./src/alternatives.jpg')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>
					</div>
				</Element>

				<Element name='understanding' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Understanding the Current Interface -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
									Before diving into ideating the new experience, I took some time understanding the user goal and pain points 
									of the existing interface.
								</p>
							</div>
						</div>

						<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>01. <br/></span>
			        				User Goal & Tasks
			        			</p>
			        			<p>
			        				On the list-map view, the user's goal is to find a restaurant that they would like to go to, and tasks they perform include
			        			</p>
			        			<p className='left-vertical-line'>
			        				Browsing the list of nearby restaurants, judging them by the thumbnail images, rating, cost, and distance.
			        			</p>
			        			<p className='left-vertical-line'>
			        				Editing the filter for customized results
			        			</p>
			        			<p className='left-vertical-line'>
			        				Entering map view to browse restaurants based on location
			        			</p>
			        			<p className='left-vertical-line'>
			        				Switching back and forth between list and map view
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>02. <br/></span>
			        				Current List View
			        			</p>
			        			<p>
			        				<Img className='width-100' 
		        						src={require('./src/list-current.jpg')}
		        						loader={loader}
	        						/>
			        			</p>
	
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>03. <br/></span>
			        				Current Map View
			        			</p>
			        			<p>
			        				<Img className='width-100' 
		        						src={require('./src/map-current.jpg')}
		        						loader={loader}
	        						/>
			        			</p>
	
			        		</div>
			        	</div>
					</div>

					
				</Element>

				<Element name='low-fi' data-aos="fade-up">
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Ideating & Sketching -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
									I kicked off the design stage and sketching out low-fidelity concepts with just pen and paper while keeping in mind 
									the user tasks and pain points I had collected so far.
								</p>
								<p>
									<Img className='width-100' 
		        						src={require('./src/sketch.jpg')}
		        						loader={loader}
	        						/>
								</p>
							</div>
						</div>

		        	</div>

	        	</Element>



				<Element name='high-fi' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- The New Design -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
									When designing high-fidelity interface, I focused on the <span className='scenario'>visual appearance</span> and <span className='scenario'>transition fluency</span> while making sure 
									the <span className='scenario'>Yelp branding</span> is respected.
								</p>
							</div>
						</div>

						<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>01. <br/></span>
			        				Overview of the Flow
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
		        						src={require('./src/flow.jpg')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>
					</div>

					<div className='my-container'>

						<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>02. <br/></span>
			        				A Closer Look at the List View
			        			</p>
			        			<p>
			        				<Img className='width-100' 
		        						src={require('./src/list.jpg')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>03. <br/></span> Scrolling in List View
			        			</p>
				        		<p className='left-vertical-line'>Scrolling up in the list view collapses the branding and menu bar. This 
				        		interaction makes sure the Yelp branding is displayed on landing and later browseing has more space.</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/scroll.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>04. <br/></span> Toggle between Views
			        			</p>
				        		<p className='left-vertical-line'>
				        			The prominence of this interaction is increased by using a floading button that's shared by two views. 
				        		</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/list-to-map.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>05. <br/></span> Icon Choice
			        			</p>
			        		</div>
			        		<div className='col s12'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100' 
		        						src={require('./src/icon.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        			<p>
			        				When deciding the icon for the transition from list to map, I made sure the <span className='key-word'>affordance</span> 
			        				is improved by choosing an icon that more accurately conveys the meaning of "map with multiple marked locations".
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>06. <br/></span> Browsing Options in Map
			        			</p>
				        		<p className='left-vertical-line'>
				        			In the map view, I introduced another interaction, horizontal scroll, to browse the options. This interaction 
				        			mitigates the pain point where the user find it hard to click on location marks when they are small and overlapping.
				        		</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<video autoPlay loop className='width-100 shadow' src={require('./src/map-scroll.mov')}/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12 l6'>
			        			<p className='scenario'>
			        				<span className='number'>07. <br/></span> Grid & Keylines
			        			</p>
				        		<p className='left-vertical-line'>
				        			To keep the layout organized and visually pleasing, I followed the best practice of a 8px-based grid. 
				        		</p>
			        		</div>
			        		<div className='col s12 l5 push-l1 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100' 
		        						src={require('./src/grid.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-3'>
			        		<div className='col s12'>
			        			<p className='scenario'>
			        				<span className='number'>08. <br/></span> Depth & Elevation
			        			</p>
				        		<p className='left-vertical-line'>
				        			Compared to the original design, the new design utilizes the difference in depth and elevation to convey 
				        			the relationship between components.
				        		</p>
			        		</div>
			        		<div className='col s12 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100' 
		        						src={require('./src/elevation.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

		        	</div>

					
				</Element>

				<Element name='alternatives' data-aos="fade-up" style={this.state.contentStyle}>
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Design Alternatives -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
									I kept my mind open to other directions of the design by exploring an alternative shown below. 
									For future effort, it would be valuable to conduct usability testing on two alternatives and determine a more optimistic 
									interaction for switching between the two views.
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
		        						src={require('./src/alternatives-annotated.jpg')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>
					</div>
	        	</Element>

	        	<Element name='reflection' data-aos="fade-up">
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Reflection -</h2>
						</div>
						<div className='row margin-top-3'>
							<div className='col s12'>
								<p>
									In this project, I learned to be more open to different alternatives and analyze 
									their pros and cons. Often times, design is a trade-off between multiple considerations, and the decision 
									depends on the core needs of the user and the usage context.
								</p>
							</div>
						</div>

		        	</div>

	        	</Element>

		   			<div style={{height: '300px'}}>
		        	</div>






			        		<Footer footer={footer} style={this.state.contentStyle}/>

		       



	        	


			</div>
		)
	}
}

export default Yelp