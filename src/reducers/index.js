import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	entries,
	category,
	pageNum,
	pageSize
});

export default rootReducer;