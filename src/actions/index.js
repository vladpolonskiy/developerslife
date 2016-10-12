import {
	FETCH_ENTRIES_SUCCESS,
	FETCH_ENTRIES_ERROR,
	CHANGE_VIEW_MODE,
	FETCH_ENTRY_SUCCESS,
	FETCH_ENTRY_ERROR
} from '../constants';
import axios from 'axios';

// Fetching entries feed
export function fetchEntries(category, pageNum, pageSize) {
	return (dispatch) => {
		return axios.get(`http://developerslife.ru/${category}/${pageNum}?json=true&pageSize=${pageSize}&types=gif`)
						.then( (result) => dispatch({type: FETCH_ENTRIES_SUCCESS, entries: result.data.result, category, pageNum, pageSize}) )
						.catch( (error) => dispatch({type: FETCH_ENTRIES_ERROR, error: error}) );
	};
}

// Fetching entry single
export function fetchEntry(entryId, entries = []) {
	if (entries.length > 0)
		var entry = entries.find( (entry) => (entry.id === parseInt(entryId, 10)) );

	// If we have needed entry in array - get it
	if (!!entry)
		return {type: FETCH_ENTRY_SUCCESS, entry};

	// Else - fetch it
	return (dispatch) => {
		return axios.get(`http://developerslife.ru/${entryId}?json=true`)
						.then( (result) => dispatch({type: FETCH_ENTRY_SUCCESS, entry: result.data}) )
						.catch( (error) => dispatch({type: FETCH_ENTRY_ERROR, error: error}) );
	};
}

// Chenge view mode
export function changeViewMode(viewMode) {
	return {type: CHANGE_VIEW_MODE, viewMode };
}


