import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  withRouter,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import $ from 'jquery';

import './toggle.css'

class Toggle extends Component {
   constructor() {
      super();
      this.state = {
        checked: true,
        dayClass: 'bg-hide',
        nightClass: 'bg-show',
        descriptionClass: 'description-hide',
        tooltipClass: 'tooltip-hide'
      };

  }

  handleCheck() {
    this.setState({
      checked : !this.state.checked,
      dayClass: this.state.checked ? 'bg-show' : 'bg-hide',
      nightClass: !this.state.checked ? 'bg-show' : 'bg-hide',
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        descriptionClass: ''
      });
    }, 200);
  }

  handleClose() {
    this.setState({
      descriptionClass: 'description-hide',
      tooltipClass: ''
    });
  }

  handleTooltip() {
    this.setState({
      descriptionClass: '',
      tooltipClass: 'tooltip-hide'
    });
  }

  componentWillUnmount() {
    $('#navbar').removeClass('toggle-navbar-dark-bg')
  }






  render() {
    if (this.state.checked) {
      $('#navbar').addClass('toggle-navbar-dark-bg')
    }
    else {
      $('#navbar').removeClass('toggle-navbar-dark-bg')
    }
    return (
        <div id='toggle-container' className="wrapper">
          <div className={'bg bg-day ' + this.state.dayClass}>
          </div>
          <div className={'bg bg-night ' + this.state.nightClass}>
          </div>
          <div className={'tooltip-container ' + this.state.tooltipClass} onClick={this.handleTooltip.bind(this)}>
            <img className='tooltip' src={require(this.state.checked ? './img/question_icon-dark_bg.svg' :'./img/question_icon.svg')}/>
          </div>
          <div className={'description-container ' + this.state.descriptionClass}>
            <div className='description'>
            <div className='close' onClick={this.handleClose.bind(this)}>
              <img src={require('./img/close_icon.svg')}/>
            </div>
            <p>
              Hey there :D
            </p>
              <p>Microinteraction is one of my favorite subjects in design. They add enjoyment and personality to a product in such a subtle 
              yet profound fashion.</p>
              <p>
                Here is a day-night toggle with a little spice added. Go ahead and play with it!
              </p>

              <p>
                This is where I experiment with microinteractions using some HTML and CSS. I hope you find them interesting as much as I enjoyed creating them.
              </p>

            </div>
          </div>
          <div className="toggle">
            <input className="toggle-input" type="checkbox"  onClick={this.handleCheck.bind(this)} checked={this.state.checked} />
            <div className="toggle-bg"></div>
            <div className="toggle-switch">
              <div className="toggle-switch-figure"></div>
              <div className="toggle-switch-figureAlt"></div>
            </div>  
          </div>
        </div>
      )
  }
}

export default Toggle