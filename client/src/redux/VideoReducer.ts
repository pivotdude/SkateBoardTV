import {
    COMPETITION,
    DISCOVER,
    GET_PLAYLIST_BY_ID,
    GET_VIDEO_BY_ID,
    OTHER,
    PLAYLIST,
    REVIEW,
    SKATING, TRENDING,
    TUTORIAL
} from "./types";
import {ActionModel} from "./ActionModel";
import {StateModel} from "../Models";

const initialState = {
    videoById: {},
    playlistById: [],

    liked: {},

    videosList: [],

    trendingVideos: [],
    discoverVideos: [],
    playlistVideos: [],
    tutorialVideos: [],
    competitionVideos: [],
    reviewVideos: [],
    skatingVideos: [],
    otherVideos: [],

    like: {},


}

export const VideoReducer = (state = initialState, action: ActionModel) => {

    switch (action.type) {

        case GET_PLAYLIST_BY_ID:
            return {...state, playlistById: action.payload}

        case GET_VIDEO_BY_ID:
            return {...state, videoById: action.payload}

        case TRENDING:
            return {...state, trendingVideos: action.payload}

        case DISCOVER:
            return {...state, discoverVideos: action.payload}

        case PLAYLIST:
            return {...state, playlistVideos: action.payload}

        case TUTORIAL:
            return {...state, tutorialVideos: action.payload}

        case COMPETITION:
            return {...state, competitionVideos: action.payload}

        case REVIEW:
            return {...state, reviewVideos: action.payload}

        case SKATING:
            return {...state, skatingVideos: action.payload}

        case OTHER:
            return {...state, otherVideos: action.payload}




        default: return state
    }
}