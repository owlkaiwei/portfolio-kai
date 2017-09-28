import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  withRouter,
  Link
} from 'react-router-dom';
import $ from 'jquery';
import 'jquery.easing';
import Loader from './components/Loader';
import logo from './logo.svg';
import './App.css';

var Scroll  = require('react-scroll');

var ScrollLink = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


var isFirstTime = true;


const toWork = (history) => {
  //console.log(currentPath);
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
        case '/playground': {
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
        case '/playground': {
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
        case '/playground': {
          break;
        }   
        case '/': {
          $('.after-animation').toggleClass('after-animation');
          $('#home-content').animate({opacity: '0'}, 500); 
          setTimeout(()=>{history.push('/playground') ;},500);
          break;
        }    

      }
}

const WingToWork = withRouter(
    ({history}) => (
      <g id='wing' onClick={()=>{toWork(history)}} >
              <path id='upperWing' className="cls-2 flipUpper"  fill='#8ae5ff' opacity='1' d="M80.2,117.55,186.67,1.3a4,4,0,0,1,5.65-.25l53.1,48.63a4,4,0,0,1,.25,5.65l-57,62.22Z"/>
              <path id='lowerWing' className="cls-3 flipLower"  fill='#8ae5ff' opacity='1' d="M245.42,185.42l-53.1,48.63a4,4,0,0,1-5.65-.25L80.2,117.55H188.68l57,62.22A4,4,0,0,1,245.42,185.42Z"/>
            </g>
      )
  )

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
        isScrolling: false
      };
      if (isFirstTime === true) {
        isFirstTime = false;
      };
  }

  componentDidMount() {
    console.log('a');
    $('#home-btn').toggleClass('after-animation');
    $('#home-content').scroll((function(event) {
      if (!this.state.isScrolling) {
        if(this.state.section===1 && $('#home-content').scrollTop() > this.state.scrollTop) {
          $('.letter-k').toggleClass('letter-k-show');
          $('#home-img').toggleClass('home-img-show'); 
          //$('#home-content').scrollTop($('#home-scroll-wrapper').height()*0.5, ()=>{console.log('callback!')});
          this.setState({section:2, scrollTop:$('#home-scroll-wrapper').height()*0.5, isScrolling: true});
          $('#home-content').animate({scrollTop:$('#home-scroll-wrapper').height()*0.5}, 500, (()=>{this.setState({isScrolling:false})}).bind(this));
        }

        else if (this.state.section===2 && $('#home-content').scrollTop() < this.state.scrollTop) {
          $('.letter-k').toggleClass('letter-k-show');
          $('#home-img').toggleClass('home-img-show'); 
          this.setState({section:1, scrollTop:0, isScrolling: true});
          $('#home-content').animate({scrollTop:0}, 500, (()=>{this.setState({isScrolling:false})}).bind(this));
        }
    }
    }).bind(this));
  }

  handleScroll(event) {
    console.log(event);
    $('.letter-k').toggleClass('letter-k-show');
    $('#home-img').toggleClass('home-img-show'); 
  }



  render() {
    return (
      <div id='home-content'>
        <div id='home-scroll-wrapper'>
          <svg className='letter-k letter-k-show' xmlns="http://www.w3.org/2000/svg" width='400' height='300' viewBox="0 0 246.72 236.23">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <g id='left-part'>
                  <path className="cls-1" fill='#3fa9f5' d="M0,205.13V8.55a4,4,0,0,1,4-4H76a4,4,0,0,1,4,4V236.23"/>
                  <polygon className="cls-4" fill='#8ad2ff' points="80.14 117.62 0 205.13 80 236.23 134.41 176.81 80.14 117.62"/>
                </g>
                <g className='right-part-reappear'>
                  <WingToWork />
                </g>
              </g>
            </g>
          </svg>

          <img id='home-img' width='300px' src={require('./img/IMG_7129.JPG')} />
        </div>
      </div>
    );
  }
}

const NavBar = withRouter(({history}) => {
  return (
  <div id='navbar'>
    <a
      id='work-btn'
      onClick={()=>{toWork(history)}}>
      W O R K
    </a>
    <a
      id='home-btn'
      onClick={()=>{toHome(history)}}
    >
      H O M E
    </a>
    <a
      id='playground-btn'
      onClick={()=>{toPlayground(history)}}
    >
      P L A Y G R O U N D
    </a>
  </div>
)})




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

class Work extends Component {
  componentWillMount() {
    $('#work-btn').toggleClass('after-animation');
  }
  render() {
    return (
    <div id='work-content'>
      <img width='300px' style={{position: 'fixed', top: '300px'}} src={require('./img/IMG_7129.JPG')} />
    </div>
    )
  }
}

class Playground extends Component {
  componentWillMount() {
    $('#playground-btn').toggleClass('after-animation');
  }
  render() {
    return (
    <div id='playground-content'>
      <img width='300px' style={{position: 'fixed', top: '300px'}} src={require('./img/IMG_7130.JPG')} />
    </div>
    )
  }
}

class Background extends Component {
  constructor() {
    //detect route first
    super();
    this.state = {
      index: 1
    }
  }


  componentDidMount() {
    for (var i = 1; i < 4; i++) {
      if (this.state.index === i) {$('#background-' + i).css('opacity', '1');}
      else {$('#background-' + i).css('opacity', '0');}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== undefined && nextProps.index !== this.state.index) {
      this.setState({index: nextProps.index});
      for (var i = 1; i < 4; i++) {
        if (nextProps.index === i) {$('#background-' + i).css('opacity', '1');}
        else {$('#background-' + i).css('opacity', '0');}
      }
    }
  }

  render() {
    return (
    <div>
    <div id='background-1'/>
    <div id='background-2'/>
    <div id='background-3'/>
    </div>
  )
}
}



class App extends Component {
  constructor() {
      super();
      this.state = {
        display: 'content-hide'
      }
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
    return (
      <Router>
        <Route render={({location}) => {
            return(
            <div className={this.state.display}>
            <Back />
            <div>
              <NavBar/>

              <Route exact path="/" component={Content}/>

              <Route path="/playground" component={()=><Playground/>}/>



              <Route path="/work" component={()=><Work/>}/>
            </div>
        </div>
          )}}
        />




        
      </Router>
    );
  }
}

export default App;
