import {
    FETCH_FAVOURITES_REQUEST,
    FETCH_FAVOURITES_SUCCESS,
    FETCH_FAVOURITES_FAILURE,

    UPDATE_FAVOURITE_REQUEST,
    UPDATE_FAVOURITE_SUCCESS,
    UPDATE_FAVOURITE_FAILURE
} from '../constants/action-types';

const initialState = {
    isLoading: false,
    error: null,
    hash: {},
    itemId: null
};

export default function favourites(state = initialState, action) {
    switch (action.type) {
        case FETCH_FAVOURITES_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }

        case FETCH_FAVOURITES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hash: {
                    ...state.hash,
                    ...action.response.favourites
                }
            };
        }

        case FETCH_FAVOURITES_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }

        case UPDATE_FAVOURITE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                itemId: action.itemId
            };
        }

        case UPDATE_FAVOURITE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                itemId: null,
                hash: {
                    ...state.hash,
                    [action.itemId]: !state.hash[action.itemId]
                }
            }
        }

        case UPDATE_FAVOURITE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                itemId: null
            };
        }

        default: {
            return state;
        }
    }
}
