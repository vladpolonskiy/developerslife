import {FETCH_ENTRIES_SUCCESS, FETCH_ENTRIES_ERROR} from '../constants';

export default function entries(state = [], action) {
	let newState = [...state];

	switch (action.type) {
		case FETCH_ENTRIES_SUCCESS:
			newState = [...action.entries];
			break;

		case FETCH_ENTRIES_ERROR:
			console.warn(action.error);
			break;

		default: 
			break;
	}

	return newState;
}