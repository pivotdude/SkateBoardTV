import {HIDE_LOADER, HIDE_PROFILE_MENU, SHOW_LOADER, SHOW_PROFILE_MENU} from "./types";
import {ActionModel} from "./ActionModel";

const initialState = {
    loading: false,
    profileMenu: false
}

export const appReducer = (state = initialState, action: ActionModel) => {
    switch (action.type) {

        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}

        case SHOW_PROFILE_MENU:
            return {...state, profileMenu: true}
        case HIDE_PROFILE_MENU:
            return {...state, profileMenu: false}

        default: return state
    }
}