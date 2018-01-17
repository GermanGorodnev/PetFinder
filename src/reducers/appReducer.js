import { APP } from "app/src/constants"
import AppNavigator, {START_ROUTE} from "app/src/components/navigators/AppNavigator"
import {
    
} from "react-navigation"

const initialState = {
    language: APP.LANG.RUS,
    currentRouteName: START_ROUTE,
    appState: undefined
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case APP.BACK_ROUTE: {
        //     return {
        //         ...state,
        //         currentRouteName: action.payload.routeName
        //     }
        // }
        
        // case APP.GO_TO_ROUTE: {
        //     return {
        //         ...state,
        //         currentRouteName: action.payload.routeName,
        //     };
        // }

        case APP.GO_TO_MAIN_ROUTE: {
            return {
                ...state,
                currentRouteName: action.payload.routeSubname,
            }
        }

        case APP.UPDATE_ROUTE_NAME: {
            return {
                ...state,
                currentRouteName: action.payload.newRouteName,
            }
        }




        case APP.SET_STATE: {
            return {
                ...state,
                appState: action.payload.newState
            }
        }

        case APP.CHANGE_LANGUAGE: {
            return {
                ...state,
                language: action.payload.newLang
            }
        }

        default:
            break;
    }

    return state;
} 