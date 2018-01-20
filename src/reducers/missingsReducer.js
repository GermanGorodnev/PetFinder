import { MISSINGS } from "app/src/constants"

const initialState = {
    list: [], // array of objs
    newMissing: {
        polygons: [],
        centerPosition: {},
        sending: false,
        sended: false,
        error: null,
    },
    fetching: false,
    error: null
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case MISSINGS.ADD_NEW: {
            return {
                ...state,
                newMissing: {
                    ...state.newMissing,
                    sending: true,
                    sended: false,
                }
            }
        }

        case MISSINGS.ADD_NEW_SUCCESS: {
            return {
                ...state,
                newMissing: {
                    ...state.newMissing,
                    sending: false,
                    sended: true,
                    error: null,
                }
            }
        }

        case MISSINGS.ADD_NEW_ERROR: {
            return {
                ...state,
                newMissing: {
                    ...state.newMissing,
                    sending: false,
                    sended: false,
                    error: action.payload.error
                }
            }
        }


        case MISSINGS.NEW_UPDATE_POLYGONS: {
            return {
                ...state,
                newMissing: {
                    ...state.newMissing,
                    polygons: action.payload.polygons
                }
            }
        }


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