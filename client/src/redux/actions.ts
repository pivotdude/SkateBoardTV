import {
    SHOW_LOADER,
    HIDE_LOADER,
    AUTHORIZATION,
    REGISTRATION,
    GET_VIDEO_BY_ID,
} from './types'

function fetchData(route: string, types: string, method: 'GET' | 'POST' = 'GET' ,data: object = {}):object {
    return async (dispatch: Function) => {
        dispatch(showLoader())

        let options = {}
        if (method == 'POST') {
            options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        }

        const response = await fetch(`http://localhost:3001/api/${route}`, options)
        const json = await response.json()

        dispatch({type: types, payload: json})
        dispatch(hideLoader())
    }
}

export function fetchVideoById(videoId: string | null | undefined):object {
    return fetchData(`videos/${videoId}`, GET_VIDEO_BY_ID)
}
//
// APPReducer
export function showLoader():object {
    return {type: SHOW_LOADER}
}
export function hideLoader():object {
    return {type: HIDE_LOADER}
}
//
// export function authAction(data: object):object {
//     console.log(data)
//     return fetchData('login', AUTHORIZATION, data)
// }
// export function regAction(data: object):object {
//     console.log(data)
//     return fetchData('registration', REGISTRATION, data)
// }