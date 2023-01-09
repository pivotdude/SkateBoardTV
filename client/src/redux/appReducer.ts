import {HIDE_LOADER, HIDE_MODAL, PROFILE, RERENDER, SHOW_LOADER, SHOW_MODAL, SUBSCRIPTIONS} from "./types";
import {ActionModel} from "./ActionModel";

const initialState = {
    loading: false,
    profileMenu: false,
    fetchProfile: {},
    subscriptions: {},
    modal: {
        show: false,
        message: ''
    }
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

        case SHOW_MODAL:
            return {...state, modal: {
                show: true, message: action.payload
                }
            }

        case HIDE_MODAL:
            return {...state, modal: {
                    show: false, message: action.payload
                }
            }

        case RERENDER:
            return {...state}


        default: return state
    }
}