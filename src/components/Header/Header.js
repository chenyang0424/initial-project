import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import img from './volume_up.png'

export const Header = () => (
  <div style={{width:"100%",height:"2em"}}>
  	<img src={img} className='pull-left header-logo'/>
    <ul className="nav nav-pills">
		  <li role="presentation">
				<IndexLink to='/' activeClassName='route-active'>
		      Home
		    </IndexLink>
		  </li>
		  <li role="presentation">
				<Link to='/Counter1' activeClassName='route-active'>
		      item
		    </Link>
		  </li>
		  <li role="presentation">
				<Link to='/Counter2' activeClassName='route-active'>
		      item
		    </Link>
		  </li>
		  <li role="presentation">
				<Link to='/Counter3' activeClassName='route-active'>
		      item
		    </Link>
		  </li>
		  <li role="presentation">
				<Link to='/Counter4' activeClassName='route-active'>
		      item
		    </Link>
		  </li>
		</ul>
  </div>
)

export default Header
