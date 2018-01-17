import { MissingsStackNav } from "app/src/components/navigators/MissingsStackNavigator"
import { NavigationActions } from "react-navigation";
import { APP } from "app/src/constants"

const initialState = MissingsStackNav.router.getStateForAction(NavigationActions.init());

const missingsReducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case APP.BACK_ROUTE: {
            nextState = MissingsStackNav.router.getStateForAction(NavigationActions.back(), state);
            break;
        }

        case APP.GO_TO_ROUTE: {
            const a = MissingsStackNav.router.getActionForPathAndParams(action.payload.routeName);
            if (a)
                nextState = MissingsStackNav.router.getStateForAction(a, state);    
            break;       
        }

        case APP.GO_TO_MAIN_ROUTE: {
            if (action.payload.routeName === APP.NAV.MISSINGS_PAGE) {
                const a = MissingsStackNav.router.getActionForPathAndParams(action.payload.routeSubname);
                nextState = MissingsStackNav.router.getStateForAction(NavigationActions.init());
            }
            break;
        }

        default:
            nextState = MissingsStackNav.router.getStateForAction(action, state);
            break;
    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default missingsReducer;