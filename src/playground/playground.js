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
import './playground.css'

import Face from './components/face/face'
import Toggle from './components/toggle/toggle'


class Playground extends Component {

  componentDidMount() {
    $('#work-btn').removeClass('after-animation');
    $('#home-btn').removeClass('after-animation');
    $('#playground-btn').addClass('after-animation');

    $('#vertical-line-right').removeClass('vertical-line-right-work');
    $('#vertical-line-right').removeClass('vertical-line-right-home');
    $('#vertical-line-right').addClass('vertical-line-right-playground');

    $('#vertical-line-left').removeClass('vertical-line-left-work');
    $('#vertical-line-left').removeClass('vertical-line-left-home');
    $('#vertical-line-left').addClass('vertical-line-left-playground');

    $('#playground-content').removeClass('playground-hidden')
    $('#playground-content').addClass('playground-show')
  }


  render() {
    return (
    <div id='playground-content' className='playground-hide'>
      <Route exact path="/playground" component={Toggle}/>
      <Route exact path="/playground/avatar" component={()=><Face name='ym'/>}/>
    </div>
    )
  }
}

export default Playground

//<Face name='ym' />