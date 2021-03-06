import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  withRouter,
  Redirect,
  Switch,
  Link,
  browserHistory, 
  applyRouterMiddleware
} from 'react-router-dom';
import $ from 'jquery';
import 'jquery.easing';
import Loader from './components/Loader';
import logo from './logo.svg';
import './App.css';
import './responsive.css';
import AOS from 'aos'; 
import '../node_modules/aos/dist/aos.css'; 
import Headroom from 'react-headroom'

import "video-react/dist/video-react.css"


import {Intro} from './intro/intro.js'

import {Work} from './work/work.js'

import Playground from './playground/playground'

import TapTile from './projects/taptile/taptile'
import GtMobile from './projects/gtmobile/gtmobile'
import Mood from './projects/mood/mood'
import Misc from './projects/misc/misc'
import Reco from './projects/reco/reco'
import Wardrober from './projects/wardrober/wardrober'
import Elavon from './projects/elavon/elavon'
import LifeDash from './projects/lifedash/lifedash'
import Rostery from './projects/rostery/rostery'
import Yelp from './projects/yelp/yelp'



var Scroll  = require('react-scroll');

var ScrollLink = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


var isFirstTime = true;


const toWork = (history) => {
  switch(history.location.pathname){
        case '/': {
          $('.after-animation').toggleClass('after-animation');
          $('#home-content').animate({opacity: '0'}, 500); 
          setTimeout(()=>{history.push('/work') ;},500);
          break;
        }   
        case '/work': {
          break;
        }   
        default: {
          $('.after-animation').toggleClass('after-animation');
          $('#playground-content').animate({opacity: '0'}, 500); 
          setTimeout(()=>{history.push('/work') ;},500);
          break;
        }    
      }
}

const toHome = (history) => {
  switch(history.location.pathname){
        case '/work': {
          $('.after-animation').toggleClass('after-animation');
          $('#work-content').animate({opacity: '0'}, 500); 
          setTimeout(()=>{history.push('/') ;},500);
          break;
        }   
        case '/': {
          break;
        }   
        default: {
          $('.after-animation').toggleClass('after-animation');
          $('#playground-content').animate({opacity: '0'}, 500); 
          setTimeout(()=>{history.push('/') ;},500);
          break;
        }    

      }
}

const toPlayground = (history) => {
  switch(history.location.pathname){
        case '/work': {
          $('.after-animation').toggleClass('after-animation');
          $('#work-content').animate({opacity: '0'}, 500); 
          setTimeout(()=>{history.push('/playground') ;},500);
          break;
        }   
        case '/': {
          $('.after-animation').toggleClass('after-animation');
          $('#home-content').removeClass('home-content-show')
          $('#home-content').addClass('home-content-hidden')
          setTimeout(()=>{history.push('/playground') ;},500);
          break;
        }    
        default: {
          break;
        }

      }
}

const WingToWork = withRouter(
    ({history}) => (
      <g id='wing' onClick={()=>{toWork(history)}} >
              <path id='upperWing' className="flipUpper" fill='#8ae5ff' opacity='1' d="M126.2,153,232.67,36.75a4,4,0,0,1,5.65-.25l53.1,48.63a4,4,0,0,1,.25,5.65l-57,62.22Z"/>
              <path id='lowerWing' className="flipLower"  fill='#8ae5ff' opacity='1' d="M291.42,220.87l-53.1,48.63a4,4,0,0,1-5.65-.25L126.2,153H234.68l57,62.22A4,4,0,0,1,291.42,220.87Z"/>
            </g>
      )
  )

class ScrollIndicator extends Component {

  render() {
    return (
      <div id='scroll-indicator-container-outer' className='center-container'>
        <div id='scroll-indicator-container-inner' onClick={this.props.handleClick}>
          <div className='center-container'>
            <div id='greeting-text' className={this.props.greetingClass}>H I </div>
          </div>
          <div id='highlight' className='center-container'>
            <img id='down-arrow' className={this.props.arrowClass} src={require('./img/down-arrow.png')} />
          </div>
          
        </div>
    </div>
    )
  }
}

var isScrolling = false

class Content extends Component {

