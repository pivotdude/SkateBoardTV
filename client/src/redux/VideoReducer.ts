import {GET_VIDEO_BY_ID} from "./types";
import {ActionModel} from "./ActionModel";

const initialState = {
    videoById: {}
}

export const VideoReducer = (state = initialState, action: ActionModel) => {

    switch (action.type) {

        case GET_VIDEO_BY_ID:
            return {...state, videoById: action.payload}

        default: return state
    }
}