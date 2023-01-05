import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {authorizationReducer} from './authorizationReducer'
import {VideoReducer} from "./VideoReducer";
import {channelReducer} from './channelReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    authorization: authorizationReducer,
    video: VideoReducer,
    channel: channelReducer
})