import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {authorizationReducer} from './authorizationReducer'
import {VideoReducer} from "./VideoReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    authorization: authorizationReducer,
    video: VideoReducer
})