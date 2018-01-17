import { LoginStackNav } from "app/src/components/navigators/LoginStackNavigator"
import { NavigationActions } from "react-navigation";
import { APP } from "app/src/constants"

const initialState = LoginStackNav.router.getStateForAction(NavigationActions.init());

const loginReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case APP.BACK_ROUTE: {
            nextState = LoginStackNav.router.getStateForAction(NavigationActions.back(), state);
            break;
        }

        case APP.GO_TO_ROUTE: {
            const a = LoginStackNav.router.getActionForPathAndParams(action.payload.routeName);
            if (a)
                nextState = LoginStackNav.router.getStateForAction(a, state);    
            break;       
        }

        case APP.GO_TO_MAIN_ROUTE: {
            if (action.payload.routeName === APP.NAV.LOGIN_PAGE) {
                const a = LoginStackNav.router.getActionForPathAndParams(action.payload.routeSubname);
                nextState = LoginStackNav.router.getStateForAction(NavigationActions.init());
            }
            break;
        }

        default:
            nextState = LoginStackNav.router.getStateForAction(action, state);
            break;
    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default loginReducer;