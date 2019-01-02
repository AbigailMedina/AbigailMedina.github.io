import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './style.css'


class Experiences extends Component {

  render() {
    return (
    	<div>
    		 <Navbar loc="experiences"/>
    		<div class = "content">

		      	<h1 class="center">Things I&#39;ve done</h1>
		    	<div class="paragraphs">	
			    	<a href = "https://prsnt.app/">		    	
					    <p>
					    	<strong>Arazoo</strong>: This summer, I spent my days working for a startup named Arazoo.
					    	Although they have an established product, they decided to make a new one 
					    	with a new purpose. I was lucky enough to start working for them right as 
					    	they began production. I was brought on as a member of the dev team, and 
					    	as the summer progressed I worked with the Scala developer on the backend,
					    	and a Javascript developer to build the structure of the app. I later worked
					    	with the team designer to learn about how to enhance user experience and
					    	interface.
					    	<p class="overlay"></p><p class="overlayText">Checkout what the product has become...</p>

				    	</p>
				    </a>
			    	<p>
			    		I planned on using this internship to steer the focus of my studies for the remainder
				    	of my college career, however I cannot choose just yet. Scala challenges me. 
				    	UX intrigues me. And I plan on practicing all the skills I&#39;ve gained this summer for
				    	quite some time as I work with the company part-time as I continue school.
				    </p>
				    <p>
				    	<strong>Travel</strong>: I&#39;ve recently had the opportunity to see three countries
				    	and one continent I&#39;ve never seen before. Barceclona, Spain; Prague, Czech Republic;
				    	and Venice, Italy. Prague was the most beautiful, Spain had the most sights to see, and
				    	Venice had the most interesting architechture.
			    	</p>
			    	<p>
			    		<strong>Grace Hopper Conference</strong>:This year I had the opportunity to attend the Grace 
			    		Hopper Conference(GHC) in Houston, Texas on a scholarship along with a few other girls from 
			    		my school. It was a great experience being surrounded by strong women in technology supporting 
			    		eachother. The conference gave me opportunities to meet with recruiters at companies large and 
			    		small, to hear lectures from influential people in the field to learn new skills and tools. Coming
			    		from a school with a minimal percentage of female prescence studying a male dominated field, 
			    		GHC was a breath of fresh air. If anyone is sceptical of whether to attend the next conference,
			    		I would highly reccommend finding a sponsor and hopping on a plane.
			    	</p>

			    </div>

			</div>
		    <Footer/>
    	</div>
    )
  }
}

export default Experiences;
