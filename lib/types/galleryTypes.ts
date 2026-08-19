type MediaInfoText = {
    type: 'title' | 'paragraph',
    content: string
}

type MediaInfoList = {
    type: 'list',
    content: string[]
}

export type MediaInfoItem = MediaInfoText | MediaInfoList

type MediaInfo = {
    position: 'left' | 'right',
    items: MediaInfoItem[]
} | null

export type Media = {
    type: 'image' | 'video',
    src: string,
    info: MediaInfo
}

export type GalleryGridVersion = 'projectSlug'