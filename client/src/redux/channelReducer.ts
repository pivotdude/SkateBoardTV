import {
    AUTHOR_INFO,
    AUTHORIZATION,
    CHANNEL_ABOUT,
    CHANNEL_LIKES,
    CHANNEL_PLAYLIST,
    CHANNEL_SUBSCRIPTIONS,
    CHANNEL_VIDEOS,
    LOGOUT,
    REGISTRATION
} from './types'
import {ActionModel} from "./ActionModel";

interface channelReducerModel {
    authorInfo: {},
    channelVideos: {},
    channelPlaylist: {},
    channelLikes: [],
    channelSubscriptions: {},
    channelAbout: {}
}

const initialState = {
    authorInfo: {},
    channelVideos: {},
    channelPlaylist: {},
    channelLikes: [],
    channelSubscriptions: {},
    channelAbout: {}
}

export const channelReducer = (state = <channelReducerModel> initialState, action: ActionModel) => {
    switch (action.type) {
        case AUTHOR_INFO:
            return {...state, authorInfo: action.payload}

        case CHANNEL_VIDEOS:
            return {...state, channelVideos: action.payload}

        case CHANNEL_PLAYLIST:
            return {...state, channelPlaylist: action.payload}

        case CHANNEL_LIKES:
            return {...state, channelLikes: action.payload}

        case CHANNEL_SUBSCRIPTIONS:
            return {...state, channelSubscriptions: action.payload}

        case CHANNEL_ABOUT:
            return {...state, channelAbout: action.payload}

        default: return state
    }
}