import React from 'react';
import {Link} from 'react-router';

export default class Entry extends React.Component {

	shouldComponentUpdate(nextProps) {
		return nextProps.id !== this.props.id;
	}

	render() {
		let {id, author, date, commentsCount, description, previewURL, gifURL, votes, single, viewMode} = this.props;
		let entryLink = (!single) ? 
							(<Link className="entryLink" to={'/entries/' + id}>{'Entry' + id}</Link>) : 
							(<span className="entryLink">{'Entry' + id}</span>);
		let image = (viewMode === 'charge') ? 
							(<img className="gif" src={gifURL} alt="" />) :
							(<img ref="image" className="gif" src={previewURL} alt="" />);
		
		date = new Date(date);
		date = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

		return (
			<div className="entry">
				<div className="comment">
			        /**<br/>&nbsp;* Author: <span className="entryLink comment">{author}</span><br/>&nbsp;* Date: {date}<br/>&nbsp;*/
			    </div>
			    <div className="entryHeader">
			    	<span className="var">var </span>
			    	{entryLink} = <span className="bolder">{'{'}</span>
			    </div>
			    <div className="code">
			    	<span className="title">desc</span>:
			    	<span className="value">'{description}'</span>,
			    </div>
			    <div className="code">
			    	<span className="title">image</span>:
			    </div>
			    <div className="image">
			    	{image}
			    </div>
			    <div className="code">
			    	<span className="title">rating</span>:
			    	<span className="value rating bolder">{votes}</span>,
    			</div>
    			<div className="code">
    				<span className="title">comments</span>:
    				<span className="value bolder">{commentsCount}</span>
    			</div>
    			<div>
    				<span className="bolder" style={ {opacity: .6} }>};</span>
    			</div>
			</div>
		);
	}
}