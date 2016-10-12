import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions';
import Entry from '../components/Entry';
import Header from './Header'

class EntriesSingle extends React.Component {
	componentWillMount() {
		this.props.actions.fetchEntry(this.props.params.id, this.props.entries);
	}

	render() {
		return 	(
			<div className="center">
				<Header />
				<div className="content">
					<Entry {...this.props.currentEntry} single={true} viewMode="charge" />
				</div>
			</div>
			);
	}
}

let mapStateToProps = (state) => ({entries: state.entries, currentEntry: state.currentEntry});
let mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(EntriesSingle);