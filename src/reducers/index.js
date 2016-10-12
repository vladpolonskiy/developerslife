import {combineReducers} from 'redux';
import entries from './Entries';
import category from './Category';
import pageNum from './PageNum';
import pageSize from './PageSize';

const rootReducer = combineReducers({
	entries,
	category,
	pageNum,
	pageSize
});

export default rootReducer;