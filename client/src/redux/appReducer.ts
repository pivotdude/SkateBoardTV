import {HIDE_LOADER, PROFILE, SHOW_LOADER, SUBSCRIPTIONS} from "./types";
import {ActionModel} from "./ActionModel";

const initialState = {
    loading: false,
    profileMenu: false,
    fetchProfile: {},
    subscriptions: {}
}

export const appReducer = (state = initialState, action: ActionModel) => {
    switch (action.type) {

        case PROFILE:
            return {...state, fetchProfile: action.payload}

        case SUBSCRIPTIONS:
            return {...state, subscriptions: action.payload}

        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}


        default: return state
    }
}