import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import Entry from '../components/Entry';
import Header from './Header';
import Pagination from '../components/Pagination';

class EntriesList extends React.Component {
	componentWillMount() {
		let {actions, category, pageNum, pageSize} = this.props;
		actions.fetchEntries(category, pageNum, pageSize);
	}

	render() {
		let {entries, category, viewMode, pageNum, pageSize, pageCount, actions} = this.props,
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
					<Pagination pageWalk={actions.fetchEntries} category={category} pageSize={pageSize} pageNum={pageNum} pageCount={pageCount} />
				</div>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	entries: state.entries,
	category: state.category,
	pageNum: state.pageNum,
	pageCount: state.pageCount,
	pageSize: state.pageSize,
	viewMode: state.viewMode
});

let mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});             

export default connect(mapStateToProps, mapDispatchToProps)(EntriesList);