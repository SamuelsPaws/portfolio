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
            damping: 15,
        },
        boxShadow: 'var(--shadow-flat-lg)'
    }
}