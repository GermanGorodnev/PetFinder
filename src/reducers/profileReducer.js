import { PROFILE } from "app/src/constants"

const initialState = {
    loggedIn: false,
    loggingIn: false,
    loginReason: undefined,
    loginError: null,

    registered: false,
    registering: false,
    registerReason: undefined,
    registerError: null,
};
export default function reducer(state = initialState, action) {
    switch (action.type) {

        /* ************************** LOGIN ***************************** */

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
                loginError: null,
            }
        }

        case PROFILE.LOGIN_ERROR_INVALID: {
            return {
                ...state,
                loggedIn: false,
                loggingIn: false,
                loginReason: PROFILE.LOGIN_ERRORS.INVALID_PASSWORD,
                loginError: null
            };
        }

        case PROFILE.LOGIN_ERROR: {
            console.error(action.payload.error);
            return {
                ...state,
                loggedIn: false,
                loggingIn: false,
                loginError: action.payload.error
            };
        }



        /* ************************** REGISTER ***************************** */

        case PROFILE.REGISTER: {
            return {
                ...state,
                registering: true,
            }
        }

        case PROFILE.REGISTER_SUCCESS: {
            return {
                ...state,
                registered: true,
                registering: false,
                registerError: null,
            }
        }

        case PROFILE.REGISTER_ERROR_EMAIL_USER: {
            return {
                ...state,
                registered: false,
                registering: false,
                registerReason: PROFILE.REGISTER_ERRORS.EMAIL_USED,
                registerError: null
            };
        }

        case PROFILE.REGISTER_ERROR: {
            console.error(action.payload.error);
            return {
                ...state,
                registered: false,
                registering: false,
                registerError: action.payload.error
            };
        }

        default:
            break;
    }

    return state;
} 