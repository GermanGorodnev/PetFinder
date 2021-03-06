import { PROFILE, API, APP } from "app/src/constants"
import { goToMainRoute } from "app/src/actions/appActions";

const REDIRECT_TIME = 1000 * .05;

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
            })
            .then((json) => {
                /* ALLLLLLL GOOOOOOOOOOD */
                if (json.loggedIn) {
                    dispatch({
                        type: PROFILE.LOGIN_SUCCESS,
                        payload: {
                            userID: json.userID
                        }
                    });
                    setTimeout(() => {
                        dispatch(goToMainRoute(APP.NAV.HOME_PAGE, "Home"));
                    }, REDIRECT_TIME);
                } else {
                    switch (json.reason) {
                        case "noemailconfirm": {
                            dispatch({
                                type: PROFILE.LOGIN_NO_EMAIL_CONFIRM,
                                payload: {
                                }
                            })
                            break;
                        }
                        case "nosuch": {
                            dispatch({
                                type: PROFILE.LOGIN_ERROR_INVALID,
                                payload: {
                                }
                            })
                            break;
                        }
                        default: {
                            dispatch({
                                type: PROFILE.LOGIN_ERROR_INVALID,
                                payload: {
                                }
                            });
                        }
                    }

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
    return function (dispatch) {
        dispatch({
            type: PROFILE.REGISTER,
            payload: {

            }
        });
        fetch(`${API.URL}register.php`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then((res) => {
                console.log("UNPARSED", res);
                return res.json();
            })
            .then((json) => {
                if (json.registered) {
                    dispatch({
                        type: PROFILE.REGISTER_SUCCESS,
                        payload: {
                        }
                    });
                    setTimeout(() => {
                        dispatch(goToMainRoute(APP.NAV.LOGIN_PAGE, "Login"));
                    }, REDIRECT_TIME)
                } else {
                    switch (json.reason) {
                        case "emailUsed": {
                            dispatch({
                                type: PROFILE.REGISTER_ERROR_EMAIL_USER,
                                payload: {
                                }
                            });
                            break;
                        }
                        default: {
                            dispatch({
                                type: PROFILE.REGISTER_ERROR,
                                payload: {
                                    error: json.reason
                                }
                            });
                            break;
                        }
                    }

                }
            })
            .catch((error) => {
                dispatch({
                    type: PROFILE.REGISTER_ERROR,
                    payload: {
                        error
                    }
                })
            })
    }
}