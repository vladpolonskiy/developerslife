import {combineReducers} from 'redux';
import entries from './Entries';
import category from './Category';
import pageNum from './PageNum';
import pageSize from './PageSize';
import viewMode from './ViewMode';
import currentEntry from './CurrentEntry';

const rootReducer = combineReducers({
	entries,
	category,
	pageNum,
	pageSize,
	viewMode,
	currentEntry
});

export default rootReducer;