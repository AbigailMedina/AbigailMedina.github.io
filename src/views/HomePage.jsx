import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Intro from './Intro'
import './style.css'


class HomePage extends Component {

  render() {
    return (
    	<div>
	    	<div>
	         	<Navbar loc='home'/>
	         	<p>hi</p>
		    </div>
	      <Intro/>
	      <Footer/>
    	</div>
    )
  }
}

export default HomePage;
