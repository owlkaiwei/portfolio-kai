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

import './face.css'

class Face extends Component {
   constructor() {
      super();
      this.state = {
        num: 1
      };

  }

  componentDidMount() {
    $('#avatar-'+this.props.name).mouseenter(()=>{
      $('#head-container-inner-'+this.props.name).toggleClass('head-animation-1')
      $('#head-container-inner-'+this.props.name).toggleClass('head-animation-2')
      $('#face-container-inner-'+this.props.name).toggleClass('face-animation-1')
      $('#face-container-inner-'+this.props.name).toggleClass('face-animation-2')
    })
    $('#avatar-'+this.props.name).click(()=>{
      $('#head-container-inner-'+this.props.name).toggleClass('head-animation-1')
      $('#head-container-inner-'+this.props.name).toggleClass('head-animation-2')
      $('#face-container-inner-'+this.props.name).toggleClass('face-animation-1')
      $('#face-container-inner-'+this.props.name).toggleClass('face-animation-2')



      if (this.state.num === 1) {
        $('#text-container-inner-'+this.props.name+'-bd').toggleClass('text-animation-1')
        $('#text-container-inner-'+this.props.name+'-bd').toggleClass('text-animation-2')
        //randomization goes here
        this.setState({num: 2})
      }
      else if (this.state.num === 2) {
        $('#text-container-inner-'+this.props.name+'-xyx').toggleClass('text-animation-1')
        $('#text-container-inner-'+this.props.name+'-xyx').toggleClass('text-animation-2')
        this.setState({num: 1})
      }
    })
  }



  render() {
    return (
         <svg className='face-svg' xmlns="http://www.w3.org/2000/svg"viewBox="0 0 328 314">
          <g id={'avatar-'+this.props.name} >
            <g className='head-container-outer' transform='translate(68, 50)'>
              <g id={'head-container-inner-'+this.props.name} className='head-animation-1'>
                <image id={'head-'+this.props.name} width='200px' height='200px' className='head' xlinkHref={require('./img/faces/' + this.props.name + '/head.png')} />
              </g>
            </g>
            <g className='face-container-outer' transform='translate(130, 135)'>
              <g id={'face-container-inner-'+this.props.name} className='face-animation-1'>
                <image id={'face-'+this.props.name} width='75px' height='75px' className='face' xlinkHref={require('./img/faces/' + this.props.name + '/face.png')} />
              </g>
            </g>
            { (this.props.name === 'ym') &&
            <g>
              <g className='text-container-outer' transform='translate(70, -20)'>
                <g id={'text-container-inner-'+this.props.name+'-bd'} className='text-animation-1'>
                  <image id={'text-'+this.props.name} width='200px' height='75px' className='text' xlinkHref={require('./img/faces/' + this.props.name + '/text-bd.svg')} />
                </g>
              </g>
              <g className='text-container-outer' transform='translate(115, 0)'>
                <g id={'text-container-inner-'+this.props.name+'-xyx'} className='text-animation-1'>
                  <image id={'text-'+this.props.name} width='100px' height='50px' className='text' xlinkHref={require('./img/faces/' + this.props.name + '/text-xyx.svg')} />
                </g>
              </g>
            </g>
            }
          </g>
      </svg>
      )
  }
}

export default Face