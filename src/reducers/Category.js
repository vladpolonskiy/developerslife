import {FETCH_ENTRIES_SUCCESS} from '../constants';

export default function category(state = 'latest', action) {
	switch (action.type) {
		case FETCH_ENTRIES_SUCCESS:
			return action.category;

		default:
			return state;
	}
}