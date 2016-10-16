import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';

class Sidebar extends React.Component {
	shouldComponentUpdate(nextProps) {
		return (this.props.viewMode !== nextProps.viewMode || this.props.pageSize !== nextProps.pageSize);
	}

	render() {
		let {actions, pageSize, viewMode, category} = this.props;
		let defaultEconom = viewMode === 'econom' ? true : false;
		let defaultCharge = viewMode === 'charge' ? true : false;

		return (
			<div className="right">
				<div className="widget" id="entriesOnPage">
					<div className="header comment">Записей на странице:</div>
					<div className="pure-form">
        				<form>
							<select onChange={(e) => {actions.fetchEntries(category, 0, e.target.value)}} defaultValue={pageSize} name="entriesOnPage" size="1" className="countSelector pure-u-1">
							    <option value="5">5 записей</option>
							    <option value="10">10 записей</option>
							    <option value="15">15 записей</option>
							    <option value="20">20 записей</option>
							</select>
							<div className="smallVMargin dashed greyText"></div>
							<div className="pure-form">
				                <div className="pure-g checkboxSelector">
				                    <div className="pure-u-1"><input type="radio" onClick={() => actions.changeViewMode('econom')} name="econom" defaultChecked={defaultEconom} /> Экономичный режим</div>
				                    <div className="pure-u-1"><input type="radio" onClick={() => actions.changeViewMode('charge')} name="econom" defaultChecked={defaultCharge} /> Полный режим</div>
				                </div>
				            </div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	category: state.category,
	pageSize: state.pageSize,
	viewMode: state.viewMode
});

let mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
