import React, { Component } from 'react'
import { Button, Icon } from 'reactbulma';

import './css/Footer.css'


class Footer extends Component {

  render() {
    return (
      	<footer>
	      	contact me:

      	   	<Button title = "github">
              	<a href="https://github.com/AbigailMedina">
	              	<Icon>
						<i class="fab fa-github"></i>
					</Icon>
	            </a>
            </Button>
	      	<Button title="email">
	      		<a href = "mailto::medina2@rpi.edu">
		      		<Icon>
						<i class="fas fa-envelope-square"></i>
					</Icon>
	      		</a>

	      	</Button>
	      	<Button title="linkedin">
	      		<a href = "https://www.linkedin.com/in/abigail-m/">
		      		<Icon>
	      				<i class="fab fa-linkedin"></i>
					</Icon>
	      		</a>

	      	</Button>
	    </footer>
    	
    )
  }
}

export default Footer;
