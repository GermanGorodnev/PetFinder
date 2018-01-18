import { PROFILE, API, APP } from "app/src/constants"
import { goToMainRoute } from "app/src/actions/appActions";

export function login(email, password) {
    return function (dispatch) {
        dispatch({
            type: PROFILE.LOGIN,
            payload: {
            }
        });
        fetch(`${API.URL}login.php`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then((res) => {
                console.log("UNPARSED", res);
                return res.json()
                    .catch((errorParse) => {
                        dispatch({
                            type: PROFILE.LOGIN_ERROR,
                            payload: {
                                error: errorParse
                            }
                        })
                    })
            })
            .then((json) => {
                /* ALLLLLLL GOOOOOOOOOOD */
                if (json.loggedIn) {
                    dispatch({
                        type: PROFILE.LOGIN_SUCCESS,
                        payload: {

                        }
                    });
                    setTimeout(() => {
                        dispatch(goToMainRoute(APP.NAV.HOME_PAGE, "Home"));
                    }, 1000 * 1);
                } else {
                    dispatch({
                        type: PROFILE.LOGIN_ERROR_INVALID,
                        payload: {
                        }
                    })
                }
            })
            .catch((error) => {
                dispatch({
                    type: PROFILE.LOGIN_ERROR,
                    payload: {
                        error
                    }
                })
            });
    }
}

export function register(name, email, password) {

}