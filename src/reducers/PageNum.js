import {FETCH_ENTRIES_SUCCESS} from '../constants';

export default function pageNum(state = 0, action) {
	switch (action.type) {
		case FETCH_ENTRIES_SUCCESS:
			return action.pageNum;

		default:
			return state;
	}
}