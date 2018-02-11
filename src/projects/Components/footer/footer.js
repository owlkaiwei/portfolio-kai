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

import './footer.css';




class Footer extends Component {

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

      }



    componentWillReceiveProps(nextProps) {
        AOS.refresh();
    }


  render() {
    var footer = this.props.footer
    return (
        <div id='footer' className='row footer-container-out'>
            <a href={footer.leftUrl}  className='side-container footer-container-left col s6'>
                <div className='col s12 push-s3'>
                    <p>PREVIOUS </p>
                    <p>{footer.leftProjectName}</p>
                </div>
            </a>
            <a href={footer.rightUrl}  className='side-container footer-container-right col s6'>
                <div className='col s12 pull-s3'>
                    <p>NEXT </p>
                    <p>{footer.rightProjectName}</p>
                </div>
            </a>
        </div>
    
    )
  }
}

export default Footer