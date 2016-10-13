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

	shouldComponentUpdate(nextProps) {
		return (this.props.pageSize !== nextProps.pageSize) || (this.props.currentEntry.id !== nextProps.currentEntry.id);
	}

	componentWillReceiveProps(nextProps) {
		if ( (!!this.props.currentEntry.id && !!nextProps.currentEntry.id) && 
					this.props.currentEntry.id !== nextProps.currentEntry.id &&
					location.pathname !== `/entries/${nextProps.currentEntry.id}`) {
			this.context.router.push(`/entries/${nextProps.currentEntry.id}`);
		} 
	}

	_handleClick(e) {
		let {actions, pageSize} = this.props;
		let category = e.currentTarget.getAttribute("name");

		switch (category) {
			case 'latest':
			case 'top':
			case 'hot':
				actions.fetchEntries(category, 0, pageSize);
				this.context.router.push('/entries');
				break;

			case 'random':
				actions.fetchEntryRandom();
				break;

			default:
				break;
		}

		
	}

	// Enable context
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

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
	pageSize: state.pageSize,
	currentEntry: state.currentEntry
});

let mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Header);