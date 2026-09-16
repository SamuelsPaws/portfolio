import type { Variants } from 'motion/react'

export const projectRevealGroup: Variants = {
    hidden: {},
    visible: (reducedMotion: boolean) => ({
        transition: { staggerChildren: reducedMotion ? 0 : 0.1 }
    })
}

export const projectRevealItem: Variants = {
    hidden: (reducedMotion: boolean) => ({
        opacity: reducedMotion ? 1 : 0,
        y: reducedMotion ? 0 : 18
    }),
    visible: (reducedMotion: boolean) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: reducedMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1]
        }
    })
}
