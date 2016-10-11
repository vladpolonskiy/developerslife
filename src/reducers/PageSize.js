import {FETCH_ENTRIES_SUCCESS} from '../constants';

export default pageNum(state = 5, action) {
	switch (action.type) {
		case FETCH_ENTRIES_SUCCESS:
			return action.pageSize;

		default:
			return state;
	}
}