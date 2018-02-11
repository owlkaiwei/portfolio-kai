import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  withRouter,
  Link
} from 'react-router-dom';
import $ from 'jquery';
import 'jquery.easing';
import AOS from 'aos'; 
import '../../../node_modules/aos/dist/aos.css'; 
import Headroom from 'react-headroom'
import Lightbox from "react-image-lightbox"
import './misc.css';
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
    leftProjectName: 'UX Internship @ Elavon',
    leftUrl: '#/work/elavon',
    leftBgColor: 'black',
    leftTextColor: 'white',
    rightProjectName: 'M O o D (Music Infovis)',
    rightUrl: '#/work/mood',
    rightBgColor: 'black',
    rightTextColor: 'white'
}


const loader = React.createElement('img', { className: 'loader', src: require('../src/loader.svg') })

class Misc extends Component {

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
        $('#work-content').removeClass('hidden')
        $('#work-content').removeClass('show')
      }

      scrollToTop() {
        scroll.scrollToTop();
      }


    componentWillReceiveProps(nextProps) {
        AOS.refresh();
    }


  render() {
    const { isOpen, imgIndex, imgCounter, images} = this.state
    return (
    <div id='misc'>
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
                        U P  &nbsp; N E X T : &nbsp;  M O o D
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
    	<div id='work-content' className='work-container-inner container hidden'>


    		<div className='row'>
    			<div className='col s10 push-s1 m12 title margin-top-page-start'>
    				Miscellaneous
    			</div>
    		</div>
    		<div className='row margin-top-2'>
    			<div className='col s10 push-s1 m8 xl6 text'>
                    Either a poster for a project, or a random idea that pops out of no where, 
                    I create them with little context and much imagination.
    			</div>
    		</div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6'>
                    <Img className='width-100 expandable' 
                        onLoad={()=>{
                            images.push(require('./src/needles@2x.png'))
                            this.setState({
                                images : images,
                                needles_index : imgCounter,
                                imgCounter : imgCounter + 1
                            })
                        }} 
                        onClick={()=>{
                            console.log(images)
                            this.setState({
                                isOpen : true,
                                imgIndex : this.state.needles_index
                            })
                        }}
                        src={require('./src/needles@1x.png')}
                        loader={loader}
                    />
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>Needles of Thoughts</div>
                </div>
            </div>




            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6'>
                    <Img className='width-100 expandable' 
                        onLoad={()=>{
                            images.push(require('./src/avocado@3x.png'))
                            this.setState({
                                images : images,
                                avocado_index : imgCounter,
                                imgCounter : imgCounter + 1
                            })
                        }} 
                        onClick={()=>{
                            console.log(images)
                            this.setState({
                                isOpen : true,
                                imgIndex : this.state.avocado_index
                            })
                        }}
                        src={require('./src/avocado@2x.png')}
                        loader={loader}
                    />
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>MEET</div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6'>
                    <Img className='width-100 expandable shadow' 
                        onLoad={()=>{
                            images.push(require('./src/chowie@3x.png'))
                            this.setState({
                                images : images,
                                chowie_index : imgCounter,
                                imgCounter : imgCounter + 1
                            })
                        }} 
                        onClick={()=>{
                            console.log(images)
                            this.setState({
                                isOpen : true,
                                imgIndex : this.state.chowie_index
                            })
                        }}
                        src={require('./src/chowie@2x.png')}
                        loader={loader}
                    />
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>Chowie</div>
                    <div className='text'>
                        <p>Poster for food saving bot - Chowie</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6'>
                    <Img className='width-100 expandable' 
                        onLoad={()=>{
                            images.push(require('./src/medband_full.png'))
                            this.setState({
                                images : images,
                                medband_index : imgCounter,
                                imgCounter : imgCounter + 1
                            })
                        }} 
                        onClick={()=>{
                            console.log(images)
                            this.setState({
                                isOpen : true,
                                imgIndex : this.state.medband_index
                            })
                        }}
                        src={require('./src/medband.png')}
                        loader={loader}
                    />
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>MedBand</div>
                    <div className='text'>
                        <p>Medical Wearable</p>
                    </div>
                </div>
            </div>

            <div className='row margin-top-1' data-aos="fade-up">
                <a className='col s10 push-s1 m8 xl6'>
                    <Img className='width-100 expandable' 
                        onLoad={()=>{
                            images.push(require('./src/wasted.png'))
                            this.setState({
                                images : images,
                                wasted_index : imgCounter,
                                imgCounter : imgCounter + 1
                            })
                        }} 
                        onClick={()=>{
                            console.log(images)
                            this.setState({
                                isOpen : true,
                                imgIndex : this.state.wasted_index
                            })
                        }}
                        src={require('./src/wasted.png')}
                        loader={loader}
                    />
                </a>
                <div className='hide-when-small col s10 push-s1 m4 xl6 thumbnail-text-container'>
                    <div className='title'>Wasted</div>
                </div>
            </div>

            


    		
    	</div>

        <Footer footer={footer}/>
    </div>
    )
  }
}

export default Misc