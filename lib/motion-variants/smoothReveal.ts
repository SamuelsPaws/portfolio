import { Variants } from "motion";

export const smoothReveal: Variants = {
    hidden: {
        y: 24,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    },
}

export const smoothRevealSm: Variants = {
    hidden: {
        y: 16,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    },
}

export const smoothRevealRight: Variants = {
    hidden: {
        x: -24,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    },
}