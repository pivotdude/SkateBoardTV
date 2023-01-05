import {
    SHOW_LOADER,
    HIDE_LOADER,
    AUTHORIZATION,
    REGISTRATION,
    GET_VIDEO_BY_ID,
    PROFILE,
    LOGOUT,
    AUTHOR_INFO,
    CHANNEL_ABOUT,
    CHANNEL_LIKES,
    CHANNEL_VIDEOS,
    CHANNEL_PLAYLIST,
    CHANNEL_SUBSCRIPTIONS,
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

// APP
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


// Channel
export function fetchAuthorInfo(authorId: string | undefined): any {
    return fetchData(`channel/${authorId}`, AUTHOR_INFO)
}
export function fetchChannelVideos(authorId: string | undefined): any {
    return fetchData(`channel/${authorId}/videos`, CHANNEL_VIDEOS)
}
export function fetchChannelPlaylists(authorId: string | undefined): any {
    return fetchData(`channel/${authorId}/playlists`, CHANNEL_PLAYLIST)
}
export function fetchChannelLikes(authorId: string | undefined): any {
    return fetchData(`channel/${authorId}/likes`, CHANNEL_LIKES)
}
export function fetchChannelSubscribe(authorId: string | undefined): any {
    return fetchData(`channel/${authorId}/subscriptions`, CHANNEL_SUBSCRIPTIONS)
}
export function fetchChannelAbout(authorId: string | undefined): any {
    return fetchData(`channel/${authorId}/about`, CHANNEL_ABOUT)
}