  constructor() {
      super();
      var secondPartClass = isFirstTime ? null : 'right-part-reappear'
      this.state = {
        isLoading: true,
        isFirstTime : false,
        display: 'none',
        rightPart: secondPartClass,
        section: 1,
        scrollTop: 0,
        isScrolling: false,
        arrowClass: 'arrow-down',
        greetingClass: 'greeting-show',
        buttonFunc: this.buttonScrollDown,
        toIntro: null
      };
      if (isFirstTime === true) {
        isFirstTime = false;
      };
      isScrolling = false
      this.mouseScroll = this.mouseScroll.bind(this)
  }

  buttonScrollDown() {
    isScrolling = true
    $('.letter-k').removeClass('letter-k-show');
    $('.letter-k').addClass('letter-k-hidden');
    $('#intro').addClass('intro-show'); 
    $("html, body").animate({scrollTop:$('#home-scroll-wrapper').height()*0.5}, 700, 'easeInOutExpo', ()=>{setTimeout(()=>{
      isScrolling = false
    }, 100)});
    this.setState({arrowClass: 'arrow-up', buttonFunc: this.buttonScrollUp, greetingClass:'greeting-hidden'})
  }

  buttonScrollUp() {
    isScrolling = true
    $('.letter-k').removeClass('letter-k-hidden');
    $('.letter-k').addClass('letter-k-show');
    $('#intro').removeClass('intro-show'); 
    $("html, body").animate({scrollTop:0}, 700, 'easeInOutExpo', ()=>{setTimeout(()=>{
      isScrolling = false
    }, 100)});
    this.setState({arrowClass: 'arrow-down', buttonFunc: this.buttonScrollDown, greetingClass:'greeting-show'})
  }

  mouseScroll(event) {
    if (!isScrolling) {
      if(this.state.section===1 && $(window).scrollTop() > this.state.scrollTop) {
        console.log('!!!')
        isScrolling = true
        this.setState({section:2, scrollTop:$('#home-scroll-wrapper').height()*0.5, isScrolling: true, arrowClass: 'arrow-up', buttonFunc: this.buttonScrollUp, greetingClass:'greeting-hidden'});
        $('.letter-k').removeClass('letter-k-show');
        $('.letter-k').addClass('letter-k-hidden');
        $('#intro').addClass('intro-show'); 
        //$('#home-content').scrollTop($('#home-scroll-wrapper').height()*0.5, ()=>{console.log('callback!')});
        $("html, body").animate({scrollTop:$('#home-scroll-wrapper').height()*0.5}, 700, 'easeInOutExpo', (()=>{this.setState({isScrolling:false}); isScrolling = false}).bind(this));
      }

      else if (this.state.section===2 && $(window).scrollTop() < this.state.scrollTop) {
        console.log('!!!!!')
        isScrolling = true
        this.setState({section:1, scrollTop:0, isScrolling: true, arrowClass: 'arrow-down', buttonFunc: this.buttonScrollDown, greetingClass:'greeting-show'});
        $('.letter-k').removeClass('letter-k-hidden');
        $('.letter-k').addClass('letter-k-show');
        $('#intro').removeClass('intro-show'); 
        $("html, body").animate({scrollTop:0}, 700, 'easeInOutExpo', (()=>{this.setState({isScrolling:false}); isScrolling = false}).bind(this));
      }
   }
  }

  componentWillMount() {
    $("html, body").scrollTop(0)
    isScrolling = false
  }

  componentDidMount() {
    $('#work-btn').removeClass('after-animation');
    $('#playground-btn').removeClass('after-animation');
    $('#home-btn').toggleClass('after-animation');
    $('#vertical-line-left').addClass('vertical-line-left-home');
    $('#vertical-line-right').removeClass('vertical-line-right-playground');
    $('#vertical-line-right').removeClass('vertical-line-right-work');
    $('#vertical-line-right').addClass('vertical-line-right-home');
    $('#vertical-line-left').removeClass('vertical-line-left-playground');
    $('#vertical-line-left').removeClass('vertical-line-left-work');
    $('#vertical-line-left').addClass('vertical-line-left-home');
    setTimeout(()=>{
      $('.letter-k').removeClass('home-content-hidden')
      $('.letter-k').addClass('home-content-show')
    }, 500)
    $(window).on('scroll', this.mouseScroll);

    /*$('#home-content').on('scroll mousewheel touchmove', function(e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
    });*/

    $('#home-content').mousemove((event)=>{
      var rightX = - (event.pageX - ($('#home-content').width())/2)/50;
      var rightY = - (event.pageY - ($('#home-content').height())/2)/70;
      var leftX = - (event.pageX - ($('#home-content').width())/2)/120;
      var leftY = - (event.pageY - ($('#home-content').height())/2)/120;
      $('#right-part').css({'transform' : 'translate(' + rightX +'px, ' + rightY + 'px)'});
      $('#left-part').css({'transform' : 'translate(' + leftX +'px, ' + leftY + 'px)'});
      //$('#right-part').css({'display' : 'none'});
    });

    if (this.props.location.state) {
      if (this.props.location.state.toIntro) {
        this.buttonScrollDown()
      }
    }
  }

