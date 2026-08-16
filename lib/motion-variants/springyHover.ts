import { Variants } from "motion"

export const springyHover: Variants = {
    hovered: {
        x: -2,
        y: -8,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 15,
        },
        boxShadow: 'var(--shadow-flat-sm)'
    }
}

export const springyHoverBigger: Variants = {
    hovered: {
        x: -4,
        y: -16,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 16,
        },
        boxShadow: 'var(--shadow-flat-lg)'
    }
}

export const springyHoverRevealBig: Variants = {
    hidden: {
        y: 16,
        scale: 0.95,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 16,
        }
    },
    hovered: {
        x: -4,
        y: -16,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 16,
        },
        boxShadow: 'var(--shadow-flat-lg)'
    }
}