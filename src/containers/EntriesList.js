import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';

class EntriesList extends React.Component {
	componentWillMount() {
		let {actions, category, pageNum, pageSize} = this.props;
		actions.fetchEntries(category, pageNum, pageSize);
	}

	render() {
		return (
			<div className="center">
				<div className="header"></div>
				<div className="content"></div>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({entries: state.entries, category: state.category, pageNum: state.pageNum, pageSize: state.pageSize});

let mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});             

export default connect(mapStateToProps, mapDispatchToProps)(EntriesList);