  componentWillUnmount() {
    isScrolling = true
    $(window).off('scroll', this.mouseScroll);
  }


  render() {
    return (
      <div>
              <ScrollIndicator handleClick={this.state.buttonFunc.bind(this)} arrowClass={this.state.arrowClass} greetingClass={this.state.greetingClass}/>

      <div id='home-content' className=''>
        <div id='home-scroll-helper'/>
        <div id='home-scroll-wrapper'>
          <svg className='letter-k letter-k-show home-content-hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328 314">
          <defs>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            <filter id="dropshadow" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
              <feOffset dx="0" dy="2" result="offsetblur"/>
              <feMerge> 
                <feMergeNode/> 
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <g id='left-part'>
                  <path className="cls-1" fill='#3fa9f5' d="M46,240.58V44a4,4,0,0,1,4-4h72a4,4,0,0,1,4,4V271.67"/>
                  <polygon className="cls-3" fill='#8ad2ff' points="126.14 153.06 46 240.58 126 271.68 180.41 212.26 126.14 153.06"/>
                </g>
                <g id='right-part' className='right-part-reappear'>
                  <WingToWork />
                </g>
              </g>
            </g>
          </svg>

          <div id='intro'>
            <Intro/>

          </div>
        </div>
      </div>
      </div>
    );
  }
}



class NavBar extends Component {
  constructor() {
      super();
      this.state = {
        class: null,
        disable: null
      };
  }


  getAttributes(path) {
    if (path === '/') {
      return({class: 'nav-home', disable: true}) 
    }

    else if (path === '/work') {
      return({class: 'nav-work', disable: false}) 
    }

    else {
      return({class: 'nav-home', disable: true}) 
    }
  }


  render() {
    var history = this.props.history
    var attr = this.getAttributes(this.props.location.pathname)
    return(
      <div>
        <Headroom disableInlineStyles={true} disable={attr.disable}>
            <div id='navbar'>
              <div id='nav-background' className={attr.class}/>
              { this.props.location.pathname !== '/' &&
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
              }
              
              <a className='text-link'
                id='work-btn'
                onClick={()=>{toWork(history)}}>
                W O R K
              </a>
              <a className='text-link'
                id='home-btn'
                onClick={()=>{toHome(history)}}
              >
                H O M E
              </a>
              <a className='text-link'
                id='playground-btn'
                onClick={()=>{toPlayground(history)}}
              >
                P L A Y G R O U N D
              </a>
            </div>
        </Headroom>
      </div>
    )
  }
}




const Back = withRouter(({history})=>{
  var path = history.location.pathname;
  if (path === '/') {
    return (
      <div>
        <div id='background-1' style={{opacity:'1'}}/>
        <div id='background-2' style={{opacity:'0'}}/>
        <div id='background-3' style={{opacity:'0'}}/>
      </div>
    )
  }
  else if (path === '/work') {
    return (
      <div>
        <div id='background-1' style={{opacity:'0'}}/>
        <div id='background-2' style={{opacity:'1'}}/>
        <div id='background-3' style={{opacity:'0'}}/>
      </div>
    )
  }
  else if (path === '/playground') {
    return (
      <div>
        <div id='background-1' style={{opacity:'0'}}/>
        <div id='background-2' style={{opacity:'0'}}/>
        <div id='background-3' style={{opacity:'1'}}/>
      </div>
    )
  }

})




