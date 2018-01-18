import { APP } from "app/src/constants"

const URN_DP_TIME = 1//Math.floor(1000 * 0.005);

export function goToRoute(routeName) {
    return function (dispatch) {
        dispatch({
            type: APP.GO_TO_ROUTE,
            payload: {
                routeName
            }
        });
        setTimeout(() => {
            dispatch({
                type: APP.UPDATE_ROUTE_NAME,
                payload: {
                    newRouteName: routeName
                }
            })
        }, 1000 * 0.155);
    }
}

export function backRoute(key, routeName) {
    return function (dispatch) {
        dispatch({
            type: APP.BACK_ROUTE,
            key,
            payload: {
                routeName
            }
        });
        setTimeout(() => {
            dispatch({
                type: APP.UPDATE_ROUTE_NAME,
                payload: {
                    newRouteName: routeName
                }
            })
        }, URN_DP_TIME);
    }
}

export function goToMainRoute(routeName, routeSubname) {
    return function (dispatch) {
        dispatch({
            type: APP.GO_TO_MAIN_ROUTE,
            payload: {
                routeName,
                routeSubname
            }
        });
        // dispatch({
        //     type: APP.GO_TO_MAIN_ROUTE,
        //     payload: 
        // })
    }
}