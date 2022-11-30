import {GET_VIDEO_BY_ID} from "./types";
import {ActionModel} from "./ActionModel";

const initialState = {
    video: {}
}

export const VideoReducer = (state = initialState, action: ActionModel) => {

    switch (action.type) {

        case GET_VIDEO_BY_ID:
            return {...state, video: action.payload}

        default: return state
    }
}