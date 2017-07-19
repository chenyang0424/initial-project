import React, { Component } from 'react'
class MenuLists extends Component {
	componentDidMount(){

	}
	onSwitchMenuLists(text){
		this.props.switchMenuLists(text);
	}
	render(){
		let { menuList } = this.props;
		var classFocus;
		let menus = menuList.map((each, i) =>{
			classFocus = each.show ? "list-group-item selected-menu" : "list-group-item";
			return <a href="javascript:;" className={classFocus} key={i} onClick={this.onSwitchMenuLists.bind(this, each.text)}>{ each.text }</a>
		});
		return (
			<div className="list-group">
				{ menus }
			</div>)
	}
}

export default MenuLists