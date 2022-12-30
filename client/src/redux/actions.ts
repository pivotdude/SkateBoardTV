import {
    SHOW_LOADER,
    HIDE_LOADER,
    AUTHORIZATION,
    REGISTRATION,
    GET_VIDEO_BY_ID,
    PROFILE, LOGOUT,
} from './types'

type methods = 'GET' | 'POST'
interface optionFetchModel {
    method?: methods,
    headers?: any,
    body?: string
}

function fetchData(route: string, types: string, method: methods = 'GET' ,data: object = {}):object {
    return async (dispatch: Function) => {
        dispatch(showLoader())

        let options: optionFetchModel = {
            method: 'GET',
            headers: {}
        }

        if (method == 'POST') {
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        }
        options.headers['Authorization'] =  localStorage.getItem('token') ?? null // 'Bearer '



        const response = await fetch(`http://localhost:3001/api/${route}`, options)
        const json = await response.json()

        dispatch({type: types, payload: json})
        dispatch(hideLoader())
    }
}

export function fetchVideoById(videoId: string | null | undefined):object {
    return fetchData(`videos/${videoId}`, GET_VIDEO_BY_ID)
}

// APPReducer

export function fetchProfileInfo():object {
    return fetchData(`profile`, PROFILE)
}

export function showLoader():object {
    return {type: SHOW_LOADER}
}
export function hideLoader():object {
    return {type: HIDE_LOADER}
}


//

interface authArgs {
    email: string,
    password: string
}
interface regArgs {
    name: string,
    email: string,
    password: string,
    repeatPassword:string,

}

export function authAction(data: authArgs) {
    return fetchData('login', AUTHORIZATION, 'POST', data)
}
export function regAction(data: regArgs):object {
    return fetchData('registration', REGISTRATION, 'POST', data)
}

export function logOutAction():object {
    localStorage.setItem('token', '')
    return {type: LOGOUT}
}