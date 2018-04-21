import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE
} from '../constants/action-types';

const initialState = {
    isLoading: false,
    error: null,
    list: [],
    total: null
}

export default function items(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEMS_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }

        case FETCH_ITEMS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                list: state.list.concat(action.response.items),
                total: action.response.total
            };
        }

        case FETCH_ITEMS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }

        default: {
            return state;
        }
    }
}
