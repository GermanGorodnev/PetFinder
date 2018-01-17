import {HomeStackNav} from "app/src/components/navigators/HomeStackNavigator"
import { NavigationActions } from "react-navigation";
import { APP } from "app/src/constants"

const initialState = HomeStackNav.router.getStateForAction(NavigationActions.init());

const homeNav = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case APP.GO_TO_ROUTE: {
            const a = HomeStackNav.router.getActionForPathAndParams(action.payload.routeName);
            if (a)
                nextState = HomeStackNav.router.getStateForAction(a, state);
            break;
        }

        case APP.GO_TO_MAIN_ROUTE: {
            if (action.payload.routeName === APP.NAV.HOME_PAGE) {
                const a = HomeStackNav.router.getActionForPathAndParams(action.payload.routeSubname);
                nextState = HomeStackNav.router.getStateForAction(NavigationActions.init());
            }
            break;
        }

        default: {
            nextState = HomeStackNav.router.getStateForAction(action, state);
        }
    } 
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default homeNav;