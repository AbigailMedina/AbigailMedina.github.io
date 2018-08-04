import React, { Component } from 'react'
import { Button, Icon } from 'reactbulma';
import './css/Intro.css'


class Intro extends Component {

  render() {
    return (
    	<div class = 'content' align = 'center'>
	    	<div class ="title">
	    		<img src='/profilePic.jpg' alt = "me"/>	
		    	<p class="header">
			      Abigail Medina
		    	</p>
	    	</div>
	    	<p class = "aboutMe">
	    	Hi, I am a Junior at Rensselaer Polytechnic Institute working towards
	    	a Computer Science major and Copmuter Systems Engineering minor.
	    	</p>
	    	<Button title="resume">
	      		<a href = "https://docs.google.com/document/d/1T8tE_Pz34CRaQX0qKJiAc1cPEU1SYaiq4VJ4v9tgJjU/export?format=pdf">
		      		<Icon>
						<i class="fa fa-file" aria-hidden="true"></i>
					</Icon><span>downlad my resume</span>
	      		</a>

	      	</Button>
    	</div>
    )
  }
}

export default Intro;
