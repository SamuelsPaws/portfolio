'use client'
import { useEffect, useRef, useState } from "react"
import clsx from "clsx";
import MediaViewer from "./MediaViewer";
import NavBtn from "./NavBtn";
import XBtn from "./XBtn";
import { Media } from "@/lib/types/galleryTypes";
import MediaInfoElement from "./MediaInfoElement";
import CustomIcon from "@/components/CustomIcon";
import LightboxInfo from "./LightboxInfo";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    media: Media | null;
    previousMedia: () => void;
    nextMedia: () => void;
    currPos: number;
    galleryLength: number;
}

const Lightbox = ({ isOpen, onClose, media, previousMedia, nextMedia, currPos, galleryLength }: Props) => {
    const [isInfoOpen, setIsInfoOpen] = useState<boolean>(true)
    const touchStartX = useRef<number | null>(null)

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchEndX = e.changedTouches[0].clientX
        const deltaX = touchStartX.current !== null ? touchStartX.current - touchEndX : 0

        if (deltaX > 50) nextMedia()
        if (deltaX < -50) previousMedia()
    }

    useEffect(() => {
        if (!isOpen) return

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose()
            }

            if (e.key === 'ArrowRight') {
                nextMedia()
            }
            
            if (e.key === 'ArrowLeft') {
                previousMedia()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen])
    
    if (!isOpen) return null

    return (
    <div>
        {/* Backdrop */}
        <div
            onClick={onClose}
            className="
                fixed top-0 left-0 z-[9910]
                w-screen h-screen
                bg-black/80"
        >
        </div>
        {/* X button */}
        <XBtn onClick={onClose} />
        {/* Prev and next buttons */}
        <NavBtn
            onClick={previousMedia}
            direction="prev"
        />
        <NavBtn
            onClick={nextMedia}
            direction="next"
        />
        {/* Actual media card (media viewer wrapper) */}
        <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={clsx(
                "fixed top-1/2 left-1/2 -translate-1/2 z-[9950]",
                "w-[85vw] h-[80vh]",
                "lg:w-[80vw] lg:aspect-auto lg:h-[80vh]",
                "flex",
                "bg-white/10 backdrop-blur-sm",
                "border border-white/30 rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
            )}
        >
            <MediaViewer
                media={media}
            />
            {/* Media counter */}
            <div className="
                absolute top-4 right-4 z-[9970]
                w-12 aspect-square
                flex justify-center items-center
                bg-gray-800/90
                text-gray-200 text-sm md:text-md tracking-wide
                border border-gray-500 rounded-full"
            >
                <span>{currPos}/{galleryLength}</span>
            </div>
            {/* Info */}
            {media?.info && (
                <LightboxInfo
                    position={media.info.position}
                    items={media.info.items}
                    isOpen={isInfoOpen}
                    onClick={() => setIsInfoOpen(prev => !prev)}
                />
            )}
        </div>
    </div>
    )
}

export default Lightbox