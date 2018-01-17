import { MAP } from "app/src/constants"

const initialState = {
    mapRegion: {
        latitude: 56.501040,
        longitude: 84.9922451,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
    }
}
const mainMapReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            break;
        }
    }

    return state;
}

export default mainMapReducer;