import {AUTHORIZATION, LOGOUT, REGISTRATION} from './types'
import {ActionModel} from "./ActionModel";

interface authorizationReducerModel {
    auth: {},
    reg: {}
}

const initialState = {
    auth: {},
    reg: {},
}

export const authorizationReducer = (state = <authorizationReducerModel> initialState, action: ActionModel) => {
    switch (action.type) {
        case AUTHORIZATION:
            return {...state, auth: action.payload}

        case REGISTRATION:
            return {...state, reg: action.payload}

        case LOGOUT:
            return {...state, auth: ''}

        default: return state
    }
}