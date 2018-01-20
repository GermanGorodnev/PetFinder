import { MISSINGS, API, APP } from "app/src/constants"
import { goToMainRoute } from "app/src/actions/appActions";

const REDIRECT_TIME = 1000 * .1;

export function newMissingUpdatePolygons(polygons) {
    return {
        type: MISSINGS.NEW_UPDATE_POLYGONS,
        payload: {
            polygons
        }
    }
}


export function addMissing(userID, caption, description, polygons) {
    return function (dispatch) {
        dispatch({
            type: MISSINGS.ADD_NEW,
            payload: {
                caption,
                description,
                polygons
            }
        });
        fetch(`${API.URL}addMissing.php`, {
            method: "POST",
            headers: new Headers(),
            body: JSON.stringify({
                caption,
                description,
                polygons,
                userID
            })
        })
            .then((res) => {
                console.log("UNPARSED ADD MISSING", res);
                return res.json();
            })
            .then((json) => {
                switch (json.result) {
                    case "success": {
                        dispatch({
                            type: MISSINGS.ADD_NEW_SUCCESS,
                            payload: {

                            }
                        });
                        setTimeout(() => {
                            dispatch(goToMainRoute(APP.NAV.HOME_PAGE, "Home"));
                        }, REDIRECT_TIME);
                        break;
                    }
                    case "error": {
                        dispatch({
                            type: MISSINGS.ADD_NEW_ERROR,
                            payload: {
                                error: json.error,
                            }
                        });
                        break;
                    }
                    default:
                        break;
                }
            })
            .catch((error) => {
                dispatch({
                    type: MISSINGS.ADD_NEW_ERROR,
                    payload: {
                        error
                    }
                })
            })
    }
}



export function fetchMissings(userID) {
    return function (dispatch) {
        dispatch({
            type: MISSINGS.FETCH_MISSINGS,
            payload: {

            }
        });

        fetch(`${API.URL}fetchMissings.php`, {
            method: "POST",
            headers: new Headers(),
            body: JSON.stringify({
                userID
            })
        })
        .then((res) => {
            console.log("FETCH MISSINGS RAW", res);
            return res.json();
        })
        .then((json) => {
            switch (json.result) {
                case "success": {
                    // PROPER TREATEMENT FOR \N
                    json.missingsArray.forEach((post) => {
                        post.caption = post.caption.replace(/\\n/g, '\n')
                        post.description = post.description.replace(/\\n/g, '\n')
                    });
                    dispatch({
                        type: MISSINGS.FETCH_MISSINGS_SUCCESS,
                        payload: {
                            missingsArray: json.missingsArray
                        }
                    });
                    break;
                }
                case "error": {
                    dispatch({
                        type: MISSINGS.FETCH_MISSINGS_ERROR,
                        payload: {
                            error: json.error
                        }
                    })
                    break;
                }
            }

        })
        .catch((error) => {
            dispatch({
                type: MISSINGS.FETCH_MISSINGS_ERROR,
                payload: {
                    error
                }
            })
        })
    }
}









// dispatch({
        //     type: MISSINGS.FETCH_MISSINGS_SUCCESS,
        //     payload: {
        //         missingsArray: [
        //             {
        //                 name: "Овчарка 7 лет",
        //                 description: "Некое описание, возможно в несколько строк а потому должно войти гарантировнно",
        //                 city: "Томск",
        //                 photo: undefined,
        //                 uid: 2324,
        //             },
        //             {
        //                 name: "Кот 3 года",
        //                 description: "Некое описание, возможно в несколько строк а потому должно войти гарантировнно",
        //                 city: "Томск",
        //                 photo: undefined,
        //                 uid: 2312,
        //             },
        //             ...([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
        //                 const cc = i;
        //                 return {
        //                     name: "Кот 3 года",
        //                     description: "Некое описание, возможно в несколько строк а потому должно войти гарантировнно",
        //                     city: "Томск",
        //                     photo: undefined,
        //                     uid: Number(i),
        //                 }
        //             }))
        //         ],
        //     }
        // })