import {FETCH_ENTRY_SUCCESS, FETCH_ENTRY_ERROR} from '../constants';

export default function currentEntry(state = {}, action) {
	let newState = {...state};

	switch (action.type) {
		case FETCH_ENTRY_SUCCESS:
			newState = action.entry;
			break;

		case FETCH_ENTRY_ERROR:
			console.log(action.error);
			break;

		default:
			break;
	}

	return newState;
}