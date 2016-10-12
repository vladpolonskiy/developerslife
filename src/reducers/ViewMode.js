import {CHANGE_VIEW_MODE} from '../constants';

export default function viewMode(state = 'charge', action) {
	if (action.type === CHANGE_VIEW_MODE)
		return action.viewMode;

	return state;
}