import { MISSINGS } from "app/src/constants"

const initialState = {
    list: [], // array of objs
    fetching: false,
    error: null
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case MISSINGS.FETCH_MISSINGS: {
            return {
                ...state,
                fetching: true,
                error: null,
            }
        }
        case MISSINGS.FETCH_MISSINGS_SUCCESS: {
            return {
                ...state,
                fetching: false,
                list: action.payload.missingsArray
            }
        }
        case MISSINGS.FETCH_MISSINGS_ERROR: {
            return {
                ...state,
                fetching: false,
                error: action.payload.error,
            }
        }

        default:
            break;
    }

    return state;
} 