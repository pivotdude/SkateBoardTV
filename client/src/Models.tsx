import video from "./components/Video/Video";

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





interface authorModel {
    _id?: string,
    avatar: string,
    name: string,
}

export interface PreviewVideoModel {
    _id: string,
    author: authorModel,
    date: string,
    duration: number,
    preview: string,
    title: string,
    views: number
}

interface AuthorInfoModel {
    name: string,
    avatar: string,
    channelHeader: string,
    subscribersNumbers: number
}

interface channelAboutModel {
    description: string,
    regDate: Date
}

export interface VideoChannelModel {
    _id: string,
    date: string,
    preview: string,
    title: string,
    views: number
    duration: number
}
export interface PlaylistChannelModel {
    _id: string,
    preview: string,
    title: string,
    videos: Array<string>,
    count?: number
}
export interface SubscribeChannelModel {
    _id: string,
    name: string,
    avatar: string,
    subscribersNumbers: number
}




interface fullAuthorModel {
    _id: string,
    name: string,
    avatar: string,
    subscribersNumbers: number,
}

interface fullVideoModel {
    _id?: string,
    title: string,
    preview: string,
    likes: number,
    dislikes: number
    author: fullAuthorModel
    date: string
    views: number
    description: string
    tags?: Array<string>
    comments?: [
        {
            from: fullAuthorModel,
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
        fetchProfile: {
            _id: string,
            name: string,
            avatar: string,
        },
        subscriptions: {subscriptions: Array<SubscribeChannelModel>}
    },
    video: {
        videoById: fullVideoModel,
        playlistById: Array<PreviewVideoModel>,
        videosList: Array<PreviewVideoModel>,

        trendingVideos: Array<PreviewVideoModel>,
        discoverVideos: Array<PreviewVideoModel>,
        // playlistVideos: Array<PreviewVideoModel>,
        tutorialVideos: Array<PreviewVideoModel>,
        competitionVideos: Array<PreviewVideoModel>,
        reviewVideos: Array<PreviewVideoModel>,
        skatingVideos: Array<PreviewVideoModel>,
        otherVideos: Array<PreviewVideoModel>,
    },
    authorization: {
        auth: {},
        reg: {}
    },
    channel: {
        authorInfo: AuthorInfoModel,
        channelVideos: {videos: Array<VideoChannelModel> | null},
        channelPlaylist: {playlists: Array<PlaylistChannelModel> | null},
        channelLikes: Array<PreviewVideoModel> | null,
        channelSubscriptions: {subscriptions: Array<SubscribeChannelModel> | null},
        channelAbout: channelAboutModel
    }
}

export interface authUserModel {
    success: boolean,
    message: string,
    token: string
}

