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
import './mood.css';
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


class Mood extends Component {
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
			<div id='mood-page' className='project-page'>
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
			                <a className='text-link' href='#/work/reco'>
				                U P  &nbsp; N E X T : &nbsp; R E C O
				            </a>
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
					<ScrollLink activeClass="scroll-active" to="overview" smooth={true} offset={-100} >
			          <span className='label'>Overview</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="understanding" smooth={true} offset={-100} >
			          <span className='label'>Understanding</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="design-process" smooth={true} offset={-100}>
			          <span className='label'>Design</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="evaluation" smooth={true} offset={-100}>
			          <span className='label'>Evaluation</span><span className='circle'></span>
			        </ScrollLink>
			        <ScrollLink activeClass="active" to="reflection" smooth={true} offset={-100}>
			          <span className='label'>Reflection</span><span className='circle'></span>
			        </ScrollLink>
			        <a onClick={this.scrollToTop}>Back to Top</a>

		        </div>

		        <Element name="banner" className="element banner-container">
		        	<div className='banner-container-inner container-center-inside'>
		        		<Img className='banner-img' src={require('./src/banner.svg')} loader={loader} />
		        	</div>
		        	<div className='banner-container-inner container-center-inside'>
		        		<div className='banner-text'>
			          	<div className='title-and-logo'>
				          	<h1>M O o D</h1>
			          	</div>
			          	<p>seeking the timeless</p>
			          </div>
		        	</div>
		        	<div className='banner-container-inner container-center-horizontal'>
			        		<a className='link-to-project' href='https://gtgunsnroses.github.io/music-infovis/' target='_blank'>
				        		Visit Project Site
				        	</a>
		        	</div>
		          
		         
		        </Element>

		        <Element name="info" className="element info-container margin-top-2">
		          <div className='row'>
		          	<p className='col s5 label'>Role</p>
		          	<p className='col s7 content'>
		          		Interaction Designer<br/>
		          		Visual Designer
		          	</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Team</p>
		          	<p className='col s7 content'>GunsNRoses</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Tool</p>
		          	<p className='col s7 content'>Sketch<br/> D3.js<br/> Spotify Web API</p>
		          </div>
		          <div className='row'>
		          	<p className='col s5 label'>Duration</p>
		          	<p className='col s7 content'>Fall 2017</p>
		          </div>
		        </Element>

				<Element name='overview' data-aos="fade-up" >
					<div className='my-container'>
						<div className='row container-center-inside margin-top-1'>
							<h2>- Seeking The Timeless Music-</h2>
						</div>
						<div className='row margin-top-2'>
							<div className='col s12'>
								<p>
									MOoD is an information visualization web app that provides the user
									with enjoyable experience observing how American pop music has changed over the past 
									50 years and what music stays relevant after years (timeless).
								</p>
							</div>
						</div>

