import { FETCH_ITEMS_REQUEST } from '../constants/action-types';

/**
 * Fetch items
 *
 * @returns {Object} redux action
 */
export function fetchItems() {
    return {
        type: FETCH_ITEMS_REQUEST
    };
}
