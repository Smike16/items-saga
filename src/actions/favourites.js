import { UPDATE_FAVOURITE_REQUEST } from '../constants/action-types';

/**
 * Update favourite flag in item
 *
 * @param {number} itemId
 * @returns {Object} redux action
 */
export function updateFavourite(itemId) {
    return {
        type: UPDATE_FAVOURITE_REQUEST,
        itemId
    };
}
