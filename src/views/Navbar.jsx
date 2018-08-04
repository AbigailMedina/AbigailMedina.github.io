import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Favicon from'react-favicon'

import './css/Navbar.css'

class Navbar extends Component {

  	render() {
  		const loc = this.props.loc;
  		console.log(loc==='school', loc)
	    return (
			<div class = 'navbar' id = "nb">
				<Favicon url='/favicon.png'>
				<div>

					<Link class='name'to={'/'}>AM</Link>
					
					<div class = 'pages'>
						<Link to={'/'}>Home</Link>
						<Link to={'/school'}>Skills</Link>
				      	<Link to={'/experiences'}>Experience</Link>
				        <Link to={'/hobbies'}>Hobbies/ExtraCurriculars</Link>
				    </div>

				</div>
			</div>
		)
	}
}
export default Navbar;
// {loc !=='projects'?<Link to={'/projects'}>Projects</Link>:""}
// <div class = 'pages'>
// 	{loc !=='home'?<Link to={'/'}>Home</Link>:""}
// 	{loc !=='school' ? <Link to={'/school'}>Skills</Link>:""}
//   	{loc !=='experiences'?<Link to={'/experiences'}>Experience</Link>:""}
//     {loc !=='hobbies'?<Link to={'/hobbies'}>Hobbies/ExtraCurriculars</Link>:""}
// </div>