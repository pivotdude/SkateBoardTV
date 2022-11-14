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
    _id: string,
    title: string,
    image: any,
    UserImage: string | object,
    UserName: string,
    VideoInfo: string,
    duration: number
}