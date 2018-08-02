import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './style.css'


class Hobbies extends Component {

  render() {
    return (
    	<div>
    		 <Navbar loc="hobbies"/>
    		<div class = "content">

		      	<h1 class="center">What I like to spend my free time on..</h1>
		    	<div class="paragraphs">			    	
				    

			    	<a href="http://societyofwomenengineers.swe.org/support-swe/donate-and-other-ways-to-give">
				    	<p>
				    		<strong>SWE</strong> - Society of Women Engineers: I was the most active in the outreach committee, where
				    		I focused on reaching out to local highschools and middle school girls and hosting interactive
				    		events that were meant to inspire them to study STEM.
							<p class="overlay"></p><p class="overlayText">Donate to Support SWE!</p>

				    	</p>
				    </a>
			    	<a href="http://www.feedingamerica.org/take-action/volunteer/">
				    	<p>
				    		<strong>Albany Food Bank</strong>: I volunteer here about once or twice a month where volunteers organizeing
				    		donations so that they can be properly distributed to people that need them. 
				    		<p class="overlay"></p><p class="overlayText">Get Involved!</p>
				    	</p>
			    	</a>
			    	<a href="https://www.rescuingleftovercuisine.org/volunteer">
				    	<p>
				    		<strong>Rescuing Leftover Cuisine</strong>: This organization makes it very easy way to do some good whenever I
				    		have some extra time on my hands. I just go to a participating location such as a coffee shop or 
				    		deli use supplied trash bags full of food baked just that morning because it would go stale overnight,
				    		and carry the food to a nearby homeless shelter to which the location is given by RLC.
				    		<p class="overlay"></p><p class="overlayText">Get Involved!</p>
				    	</p>
			    	</a>
			    	<a href="http://rsa.union.rpi.edu/page.php?p=programs">
				    	<p>
					    	<strong>RSA</strong> - Resident Student Association: In my sophomore year of college
					    	I joined the Hall council for my residence hall and helped coordinate campus-wide 
					    	events for students. Awarded Hall of the year, I helped plan events aimed towards
					    	building comraderie for the hall such as Hot Cocoa Movie Night, a halloween costume
					    	fasion show, a goGreen event for Earth Day and an annual Quadapalooza that kicks 
					    	off summer break festivities.
					    	<p class="overlay"></p><p class="overlayText">Check out what we do!</p>

				    	</p>
				    </a>
			    	<h1>The real <i>hobby-ish</i> Hobbies</h1>
			    	<p>Rock Climbing, Reading, Broadway, Cooking?</p>

			    </div>

			</div>
		    <Footer/>
    	</div>
    )
  }
}

export default Hobbies;
