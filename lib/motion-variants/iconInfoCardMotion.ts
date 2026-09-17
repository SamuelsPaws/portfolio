import type { Variants } from "motion/react";

const revealEase = [0.22, 1, 0.36, 1] as const;
const hoverEase = [0.77, 0, 0.175, 1] as const;

export const iconInfoCardMotion: Variants = {
    hidden: (reducedMotion: boolean) => ({
        opacity: reducedMotion ? 1 : 0,
        transform: reducedMotion
            ? "translate3d(0, 0, 0)"
            : "translate3d(-20px, 0, 0)",
    }),
    visible: (reducedMotion: boolean) => ({
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
        transition: {
            duration: reducedMotion ? 0 : 0.6,
            ease: 'easeOut',
        },
    }),
    hovered: {
        transform: "translate3d(4px, -4px, 0)",
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

export const iconInfoIconMotion: Variants = {
    hidden: (reducedMotion: boolean) => ({
        opacity: reducedMotion ? 1 : 0,
        transform: reducedMotion
            ? "translate3d(0, 0, 0) scale(1)"
            : "translate3d(-8px, 0, 0) scale(0.92)",
    }),
    visible: (reducedMotion: boolean) => ({
        opacity: 1,
        transform: "translate3d(0, 0, 0) scale(1)",
        transition: {
            delay: reducedMotion ? 0 : 0.12,
            duration: reducedMotion ? 0 : 0.4,
            ease: revealEase,
        },
    }),
    hovered: {
        transform: "translate3d(4px, -2px, 0) scale(1.04)",
        transition: {
            duration: 0.4,
            ease: hoverEase,
        },
    },
};
