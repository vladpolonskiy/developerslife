import {FETCH_ENTRIES_SUCCESS, FETCH_ENTRIES_ERROR} from '../constants';
import axios from 'axios';

// Fetching feed
export function fetchEntries(category, pageNum, pageSize) {
	return (dispatch) => {
		return axios.get(`http://developerslife.ru/${category}/${pageNum}?json=true&pageSize=${pageSize}&types=gif`)
						.then((result) => ({type: FETCH_ENTRIES_SUCCESS, entries: JSON.parse(result), category, pageNum, pageSize}))
						.catch((error) => ({type: FETCH_ENTRIES_ERROR, error: error}));
	};
}


