import { PROFILE } from "app/src/constants"

const initialState = {
    loggedIn: false,
    loggingIn: false,
    reason: undefined,
    error: null
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE.LOGIN: {
            return {
                ...state,
                loggingIn: true,
            }
        }

        case PROFILE.LOGIN_SUCCESS: {
            return {
                ...state,
                loggedIn: true,
                loggingIn: false,
                error: null,
            }
        }

        case PROFILE.LOGIN_ERROR_INVALID: {
            return {
                ...state,
                loggedIn: false,
                loggingIn: false,
                reason: PROFILE.LOGIN_ERRORS.INVALID_PASSWORD,
                error: null
            };
        }

        case PROFILE.LOGIN_ERROR: {
            console.log(action.payload.error);
            return {
                ...state,
                loggedIn: false,
                loggingIn: false,
                error: action.payload.error
            };
        }

        default:
            break;
    }

    return state;
} 