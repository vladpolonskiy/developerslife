import {FETCH_ENTRIES_SUCCESS} from '../constants';

export default category(state = 'latest', action) {
	switch (action.type) {
		case FETCH_NEWS_SUCCESS:
			return action.category;

		default:
			return state;
	}
}