import React from 'react';

class Sidebar extends React.Component {
	render() {
		return (
			<div className="right">
				<div className="widget" id="entriesOnPage">
					<div className="header comment">Записей на странице:</div>
					<div class="pure-form">
        				<form>
							<select name="entriesOnPage" size="1" class="countSelector pure-u-1">
							    <option value="5" selected="selected">5 записей</option>
							    <option value="10">10 записей</option>
							    <option value="15">15 записей</option>
							    <option value="20">20 записей</option>
							</select>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