class Background extends Component {
  constructor() {
    //detect route first
    super();
    this.state = {
      gradients: [
          'linear-gradient(20deg, #4cecf8, #0071df)',
          'linear-gradient(20deg, rgb(251, 237, 201), #0071E3)',
          'linear-gradient(20deg, #89C8FC, #50b0ff)'
        ],
      homeGradient: null,
      gradientShouldChange: true
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentWillMount() {
    this.setState ({
        homeGradient: this.state.gradients[this.getRandomInt(0, 2)],
      })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.pathname !== nextProps.pathname) {
      if (nextProps.pathname === '/') {
      if (this.state.gradientShouldChange) {
        this.setState ({
        homeGradient: this.state.gradients[this.getRandomInt(0, 2)],
        gradientShouldChange: false
      })
      }
    }

    else if (nextProps.pathname === '/work') {
      if (!this.state.gradientShouldChange) {
        this.setState ({
        gradientShouldChange: true
      })}
      }

       else if (nextProps.pathname === '/playground') {
      if (!this.state.gradientShouldChange) {
        this.setState ({
        gradientShouldChange: true
      })}
      }

    }
  }



  render() {
    var path = this.props.pathname;

    if (path === '/') {
      return (
        <div>
          <div id='background-1' style={{opacity:'1', background: this.state.homeGradient}}/>
          <div id='background-2' style={{opacity:'0'}}/>
          <div id='background-3' style={{opacity:'0'}}/>
        </div>
      )
    }
    else if (path === '/work') {
      return (
        <div>
          <div id='background-1' style={{opacity:'0', background: this.state.homeGradient}}/>
          <div id='background-2' style={{opacity:'1'}}/>
          <div id='background-3' style={{opacity:'0'}}/>
        </div>
      )
    }
    else if (path === '/playground') {
      return (
        <div>
          <div id='background-1' style={{opacity:'0', background: this.state.homeGradient}}/>
          <div id='background-2' style={{opacity:'0'}}/>
          <div id='background-3' style={{opacity:'1'}}/>
        </div>
      )
    }
    else {
      return null
    }

}
}



class Main extends Component {
  render() {
    var pathname = this.props.location.pathname
    var history = this.props.history
    return (
      (pathname === '/' || pathname === '/work' || pathname.startsWith('/playground')) &&
      <div>
        <Background pathname={pathname}/>
        <NavBar {...this.props}/>
        <div id='vertical-line-left' onClick={()=>{toWork(history)}} className='vertical-line'/>
        <div id='vertical-line-right'  onClick={()=>{toPlayground(history)}} className='vertical-line'/>
      </div>
    

    )
  }
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

var MyScroll = withRouter(ScrollToTop)



class App extends Component {
  constructor() {
      super();
      this.state = {
        display: 'content-hide'
      }
  }

  conponentWillMount() {
    console.log('before app mounts!');
  }

  componentDidMount() {
    setTimeout(() => {
      //document.getElementById('load-parent').removeChild(document.getElementById('load-child'));
      //$('#initial-background').animate({transform: 'translate(-50%, -50%) scale(0.5)'}, 5000);
      $('.initial-background').addClass('initial-background-shrink');
      this.setState({
        display: 'content-show'
      });
    }, 0);
    
  }


  render() {
    console.log('app is re-rendered!')
    return (
      <Router>
        <MyScroll>
          <div className={this.state.display}>
            <Route path='/' component={Main}/>
            <Route exact path="/" component={Content}/>
            <Route exact path="/work" component={()=><Work/>}/>
            <Route path="/playground" component={()=><Playground/>}/>
            <Route path="/work/taptile" component={TapTile}/>
            <Route path="/work/gtmobile" component={GtMobile}/>
            <Route path="/work/mood" component={Mood}/>
            <Route path="/work/reco" component={Reco}/>
            <Route path="/work/wardrober" component={Wardrober}/>
            <Route path="/work/elavon" component={Elavon}/>
            <Route path="/work/lifedash" component={LifeDash}/>
            <Route path="/work/rostery" component={Rostery}/>
            <Route path="/work/yelp" component={Yelp}/>
            <Route path="/work/misc" component={(router)=>(<Misc router={router}/>)}/>
          </div>
        </MyScroll>
      </Router>
    );
  }
}

export default App;
