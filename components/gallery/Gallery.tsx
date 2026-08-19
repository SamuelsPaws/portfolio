'use client'
import { useEffect, useRef, useState } from 'react'
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
    const preloadedImages = useRef(new Set<string>())
    // const previousIndex = useRef(selectedMediaIndex)

    const previousMedia = () => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return prev > 0 ? prev - 1 : media.length - 1
            }

            return null
        })
    }

    const nextMedia = () => {
        setSelectedMediaIndex(prev => {
            if (prev !== null) {
                return (prev + 1) % media.length
            }

            return null
        })
    }

    const getSelectedMedia = () => {
        if (selectedMediaIndex !== null) {
            return media[selectedMediaIndex]
        }

        return null
    }

    const selectedMedia = getSelectedMedia()

    // useEffect(() => {
    //     if (isLightboxOpen) {
    //         // if (!preloadedImages.current.has(media[selectedMediaIndex].src)) preloadedImages.current.add(media[selectedMediaIndex].src)

    //         const timeout = setTimeout(() => {
    //             const nextMedia = media[selectedMediaIndex + 1]
    //             const prevMedia = media[selectedMediaIndex - 1]
    
    //             if (nextMedia && nextMedia.type === 'image') {
    //                 if (!preloadedImages.current.has(nextMedia.src)) {
    //                     preloadImage(nextMedia.src)
    //                     preloadedImages.current.add(nextMedia.src)
    //                 }
    //             }

    //             if (prevMedia && prevMedia.type === 'image') {
    //                 if (!preloadedImages.current.has(prevMedia.src)) {
    //                     preloadImage(prevMedia.src)
    //                     preloadedImages.current.add(prevMedia.src)
    //                 }
    //             }
    //         }, 300)
            
    //         const secondTimeout = setTimeout(() => {
    //             const nextMedia = media[selectedMediaIndex + 2]
    //             const prevMedia = media[selectedMediaIndex - 2]
    
    //             if (nextMedia && nextMedia.type === 'image') {
    //                 if (!preloadedImages.current.has(nextMedia.src)) {
    //                     preloadImage(nextMedia.src)
    //                     preloadedImages.current.add(nextMedia.src)
    //                 }
    //             }

    //             if (prevMedia && prevMedia.type === 'image') {
    //                 if (!preloadedImages.current.has(prevMedia.src)) {
    //                     preloadImage(prevMedia.src)
    //                     preloadedImages.current.add(prevMedia.src)
    //                 }
    //             }
    //         }, 600)

    //         return () => {
    //             clearTimeout(timeout)
    //             clearTimeout(secondTimeout)
    //         }
    //     }
    // }, [selectedMediaIndex])

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