import { FETCH_ITEMS_REQUEST } from '../constants/action-types';

export function fetchItems() {
    return {
        type: FETCH_ITEMS_REQUEST
    };
}
