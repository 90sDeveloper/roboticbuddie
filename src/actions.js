import {CHANGLE_SEARCH_FIELD} from './constants'
export const setSearchField = (text) =>({
    type: CHANGLE_SEARCH_FIELD,
    payload: text
})