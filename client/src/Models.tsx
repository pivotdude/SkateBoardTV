export interface BannerModel {
    _id: string,
    size: 'large' | 'small',
    bannerImage: string,
    title: string,
    UserImage: string,
    UserName: string,
    VideoInfo: string,
    duration: number,
}

export interface VideoModel {
    _id?: string,
    title: string,
    image: any,
    UserImage: string | object,
    UserName: string,
    VideoInfo: string,
    duration: number
}

interface UserModel {
    _id: string,
    name: string,
    login: string,
    password: string,
    regDate: string,
    avatar: string,
    subscribersNumbers: 1,
    description: string,
    subscribers: Array<string>,
    videos: Array<string>,
    subscribe: Array<string>,
    likes: Array<string>,
    viewed: Array<string>,
}

interface UserModelTiny {
    _id: string,
    name: string,
    avatar: string,
    subscribersNumbers: 1,
}

export interface newVideoModel {
    _id?: string,
    title: string,
    preview: string,
    likes: number,
    dislikes: number
    author: UserModelTiny
    date: string
    views: number
    description: string
    tags?: Array<string>
    comments: [
        {
            from: UserModelTiny,
            content: string,
            date: string,
            like: number,
            dislike: number
        }
    ]
}

export interface StateModel {
    app: {
        loading: boolean,
    },
    video: {
        videoById: object,
    },
    auth: object
}