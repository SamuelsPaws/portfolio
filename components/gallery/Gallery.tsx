'use client'
import { useCallback, useState } from 'react'
import Lightbox from './subcomponents/Lightbox'
import GalleryGrid from './subcomponents/GalleryGrid';
import { GalleryGridVersion, Media } from '@/lib/types/galleryTypes';

interface Props {
    media: Media[];
    gridVersion: GalleryGridVersion;
    gridClassName: string;
}

const Gallery = ({ media, gridVersion, gridClassName }: Props) => {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)
    const isLightboxOpen = selectedMediaIndex !== null

    const previousMedia = useCallback(() => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return prev > 0 ? prev - 1 : media.length - 1
            }

            return null
        })
    }, [media.length])

    const nextMedia = useCallback(() => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return (prev + 1) % media.length
            }

            return null
        })
    }, [media.length])

    const getSelectedMedia = () => {
        if (selectedMediaIndex !== null) {
            return media[selectedMediaIndex]
        }

        return null
    }

    const selectedMedia = getSelectedMedia()

    return (
    <>
    <GalleryGrid
        media={media}
        selectedMediaIndex={selectedMediaIndex}
        setSelectedMediaIndex={setSelectedMediaIndex}
        version={gridVersion}
        className={gridClassName}
    />
    <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setSelectedMediaIndex(null)}
        media={selectedMedia}
        previousMedia={previousMedia}
        nextMedia={nextMedia}
        currPos={selectedMediaIndex !== null ? selectedMediaIndex + 1 : 0}
        galleryLength={media.length}
    />
    </>
    )
}

export default Gallery
