import {combineReducers} from 'redux';
import entries from './Entries';
import category from './Category';
import pageNum from './PageNum';
import pageSize from './PageSize';
import viewMode from './ViewMode';
import currentEntry from './CurrentEntry';
import pageCount from './PageCount';

const rootReducer = combineReducers({
	entries,
	category,
	pageNum,
	pageCount,
	pageSize,
	viewMode,
	currentEntry
});

export default rootReducer;
