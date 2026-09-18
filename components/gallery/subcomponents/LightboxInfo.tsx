'use client'

import CustomIcon from "@/components/CustomIcon";
import { MediaInfoItem } from "@/lib/types/galleryTypes";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId } from "react";
import MediaInfoElement from "./MediaInfoElement";
import {
    lightboxInfoContentMotion,
    lightboxInfoIconMotion,
} from "@/lib/motion-variants/lightboxMotion";

interface Props {
    position: 'left' | 'right';
    items: MediaInfoItem[];
    isOpen: boolean;
    onClick: () => void;
}

const stopPropagation = (event: React.PointerEvent<HTMLButtonElement>) => event.stopPropagation();

const LightboxInfo = ({ position, items, isOpen, onClick }: Props) => {
    const shouldReduceMotion = useReducedMotion() ?? false
    const contentId = useId()

    return (
    <button
        type="button"
        onClick={onClick}
        onPointerDown={stopPropagation}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className={clsx(
            "lightbox-info-material absolute bottom-2 z-[9970] w-[calc(100%_-_1rem)] overflow-hidden md:bottom-4 md:w-80 xl:w-100",
            position === 'left' ? "left-2 md:left-4" : "right-2 md:right-4",
            "group rounded-2xl border border-white/30 bg-black/85 text-left text-white shadow-2xl backdrop-blur-xl md:rounded-4xl"
        )}
    >
        <div className="flex w-full items-center justify-between gap-4 p-4 md:p-8">
            <span className="flex items-center gap-2 text-my-lg">
                <CustomIcon iconId="info-o" />
                <span className="font-semibold">Comments</span>
            </span>

            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gray-500 text-2xl text-gray-500 duration-200 group-hover:border-gray-200 group-hover:text-gray-200 group-hover:shadow-sm">
                <motion.span
                    className="flex"
                    custom={shouldReduceMotion}
                    variants={lightboxInfoIconMotion}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <CustomIcon iconId="plus" />
                </motion.span>
            </span>
        </div>

        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    id={contentId}
                    key="comments"
                    className="overflow-hidden"
                    custom={shouldReduceMotion}
                    variants={lightboxInfoContentMotion}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <div className="max-h-[55vh] overflow-y-auto px-4 pb-4 md:px-8 md:pb-8">
                        {items.map((item, index) => (
                            <MediaInfoElement key={index} item={item} />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </button>
    )
}

export default LightboxInfo
