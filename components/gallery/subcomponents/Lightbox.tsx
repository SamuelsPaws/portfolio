'use client'
import { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { PanInfo } from "motion/react";
import MediaViewer from "./MediaViewer";
import NavBtn from "./NavBtn";
import XBtn from "./XBtn";
import { Media } from "@/lib/types/galleryTypes";
import LightboxInfo from "./LightboxInfo";
import {
    type LightboxDirection,
    type LightboxMediaMotionContext,
    lightboxBackdropMotion,
    lightboxDragConstraints,
    lightboxDragElastic,
    lightboxGestureTransition,
    lightboxMediaMotion,
    lightboxSurfaceMotion,
    resolveLightboxSwipe,
} from "@/lib/motion-variants/lightboxMotion";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    media: Media | null;
    previousMedia: () => void;
    nextMedia: () => void;
    currPos: number;
    galleryLength: number;
}

const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation();

const Lightbox = ({ isOpen, onClose, media, previousMedia, nextMedia, currPos, galleryLength }: Props) => {
    const [isInfoOpen, setIsInfoOpen] = useState(true)
    const [direction, setDirection] = useState<LightboxDirection>(1)
    const shouldReduceMotion = useReducedMotion() ?? false
    const mediaMotionContext = useMemo<LightboxMediaMotionContext>(() => ({
        direction,
        reducedMotion: shouldReduceMotion,
    }), [direction, shouldReduceMotion])

    const changeMedia = useCallback((nextDirection: LightboxDirection) => {
        setDirection(nextDirection)
        setIsInfoOpen(false)

        if (nextDirection === 1) nextMedia()
        else previousMedia()
    }, [nextMedia, previousMedia])

    const handlePrevious = useCallback(() => changeMedia(-1), [changeMedia])
    const handleNext = useCallback(() => changeMedia(1), [changeMedia])
    const handleInfoToggle = useCallback(() => setIsInfoOpen(open => !open), [])
    const handleDragEnd = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const nextDirection = resolveLightboxSwipe(info)
        if (nextDirection) changeMedia(nextDirection)
    }, [changeMedia])

    useEffect(() => {
        if (!isOpen) return

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
            if (event.key === 'ArrowRight') changeMedia(1)
            if (event.key === 'ArrowLeft') changeMedia(-1)
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [changeMedia, isOpen, onClose])

    return (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                className="lightbox-scrim fixed inset-0 z-[9910] grid place-items-center bg-black/80 backdrop-blur-sm"
                variants={lightboxBackdropMotion}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-label="Media gallery"
            >
                <XBtn onClick={onClose} />

                <NavBtn onClick={handlePrevious} direction="prev" />
                <NavBtn onClick={handleNext} direction="next" />

                <motion.div
                    className="lightbox-surface relative z-[9950] w-[85vw] h-[80vh] lg:w-[80vw] flex overflow-hidden rounded-2xl md:rounded-4xl border border-white/30 bg-white/10 shadow-2xl backdrop-blur-xl touch-pan-y"
                    custom={shouldReduceMotion}
                    variants={lightboxSurfaceMotion}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={stopPropagation}
                    drag={shouldReduceMotion ? false : 'x'}
                    dragConstraints={lightboxDragConstraints}
                    dragElastic={lightboxDragElastic}
                    dragDirectionLock
                    dragTransition={lightboxGestureTransition}
                    onDragEnd={handleDragEnd}
                >
                    <AnimatePresence initial={false} custom={mediaMotionContext}>
                        <motion.div
                            key={media?.src ?? 'empty'}
                            className="absolute inset-0"
                            custom={mediaMotionContext}
                            variants={lightboxMediaMotion}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <MediaViewer media={media} />
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute top-4 right-4 z-[9970] flex size-12 items-center justify-center rounded-full border border-gray-500 bg-gray-800/90 text-sm tracking-wide text-gray-200 md:text-md" aria-live="polite">
                        <span>{currPos}/{galleryLength}</span>
                    </div>

                    {media?.info && (
                        <LightboxInfo
                            position={media.info.position}
                            items={media.info.items}
                            isOpen={isInfoOpen}
                            onClick={handleInfoToggle}
                        />
                    )}
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
    )
}

export default Lightbox
