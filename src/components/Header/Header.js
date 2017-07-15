import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import img from './logo.png'

class Header extends React.Component{
	render() {
		return (
		  <div style={{width:"100%",height:"2em",position:"relative"}}>
		  	<img src={img} className='pull-left header-logo'/>
		    <ul className="nav nav-pills">
				  <li role="presentation">
						<IndexLink to='/' activeClassName='route-active'>
				      Home
				    </IndexLink>
				  </li>
				  <li role="presentation">
						<Link to='/Edit' activeClassName='route-active'>
				      Edit
				    </Link>
				  </li>
				  <li role="presentation">
						<Link to='/Doing' activeClassName='route-active'>
				      Doing
				    </Link>
				  </li>
				  <li role="presentation">
						<Link to='/Done' activeClassName='route-active'>
				      Done
				    </Link>
				  </li>
				  <li role="presentation">
						<Link to='/Help' activeClassName='route-active'>
				      Help
				    </Link>
				  </li>
				  <li className="a-logout pull-right"><a href="javascript:;">Sign Out</a></li>
				  <li className="a-logout pull-right"><a href="javascript:;">Settings</a></li>
				</ul>
		  </div>
		)
	}
}
export default Header
