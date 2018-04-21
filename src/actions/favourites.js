import { UPDATE_FAVOURITE_REQUEST } from '../constants/action-types';

export function updateFavourite(itemId) {
    return {
        type: UPDATE_FAVOURITE_REQUEST,
        itemId
    };
}
