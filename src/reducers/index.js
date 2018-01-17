import { combineReducers } from "redux"

import app from "./appReducer"

import mainDrawerNav from "./routers/mainDrawerNav"
import homeNav from "./routers/homeNav"
import missingsNav from "./routers/missingsNav"
import loginNav from "./routers/loginNav"

import mainMap from "./mainMapReducer"
import missings from "./missingsReducer"

export default combineReducers({
    app,

    mainDrawerNav,
    homeNav,
    missingsNav,
    loginNav,
    
    missings,
    mainMap
})