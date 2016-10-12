import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this._handleClick = this._handleClick.bind(this);
	}

	_handleClick(e) {
		switch (e.currentTarget.getAttribute("name")) {
			case 'latest':
				break;

			case 'top': 
				break;

			case 'hot':
				break;

			case 'random':
				break;

			default:
				break;
		}
	}

	render() {
		return (
			<div className="header">
				<div className="logo">
					<Link to="/"><img src="/assets/img/logoru.png" alt="" /></Link>
				</div>
				<div className="headerToolbar">
	                <ul>
	                    <li>
	                    	<span onClick={this._handleClick} name="latest" className="jslink">
	                    		<span className="topLink">entries.<span className="linkTitle">byDate();</span></span>
	                    		<span className="comment">//последние</span>
	                    	</span>
	                    </li>
	                    <li>
	                    	<span onClick={this._handleClick} name="top" className="jslink">
	                    		<span className="topLink">entries.<span className="linkTitle">byRating();</span></span>
	                    		<span className="comment">//лучшие</span>
	                    	</span>
	                    </li>
	                    <li>
	                    	<span onClick={this._handleClick} name="hot" className="jslink">
	                    		<span className="topLink">entries.<span className="linkTitle">hot();</span></span>
	                    		<span className="comment">//горячие</span>
	                    	</span>
	                    </li>
	                    <li>
	                    	<span onClick={this._handleClick} name="random" className="jslink">
	                    		<span className="topLink">entries.<span className="linkTitle">random();</span></span>
	                    		<span className="comment">//рандомизатор</span>
	                    	</span>
	                    </li>
	                </ul>
				</div>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	entries: state.entries,
	viewMode: state.viewMode,
	pageNum: state.pageNum,
	pageSize: state.pageSize,
	category: state.category,
	currentEntry: state.currentEntry
});

let mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Header);