import { AppNav, START_ROUTE } from "app/src/components/navigators/AppNavigator"
import { APP } from "app/src/constants"
import { NavigationActions } from "react-navigation";

const initialState = AppNav.router.getStateForAction(NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: START_ROUTE
        })
    ]
}));


const mainDrawerNav = (state = initialState, action) => {
    let nextState = undefined;
    switch (action.type) {
        case APP.GO_TO_MAIN_ROUTE: {
            const a = AppNav.router.getActionForPathAndParams(action.payload.routeName);
            nextState = AppNav.router.getStateForAction(a, nextState);
            break;
        }

        default: {
            nextState = AppNav.router.getStateForAction(action, state);
            break;
        }
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default mainDrawerNav;