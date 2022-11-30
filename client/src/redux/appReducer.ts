import {HIDE_LOADER, SHOW_LOADER} from "./types";
import {ActionModel} from "./ActionModel";

const initialState = {
    loading: false
}

export const appReducer = (state = initialState, action: ActionModel) => {
    switch (action.type) {

        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}

        default: return state
    }
}