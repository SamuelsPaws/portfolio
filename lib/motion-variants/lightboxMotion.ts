import type { PanInfo, Variants } from "motion/react";

export type LightboxDirection = -1 | 1;

export interface LightboxMediaMotionContext {
    direction: LightboxDirection;
    reducedMotion: boolean;
}

const revealEase = [0.22, 1, 0.36, 1] as const;
const swipeThreshold = 80;
const swipeProjection = 0.18;

export const lightboxBackdropMotion: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
};

export const lightboxSurfaceMotion: Variants = {
    hidden: (reducedMotion: boolean) => ({
        opacity: 0,
        scale: reducedMotion ? 1 : 0.97,
        y: reducedMotion ? 0 : 12,
    }),
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeOut" },
    },
};

export const lightboxMediaMotion: Variants = {
    enter: ({ direction, reducedMotion }: LightboxMediaMotionContext) => ({
        opacity: 0,
        x: reducedMotion ? 0 : direction * 24,
    }),
    center: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: ({ direction, reducedMotion }: LightboxMediaMotionContext) => ({
        opacity: 0,
        x: reducedMotion ? 0 : direction * -24,
        transition: { duration: reducedMotion ? 0.2 : 0.4, ease: "easeOut" },
    }),
};

export const lightboxInfoContentMotion: Variants = {
    closed: (reducedMotion: boolean) => ({
        opacity: 0,
        ...(reducedMotion ? {} : { height: 0 }),
        transition: reducedMotion
            ? { opacity: { duration: 0.2, ease: "easeOut" } }
            : {
                height: { duration: 0.4, ease: revealEase },
                opacity: { duration: 0.2, ease: "easeOut" },
            },
    }),
    open: (reducedMotion: boolean) => ({
        opacity: 1,
        ...(reducedMotion ? {} : { height: "auto" }),
        transition: reducedMotion
            ? { opacity: { duration: 0.2, ease: "easeOut" } }
            : {
                height: { duration: 0.4, ease: revealEase },
                opacity: { duration: 0.2, ease: "easeOut" },
            },
    }),
};

export const lightboxInfoIconMotion: Variants = {
    closed: (reducedMotion: boolean) => ({
        rotate: 0,
        transition: { duration: reducedMotion ? 0 : 0.2, ease: "easeOut" },
    }),
    open: (reducedMotion: boolean) => ({
        rotate: 45,
        transition: { duration: reducedMotion ? 0 : 0.2, ease: "easeOut" },
    }),
};

export const lightboxGestureTransition = {
    power: 0.2,
    timeConstant: 220,
    bounceStiffness: 420,
    bounceDamping: 34,
} as const;

export const lightboxDragConstraints = { left: 0, right: 0 } as const;
export const lightboxDragElastic = 0.14;

export const resolveLightboxSwipe = ({ offset, velocity }: PanInfo): LightboxDirection | null => {
    const projectedX = offset.x + velocity.x * swipeProjection;

    if (projectedX < -swipeThreshold) return 1;
    if (projectedX > swipeThreshold) return -1;

    return null;
};