						<div className='row margin-top-2'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>
				        			The user is presented an overview of the past 50 years, each year represented as
				        			a circle. The trend of different attributes(eg. loudness, tempo, etc.) can be observed separately.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-80 img-max-width-2 shadow expandable' 
		        						onLoad={()=>{
		        							images.push(require('./src/trend.gif'))
		        							this.setState({
		        								images : images,
		        								trend_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.trend_index
		        							})
		        						}}
		        						src={require('./src/trend.gif')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-2'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>
				        			Diving into a specific year, the user can slide the filter to see only songs above 
				        			a certain popularity today. That way they really pick out which songs stay popular after years.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-80 img-max-width-2 shadow expandable' 
		        						onLoad={()=>{
		        							images.push(require('./src/slider.gif'))
		        							this.setState({
		        								images : images,
		        								slider_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.slider_index
		        							})
		        						}}
		        						src={require('./src/slider.gif')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-2'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>
				        			Motion is utilized to connect the user's cognitive model with attributes like energy and tempo.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-80 img-max-width-2 shadow expandable' 
		        						onLoad={()=>{
		        							images.push(require('./src/song_detail.gif'))
		        							this.setState({
		        								images : images,
		        								song_detail_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.song_detail_index
		        							})
		        						}}
		        						src={require('./src/song_detail.gif')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-2'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>
				        			I applied design principles from across information visualiztion and human-computer interaction to
				        			help the user achieve the visualiztion goals.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100 img-max-width-3 shadow' src={require('./src/design_principles@x2.png')}/>
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
	        			<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				Exploring The Data
			        			</p>
			        			<p>
			        				As a music lover, I took initiative pitching to the team the two data sources I wanted to visualize in combination.
			        			</p>
			        			<p className='left-vertical-line margin-top-2'>
			        				<span className='key-word'>Billboard Yearly Top 100 (1965 - 2015)</span>
		        				</p>
		        				<p className='width-100 container-center-inside'>
		        					<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/data_billboard.png'))
		        							this.setState({
		        								images : images,
		        								data_billboard_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.data_billboard_index
		        							})
		        						}}
		        						src={require('./src/data_billboard.png')}
		        						loader={loader}
	        						/>
		        				</p>
		        				<p>
		        					For each year, the top one hundred songs are listed in order of their rank. We found this dataset to be
		        					particularly useful when combined with the next data source.
		        				</p>

		        				<p className='left-vertical-line margin-top-2'>
			        				<span className='key-word'>Spotify Web API</span>
		        				</p>
		        				<p>
		        					Thanks to <a href='https://developer.spotify.com/web-api/object-model/#audio-features-object' target='_blank'>Spotify Web API</a>, we were able to obtain detailed information about a track, including its audio features.
		        				</p>
		        				<p className='width-100 container-center-inside'>
		        					<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/api_object_full.png'))
		        							this.setState({
		        								images : images,
		        								api_object_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.api_object_index
		        							})
		        						}}
		        						src={require('./src/api_object_short.png')}
		        						loader={loader}
	        						/>
		        				</p>
		        				<p className='caption'>
		        					(Expand to see the full description of API)
		        				</p>

		        				<p className='margin-top-2'>
		        					I presented to my team my initial understanding of the data
		        				</p>
		        				<p className='width-100 container-center-inside'>
		        					<Img className='width-100' src={require('./src/data_scheme@x2.png')}/>
		        				</p>
		        				<p>
		        					A two-dimensional scheme can be extracted - time from year 1965 to year 2015, and songs in each year ranking from 1 to 100.
		        					Furthermore, the API further broadens the data scheme by adding multiple attributes to each song.
		        				</p>
		        				<p>
		        					With such a rich source of data, we felt the need of an understanding of the target audience before
		        					brainstorming visualiztion concepts.
		        				</p>
			        		</div>
		        		</div>


		        		<div className='row margin-top-2' data-aos='fade-up'>
				        		<div className='col s12'>
				        			<p className='title'>
				        				Target Audience
				        			</p>
				        			<p>
				        				After the initial underdtanding of the data, we went on deciding the audience we were catering to
				        			</p>
				        			<p className='left-vertical-line'>
				        				<span className='key-word'>Non-musically-trained people who are interested in music</span>
			        				</p>
			        				<p className='left-vertical-line'>
				        				<span className='key-word'>Music priducers/artists</span>
			        				</p>
			        				<p className='left-vertical-line'>
				        				<span className='key-word'>Researchers from music streaming platforms/services</span>
			        				</p>

			        				<p>
			        					The key feature of the target audience is the mixture of novices and experts, which requires the design
			        					to balance easily-understandable visualization and in-depth musical domain knowledge.
			        				</p>
			        			</div>
		        		</div>

		        		<div className='row margin-top-2' data-aos='fade-up'>
				        		<div className='col s12'>
				        		<p className='width-100 container-center-inside'>
			        					<Img className='width-100' src={require('./src/goals@x2.png')}/>
			        				</p>
				        			<p className='title margin-top-2'>
				        				User Goals
				        			</p>
				        			
			        				<p>
			        					Based on our understanding of the data and the user, we finalized a set of
			        					goals that our visualization should help the user achieve
			        				</p>

				        			
			        				<p className='left-vertical-line'>
				        				<span className='key-word'>Identifying trends</span>
			        				</p>
			        				<p>
			        					Are their any trends over the past 50 years in terms of different attributes of a song? If yes, what do
			        					the trends look like and how noticeable are they?
			        				</p>
			        				<p className='left-vertical-line'>
				        				<span className='key-word'>Identitying timeless songs</span>
			        				</p>
			        				<p>
			        					We were aware that <span className='key-word'>timelessness</span> is an subjective and relative attribute.
			        					The design should, together with the user's own interpretation, help the user identify songs that stay popular after years.
			        				</p>
			        				<p className='left-vertical-line'>
				        				<span className='key-word'>Identifing similarities and differences</span>
			        				</p>
			        				<p>
			        					There are different sub-groups within the 5000 songs. For example, songs released in a certain year, and songs above a certain degree of popularity today.
			        					Within such sub-groups, what are the similarities and differences among the songs?
			        				</p>

			        				<p>
			        					Besides the above goals, the user should be facilitated to answer their own questions that they come up with while exploring the product.
			        				</p>
			        			</div>
		        		</div>

	        		</div>
        		</Element>

        		<Element name='design-process'>
	        		<div className='my-container'>
		        		<div className='row container-center-inside margin-top-1'>
			        		<h2>- Design Process -</h2>
			        	</div>

			        	<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				Brainstorming & Sketching
			        			</p>
			        			<p>
			        				The team first diverged to brainstrom and roughly sketch out concepts. In this phase, I focused 
			        				on efficient usage of the multiple attraibutes in a high-level information layout.
			        			</p>
	        				</div>
        				</div>

        				<div className='row'>
			        		<div className='col s12 l6'>
			        			<p className='width-100'>
			        				<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/sketch_1.jpg'))
		        							this.setState({
		        								images : images,
		        								sketch_1_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.sketch_1_index
		        							})
		        						}}
		        						src={require('./src/sketch_1_small.png')}
		        						loader={loader}
	        						/>
			        			</p>
	        				</div>
	        				<div className='col s12 l6'>
			        			<p className='width-100'>
			        				<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/sketch_2.jpg'))
		        							this.setState({
		        								images : images,
		        								sketch_2_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.sketch_2_index
		        							})
		        						}}
		        						src={require('./src/sketch_2_small.png')}
		        						loader={loader}
	        						/>
			        			</p>
	        				</div>
        				</div>

        				<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				Medium-Fidelity Design Alternatives
			        			</p>
			        			<p >
			        				Having obtained the team's feedback on the above two rough concepts, I turned them into 
			        				medium-fidelity designs (Idea 01 and Idead 04) for an in-class design sprint. 
			        			</p>
			        			<p>
			        				(Please click on the graphs to see the complete description of them.)
			        			</p>
	        				</div>
        				</div>

        				<div className='row'>
			        		<div className='col s12 l6'>
			        			<p className='width-100'>
			        				<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/alternative_1_big@x2.png'))
		        							this.setState({
		        								images : images,
		        								alternative_1_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.alternative_1_index
		        							})
		        						}}
		        						src={require('./src/alternative_1@x2.png')}
		        						loader={loader}
	        						/>
			        			</p>
	        				</div>
	        				<div className='col s12 l6'>
			        			<p className='width-100'>
			        				<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/alternative_2_big@x2.png'))
		        							this.setState({
		        								images : images,
		        								alternative_2_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.alternative_2_index
		        							})
		        						}}
		        						src={require('./src/alternative_2@x2.png')}
		        						loader={loader}
	        						/>
			        			</p>
	        				</div>

			        		<div className='col s12 l6'>
			        			<p className='width-100'>
			        				<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/alternative_3_big@x2.png'))
		        							this.setState({
		        								images : images,
		        								alternative_3_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.alternative_3_index
		        							})
		        						}}
		        						src={require('./src/alternative_3@x2.png')}
		        						loader={loader}
	        						/>
			        			</p>
	        				</div>
	        				<div className='col s12 l6'>
			        			<p className='width-100'>
			        				<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/alternative_4_big@x2.png'))
		        							this.setState({
		        								images : images,
		        								alternative_4_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.alternative_4_index
		        							})
		        						}}
		        						src={require('./src/alternative_4@x2.png')}
		        						loader={loader}
	        						/>
			        			</p>
	        				</div>

        				</div>

        				<div className='row' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p >
			        				We presented the above design alternatives to the class and obtained valuable feedback. 
			        			</p>
			        			<p className='left-vertical-line'>
				        			The designs were limited within just one view, each featuring a set of attributes. With so many interesting 
				        			attributes in our dataset, an "overview-zoom-filter-detail" structure(Schneiderman's Mantra) might be more 
				        			efficient.
				        		</p>
	        				</div>
        				</div>

        				<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				Converge
			        			</p>
	        				</div>
	        				<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line'>
				        			With the feedback and a better understanding of the data, the team gathered once more to combine and revise 
				        			the designs. An "overview-zoom-filter-detail" structure started to take shape.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100' 
		        						src={require('./src/converge.jpg')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
        				</div>

        			

        				<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title container-center-inside'>
			        				High-Fidelity Interface Design
			        			</p>
			        			<p className='margin-top-2'>
			        				<Img className='width-100 expandable shadow' 
		        						onLoad={()=>{
		        							images.push(require('./src/interface@x1.png'))
		        							this.setState({
		        								images : images,
		        								interface_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.interface_index
		        							})
		        						}}
		        						src={require('./src/interface@x1.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        			<p className='left-vertical-line key-word margin-top-2'>
			        				Schneiderman's Mantra
			        			</p>
			        			<p className='italic'>
			        				Overview first, zoom and filter, then details-on-demand
			        			</p>

			        			<p>
			        				Schneiderman's Mantra is one of the key design principles applied when I was
			        				designing the visualization. It helped me construct a logical information architecture
			        				that presents both the hollistic and the detailed data to the user.
			        			</p>
			        			<p className=''>
			        				<Img className='width-100 expandable' 
		        						onLoad={()=>{
		        							images.push(require('./src/mantra_bg@x1.png'))
		        							this.setState({
		        								images : images,
		        								mantra_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.mantra_index
		        							})
		        						}}
		        						src={require('./src/mantra@x1.png')}
		        						loader={loader}
	        						/>
			        			</p>
	        				</div>
        				</div>



        				<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				Interaction Design
			        			</p>
			        			<p>
			        				<span className='key-word'>Representation</span> and <span className='key-word'>interaction</span> 
			        				  &nbsp;are two equally important components of an information visualization. When I was designing the interaction, something that I
			        				 kept reminding myself was: <span className='emphasis-new'>When the user is presented the visualization, 
			        				 each interaction should serve a user task, and then that user task should be in a group of tasks that achieve a user goal.</span>
			        			</p>
			        			<p className='width-100 container-center-inside'>
		        					<Img className='width-100' src={require('./src/interaction_highlevel@x2.png')}/>
		        				</p>
		        				<p>
		        					Keeping the user's process in mind, I found it easier to come up with meaningful interactions that ultimately help the 
		        					user achive their goals.
		        				</p>
		        			</div>
	        			</div>

	        			<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				User Goal #1 - Identifying Trends
			        			</p>
			        			<p>
			        				The key task for achieving this goal is to correlate time with different attributes of music.
			        			</p>
			        		</div>
		        		</div>

		        		<div className='row'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line key-word'>
				        			Interaction #1 - Selecting Attribute from Tab Menu
				        		</p>
				        		<p>
				        			While keeping the Y-axis (Time/Year) unchanged, the radiu buttons in the tab menu
				        			switches the attribute of X-axis. The movement of each year on X-axis is animated 
				        			to give a smooth transition.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-80 img-max-width-2 shadow expandable' 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.trend_index
		        							})
		        						}}
		        						src={require('./src/trend.gif')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line key-word'>
				        			Interaction #2 - Hovering for Detail
				        		</p>
				        		<p>
				        			If interested in more quantitative detail of a year, the user can hover on 
			        				the circle to read a list of attributes of that year.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-80 img-max-width-2 shadow expandable' 
			        					onLoad={()=>{
		        							images.push(require('./src/hover_year@x2.png'))
		        							this.setState({
		        								images : images,
		        								hover_year_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.hover_year_index
		        							})
		        						}}
		        						src={require('./src/hover_year@x2.png')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				User Goal #2 - Identifying Timelessness
			        			</p>
			        		</div>
		        		</div>

		        		<div className='row'>
			        		<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line key-word'>
				        			Interaction #3 - Filtering Songs Based on Current Popularity
				        		</p>
				        		<p>
				        			In the detail view of each year, songs ranking from #1 to #100 are ordered 
				        			clockwise in a circle. With the slider in the middle, the user can choose to see 
				        			only songs with current popularity above a certain value.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-100 img-max-width-2 expandable' 
			        					onLoad={()=>{
		        							images.push(require('./src/detail_filter.gif'))
		        							this.setState({
		        								images : images,
		        								filter_index : imgCounter,
		        								imgCounter : imgCounter + 1
		        							})
		        						}} 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.filter_index
		        							})
		        						}}
		        						src={require('./src/detail_filter.gif')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row'>
			        		<div className='col s12'>
				        		<p className='left-vertical-line key-word'>
				        			Interaction #4 - Sliding through Years
				        		</p>
				        		<p className='width-100'>
				        			<Img className='width-100 expandable shadow' 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.slider_index
		        							})
		        						}}
		        						src={require('./src/slider.gif')}
		        						loader={loader}
	        						/>
				        		</p>
				        		<p>
				        			Fixing the filter threshold (popularity value), the user can slide through years 
				        			and see how many songs in each year have remained popular. In the example above, 
				        			it can be see that as we go back further in time, the number of songs with popularity over 72 are decreasing. 
				        			It would be interesting to see details of the remaining old songs.
				        		</p>
			        		</div>
			        	</div>


			        	<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				User Goal #3 - Identifying Similarities And Differences
			        			</p>
			        		</div>
		        		</div>

		        		<div className='row margin-top-2' data-aos='fade-up'>
		        			<div className='col s12 l6 push-l6'>
				        		<p className='left-vertical-line key-word'>
				        			Interaction #5  - Hovering for Song Detail
				        		</p>
				        		<p>
				        			When hovering over the a song, the bar is thickened and song detail is displayed.
				        		</p>
			        		</div>
			        		<div className='col s12 l6 pull-l6 container-center-inside'>
			        			<p className='width-100 container-center-inside'>
			        				<Img className='width-80 img-max-width-2 shadow' 
		        						onClick={()=>{
		        							console.log(images)
		        							this.setState({
		        								isOpen : true,
		        								imgIndex : this.state.song_detail_index
		        							})
		        						}}
		        						src={require('./src/song_detail.gif')}
		        						loader={loader}
	        						/>
			        			</p>
			        		</div>
		        		</div>

		        		<div className='row margin-top-2' data-aos='fade-up'>
		        			<div className='col s12'>
				        		<p className='left-vertical-line key-word'>
				        			Visual Mapping - Color
				        		</p>
				        		<p>
				        			<Img className='width-100 container-center-inside' src={require('./src/color@x2.png')} loader={loader}/>
				        		</p>
				        		<p>
				        			The valence (0 - 1) of the song is visually mapped to a color between #F961A0 and #56E4E4. 
				        		</p>
			        		</div>
		        		</div>

		        		<div className='row margin-top-2' data-aos='fade-up'>
		        			<div className='col s12'>
				        		<p className='left-vertical-line key-word'>
				        			Visual Mapping - Animation
				        		</p>
				        		<p>
				        			<Img className='width-100 container-center-inside' src={require('./src/energy_tempo@x2.png')} loader={loader}/>
				        		</p>
				        		<p>
				        			A song's tempo is conveyed through the frequency of growing/contracting animation, while its 
				        			energy is conveyed through the maximum size of the circle.
				        		</p>
			        		</div>
		        		</div>

		        		<div className='row margin-top-2' data-aos='fade-up'>
			        		<div className='col s12'>
			        			<p className='title'>
			        				Other Design Details
			        			</p>
			        		</div>
		        		</div>

		        		<div className='row' data-aos='fade-up'>
		        			<div className='col s12'>
				        		<p className='left-vertical-line key-word'>
				        			Gestalt Principles
				        		</p>
				        		<p>
				        			When designing some details of the visualization, I also let Gestalt Principles guide my decisions.
				        		</p>
				        		<p className='key-word'>
				        			1. Continuation
				        		</p>
				        		<p>
				        			The overview on the left side was designed to be a scatterplot instead of a line plot. However, the trend can still 
				        			be observed because the positions of consecutive years can be perceived as continious, thus creating noticeable trends.
				        		</p>
				        		<p className='key-word'>
				        			2. Closure
				        		</p>
				        		<p>
				        			On the right-hand side, while the circle is not complete, multiple bar-like elements are viewed together to form a larger 
				        			circle, which is also figurative for a CD or an eye. The two metaphors are important for conveying the product's 
				        			theme of "seeking" and "music".
				        		</p>
				        		<p>
				        			<Img className='width-100 container-center-inside' src={require('./src/metaphor.png')} loader={loader}/>
				        		</p>
				        		<p className='key-word'>
				        			3. Enclosure
				        		</p>
				        		<p>
				        			For the right-hand-side view, I added a shaded background to differentiate between both views.
				        		</p>
			        		</div>
		        		</div>

		        		<div className='row margin-top-2' data-aos='fade-up'>
		        			<div className='col s12'>
				        		<p className='left-vertical-line key-word'>
				        			Typeface
				        		</p>
				        		<p>
				        			<Img className='width-100 container-center-inside' src={require('./src/typeface@x2.png')} loader={loader}/>
				        		</p>
				        		<p>
				        			The visualization is themed with multiple round-shaped components. To create graphical tension between round 
				        			shapes and the text, I chose a condensed font that is tall, narrow, and elegant.
				        		</p>
			        		</div>
		        		</div>

		        		<div className='row margin-top-2' data-aos='fade-up'>
		        			<div className='col s12'>
				        		<p className='left-vertical-line key-word'>
				        			Graphical Integrity
				        		</p>
				        		<p>
				        			On the left-hand view, graphical integrity is preserved by presenting the entire scale for the range of the data.
				        		</p>
			        		</div>
		        		</div>
		        	</div>
	        	</Element>

	        	<Element name='evaluation'>
	        		<div className='my-container'>
		        		<div className='row container-center-inside margin-top-1'>
			        		<h2>- Evaluation & Feedback -</h2>
			        	</div>

			        	<div className='row margin-top-2'>
			        		<div className='col s12'>
			        			<p>
			        				After finishing developing the visualization, the team obtained feedback from the Information Visualization 
			        				class by letting classmates try out the design.
			        			</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-2'>
			        		<div className='col s12'>
				        		<p className='title'>
				        			Usability Metrics
				        		</p>
				        		<p className='left-vertical-line key-word'>
				        			Learnability
				        		</p>
				        		<p>
				        			Due to the minimal design practiced in the visualization, some users found it hard to understand all the features. 
				        			I then improved learnability by providing an Intro page as well as an always-accessible ‘Help’ menu that would bring up a graphic on various controls and descriptions of areas on the screen.
				        		</p>
				        		<p className='left-vertical-line key-word'>
				        			Effectiveness
				        		</p>
				        		<p>
				        			The design allows users to easily answer the questions identified earlier in the report with ease, and relatively few steps.
				        		</p>
				        		<p className='left-vertical-line key-word'>
				        			Insightfulness
				        		</p>
				        		<p>
				        			Other than the pre-identified set of questions, the visualization also allows for discovery of insights through interactions. The class interacted with the visualization and came   up   with   the   following   insights:
				        		</p>
				        		<p>	
				        			1. Songs   that   were   high   on   billboard   rankings   do   not   necessarily   remain   popular.
				        		</p>
				        		<p>
				        			2. Songs   that   were   lower   down   on   billboard   rankings   can   regain   popularity   today.
				        		</p>
				        		<p>
				        			3. Songs   that   were   high   on   billboards   in   recent   years   are   more   popular   today.
				        		</p>
				        		<p>
				        			4. The generic shape/trend over the years for loudness and energy seemed to be correlated.
				        		</p>
				        		<p>
				        			5. 1983   was   definitely   a   more   positive   year   than   2015. (Try to find out about this in the visualization :D)
				        		</p>
			        		</div>
			        	</div>

			        	<div className='row margin-top-2'>
			        		<div className='col s12'>
				        		<p className='title'>
				        			User Experience Metrics
				        		</p>
				        		<p className='left-vertical-line key-word'>
				        			Enjoyment
				        		</p>
				        		<p>
				        			Including the ability to play the song selection aims to increase enjoyment. Coupled with the pulsing circles in accordance with the tempo, enjoyment levels are expected to be   high.
				        		</p>
				        		<p className='left-vertical-line key-word'>
				        			Engagement
				        		</p>
				        		<p>
				        			Given that the dataset paints a different picture each year, users’ engagement is expected to remain high as exploration continues due to the various surprises that may lie in store. Especially for music lovers, transporting them back to the past, to their childhood   oldies   will   also   keep   engagement   levels   high.
				        		</p>
			        		</div>
			        	</div>
		        	</div>
	        	</Element>

	        	<Element name='reflection'>
	        		<div className='my-container'>
		        		<div className='row container-center-inside margin-top-1'>
			        		<h2>- Reflection -</h2>
			        	</div>

			        	<div className='row margin-top-2'>
			        		<div className='col s12'>
				        		<p>
				        			I am proud of not only how MOoD turned out to be, but also the process that brought me to the final solution. Unlike 
				        			any other kind of apps or websites, MOoD broadened my horizon to the field of information visualization where I got to 
				        			learn and apply some domain-specific principles.
				        		</p>
			        		</div>
		        		</div>

			        	<div className='row'>
			        		<div className='col s12'>
				        		<p className='left-vertical-line key-word'>
				        			Goal-Driven Design Process
				        		</p>
				        		<p>
				        			When designing the multiple interactions, I started out coming up with concepts that turned out 
				        			to be somewhat meaningless. They might look fancy, but still meaningless. Then I started to ask myself <span className='quote'>what interaction 
				        			can really help the user achieve the goals?</span>  The reversed process of goal-task-interaction 
				        			really kept me close to the user and design meaningful interactions.
				        		</p>
				        		<p className='left-vertical-line key-word'>
				        			Perception and Culture
				        		</p>
				        		<p>
				        			One of the feedbacks that I got was the color mapping for valence was arguably inaccurate. In some cultures, 
				        			red is perceived more negative than green. In the future, I will be more careful when it comes to subjective 
				        			perception metrics like color mapping and try to find a more appropriate solution.
				        		</p>
				        		<p className='left-vertical-line key-word'>
				        			Trade-off between Visual Effect and Graphical Integrity
				        		</p>
				        		<p>
				        			For the left-side view, a difficult decision was made to keep the X-axis full range instead of just the range where 
				        			the data lies in. This decision compromised some visual effect of the trends but preserved the graphical integrity, 
				        			which was more important. <span className='quote'>I would rather tell a bland story than a dishonest one</span>.
				        		</p>
				        		<p className='left-vertical-line key-word'>
				        			The Power of Music
				        		</p>
				        		<p>
				        			I felted so rewarded by the look of people when they found their favorite songs on the chart with a circles bouncing 
				        			to the beats, because that was how I felt when I was designing MOoD. What I hear, what I see, and my passion for music 
				        			just all clicked together and created a beautiful story that an Excel sheet does not do.
				        		</p>
				        		<p className='margin-top-2 container-center-inside'>
				        			<Img className='width-30' src={require('./src/banner.svg')} loader={loader} />
				        		</p>



			        		</div>
			        	</div>
		        	</div>
	        	</Element>


        		<div style={{height: '500px'}}>
        		</div>

		        

	        	


			</div>
		)
	}
}

export default Mood