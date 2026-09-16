import { StringPerLocale } from "./globalTypes"

type MediaInfoText = {
    type: 'title' | 'paragraph',
    content: StringPerLocale
}

type MediaInfoList = {
    type: 'list',
    content: StringPerLocale[]
}

export type MediaInfoItem = MediaInfoText | MediaInfoList

export type MediaInfo = {
    position: 'left' | 'right',
    items: MediaInfoItem[]
} | null

export type Media = {
    type: 'image' | 'video',
    src: string,
    info: MediaInfo
}

export type GalleryGridVersion = 'projectSlug'