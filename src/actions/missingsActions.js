import { MISSINGS, API } from "app/src/constants"

export function fetchMissings() {
    return function(dispatch) {
        dispatch({
            type: MISSINGS.FETCH_MISSINGS,
            payload: {
    
            }
        });
        dispatch({
            type: MISSINGS.FETCH_MISSINGS_SUCCESS,
            payload: {
                missingsArray: [
                    {
                        name: "Овчарка 7 лет",
                        description: "Некое описание, возможно в несколько строк а потому должно войти гарантировнно",
                        city: "Томск",
                        photo: undefined,
                        uid: 2324,
                    },
                    {
                        name: "Кот 3 года",
                        description: "Некое описание, возможно в несколько строк а потому должно войти гарантировнно",
                        city: "Томск",
                        photo: undefined,
                        uid: 2312,
                    },
                    ...([0,1,2,3,4,5,6,7,8,9,10].map((i) => {
                        const cc = i;
                        return {
                            name: "Кот 3 года",
                            description: "Некое описание, возможно в несколько строк а потому должно войти гарантировнно",
                            city: "Томск",
                            photo: undefined,
                            uid: Number(i),
                        }
                    }))
                ],
            }
        })

        // fetch(`${API.URL}fetchMissings.php`, {
        //     method: "GET",
        //     headers: new Headers(),
        // })
        // .then((res) => {
        //     return res.json()
        // })
        // .then((json) => {
        //     dispatch({
        //         type: MISSINGS.FETCH_MISSINGS_SUCCESS,
        //         payload: {
        //             missingsArray: json
        //         }
        //     })
        // })
        // .catch((error) => {
        //     dispatch({
        //         type: MISSINGS.FETCH_MISSINGS_ERROR,
        //         payload: {
        //             error
        //         }
        //     })
        // })
    }
}