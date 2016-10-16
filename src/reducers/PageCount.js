import {FETCH_ENTRIES_SUCCESS} from '../constants';

export default function pageCount(state = 0, action) {
	if (action.type === FETCH_ENTRIES_SUCCESS)
		return action.pageCount;
	return state;
}