import React from 'react';

export default class Pagination extends React.Component {
	constructor(props) {
		super(props);
		this._handleClick = this._handleClick.bind(this);
	}

	_handleClick(e) {
		let classes = e.currentTarget.className;
		let {category, pageNum, pageSize, pageWalk, pageCount} = this.props;

		if (classes.indexOf('nextPage') !== -1)
			pageNum += 1;
		else if (classes.indexOf('prevPage') !== -1)
			pageNum -= 1;
		else if (classes.indexOf('lastPage') !== -1)
			pageNum = pageCount;

		pageWalk(category, pageNum, pageSize);
	}

	render() {
		let {pageNum, pageCount} = this.props;

		let prevPage = pageNum !== 0 ? (
			<div className="code">
				<span onClick={this._handleClick} className="jslink prevPage">
					<span className="linkTitle">prevPage</span>:
					<span className="function">
						<span className="var">function</span>{' () { '}
						<span className="var">this</span>{'.page--; }, '}
						<span className="comment">//предыдущая страница</span>
					</span>
				</span>
			</div>	
		) : null;

		let nextPage = pageNum !== pageCount ? (
			<div className="code">
				<span onClick={this._handleClick} className="jslink nextPage">
					<span className="linkTitle">nextPage</span>:
					<span className="function">
						<span className="var">function</span>{' () { '}
						<span className="var">this</span>{'.page++; }, '}
						<span className="comment">//следующая страница</span>
					</span>
				</span>
			</div>
		) : null;

		return (
			<div className="pagination">
				<div>
					<span className="var">var</span> Pagination = <span className="bolder">{'{'}</span>
				</div>
				<div className="code">
					<span className="title">page</span>:<span className="value rating">{pageNum}</span>, <span className="comment">//текущая страница</span>
				</div>
				<div className="code">
			        <span onClick={this._handleClick} className="jslink lastPage">
			            <span className="linkTitle">lastPage</span>: <span className="var">function</span>{' () { '}<span className="var">this</span>.page =<span className="value">{pageCount}</span>{'; },'}
			            <span className="comment">//последняя страница</span>
			        </span>
			    </div>
			    {prevPage}
			    {nextPage}
			    <div>
			    	<span className="bolder">{'};'}</span>
			    </div>
			</div>
		);
	}
}