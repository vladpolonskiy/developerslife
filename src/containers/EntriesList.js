import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import Entry from '../components/Entry';
import Header from './Header';

class EntriesList extends React.Component {
	componentWillMount() {
		let {actions, category, pageNum, pageSize} = this.props;
		actions.fetchEntries(category, pageNum, pageSize);
	}

	render() {
		let {entries, category, viewMode} = this.props,
			header = null;

		switch (category) {
			case 'latest':
				header = '// Последние';
				break;

			case 'top':
				header = '// Лучшие';
				break;

			case 'hot':
				header = '// Горячие';
				break;

			default:
				break;
		}

		return (
			<div className="center">
				<Header />
				<div className="content">
					<h3 className="comment pageTitle">{header}</h3>
					{entries.map( (entry) => <Entry {...entry} key={entry.id} viewMode={viewMode} /> )}
				</div>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	entries: state.entries,
	category: state.category,
	pageNum: state.pageNum,
	pageSize: state.pageSize,
	viewMode: state.viewMode
});

let mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});             

export default connect(mapStateToProps, mapDispatchToProps)(EntriesList);