import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import img from './logo.jpg'

class Header extends React.Component{
	logout(){
		if (confirm("确定退出系统吗？")){
			localStorage.clear();
			window.location = '/login';
		}
	}
	render() {
		return (
		  <div style={{width:"100%",height:"2em",position:"relative"}}>
		  	<img src={img} className='pull-left header-logo'/>
		    <ul className="nav nav-pills">
				  <li role="presentation">
						<IndexLink to='/' activeClassName='route-active btn btn-primary'>
				      首页
				    </IndexLink>
				  </li>
				  <li role="presentation">
						<Link to='/Data' activeClassName='route-active btn btn-primary'>
				      资料
				    </Link>
				  </li>
				  <li role="presentation">
						<Link to='/UrgeDebt' activeClassName='route-active btn btn-primary'>
				      催收
				    </Link>
				  </li>
				  <li role="presentation">
						<Link to='/Manage' activeClassName='route-active btn btn-primary'>
				      管理
				    </Link>
				  </li>
				  <li role="presentation">
						<Link to='/Statistical' activeClassName='route-active btn btn-primary'>
				      统计
				    </Link>
				  </li>
				  <li role="presentation">
						<Link to='/Financial' activeClassName='route-active btn btn-primary'>
				      财务
				    </Link>
				  </li>
				  <li role="presentation">
						<Link to='/System' activeClassName='route-active btn btn-primary'>
				      系统
				    </Link>
				  </li>
				  <li className="a-logout pull-right" onClick={this.logout.bind(this)}><a href="javascript:;">退出系统</a></li>
				  <li className="a-logout pull-right"><a href="javascript:;">设置</a></li>
				</ul>
		  </div>
		)
	}
}
export default Header
