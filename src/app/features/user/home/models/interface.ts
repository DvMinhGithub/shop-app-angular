export interface VideoItem {
    title: string;
    subTitle: string;
    thumbnail: string;
    youtubeUrl: string;
}

export interface BannerItem {
    title?: string;
    subTitle?: string;
    buttonText: string;
    link: string;
    image: string;
    overlay?: boolean;
}