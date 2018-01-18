import { APP } from "app/src/constants"

const URN_DP_TIME = Math.floor(1000 * 0.155);

export function goToRoute(routeName) {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({
                type: APP.UPDATE_ROUTE_NAME,
                payload: {
                    newRouteName: routeName
                }
            })
        }, URN_DP_TIME);
        dispatch({
            type: APP.GO_TO_ROUTE,
            payload: {
                routeName
            }
        });    
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