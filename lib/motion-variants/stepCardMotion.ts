import type { TargetAndTransition, Variants } from "motion/react";

const revealEase = [0.22, 1, 0.36, 1] as const;
const hoverEase = [0.77, 0, 0.175, 1] as const;

export const stepCardReveal: Variants = {
    hidden: (reducedMotion: boolean) => ({
        opacity: reducedMotion ? 1 : 0,
        transform: reducedMotion
            ? "translate3d(0, 0, 0) scale(1)"
            : "translate3d(0, 20px, 0) scale(0.985)",
    }),
    visible: (reducedMotion: boolean) => ({
        opacity: 1,
        transform: "translate3d(0, 0, 0) scale(1)",
        boxShadow: "4px 4px 16px 0 #00000018",
        transition: {
            duration: reducedMotion ? 0 : 0.6,
            ease: 'easeOut',
        },
    }),
};

export const stepCardRevealNoShadow: Variants = {
    hidden: (reducedMotion: boolean) => ({
        opacity: reducedMotion ? 1 : 0,
        transform: reducedMotion
            ? "translate3d(0, 0, 0) scale(1)"
            : "translate3d(0, 20px, 0) scale(0.985)",
    }),
    visible: (reducedMotion: boolean) => ({
        opacity: 1,
        transform: "translate3d(0, 0, 0) scale(1)",
        transition: {
            duration: reducedMotion ? 0 : 0.6,
            ease: 'easeOut',
        },
    }),
};

export const stepCardHover: TargetAndTransition = {
    transform: "translate3d(0, -8px, 0) scale(1.01)",
    boxShadow: "4px 6px 24px 0 #00000024",
    transition: {
        duration: 0.4,
        ease: 'easeOut',
    },
};
