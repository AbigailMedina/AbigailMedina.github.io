import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './style.css'

class SchoolPage extends Component {

  render() {
    return (
    	<div>
	      
	      <div>
	      	<Navbar loc='school'/>

	      	<div class = 'content'>
	      		<h1 class = 'center'>My Most Influential Classes</h1>
	      		<div class="row">
				  	<div class="column">
					    <h2>Data Structures</h2>
					  </div>
				  	<div class="column">
					    <h2>Computer Organization</h2>
					  </div>
				  	<div class="column">
				  		<h2>Principles of Software</h2>
					</div>
				</div>
				<div class="row">
				  	<div class="column">
						<p>
				  			"This was the most code heavy class I have taken at school. The most important lesson I learned the important lesson that it is ok to start from scratch when an approach just isn't working"
				 		</p>					  </div>
				  	<div class="column">
				  		<p>
				  			"This was hands down my favorite class so far. It taught me about boolean logic gates, Cache, assembly language, instruction types. I liked that it was a new side to Computer Science that I hadnt seen before. Because of this, I decided to get a minor in Computer Systems Engineering."
				 		</p>					  </div>
				  	<div class="column">
				  		<p>
				  			"I enjoyed this class because it used the knowledge from the old classes and taught me how to write tests and documentation, how to reduce side effects of functions and modularize my code."
				 		</p>
					</div>
				</div>

		      	<h1 class = 'center'>Upcoming Classes</h1>

				<p class="center">
				  // <p>Rensselaer Center for Open Source - RCOS</p>
				  // <p>Circuits</p>
				  // <p>Programming Languages</p>
				  <p>Software Design and Documentation</p>
				  <p>Computer Architecture, Networks, and Operating Systems</p>
				</p>

				<h1 class = 'center'>Skills</h1>
				<div class = 'center'>Java, Python, C++, Scala, JavaScript, HTML, CSS, Scheme</div>
			</div>

	      </div>
	      <Footer/>
    	</div>
    )
  }
}

export default SchoolPage;
