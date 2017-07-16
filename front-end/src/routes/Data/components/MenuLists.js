import React, { Component } from 'react'
class MenuLists extends Component {
	componentDidMount(){

	}
	onSwitchMenuLists(text){
		this.props.switchMenuLists(text);
	}
	render(){
		let { MenuLists } = this.props;
		let menus = MenuLists.map((each, i) => 
			<li className="list-group" key={i} onClick={this.onSwitchMenuLists.bind(this, each)}>{ each.text }</li>
		);
		return (
			<ul className="group">
				{ menus }
			</ul>
		)
	}
}

export default MenuLists