'use client'
import { springyHover } from "@/lib/motion-variants/springyHover";
import clsx from "clsx";
import { motion, Variants } from "motion/react";
import Link from "next/link";

type TextSize = 'sm' | 'md' | 'lg'

const variants: Variants = springyHover

interface Props {
    href: string;
    label: string;
    external: boolean;
    className?: string;
    size: TextSize;
}

const BlackBtn = ({ href, label, external, className, size }: Props) => {
    const getPadding = (): string => {
        switch (size) {
            case 'sm':
                return 'px-4 py-3 md:px-6 md:py-3';
            case 'md':
                return 'px-6 py-3 md:px-8 md:py-4';
            case 'lg':
                return 'px-8 py-4 md:px-16 md:py-8';
        }
    }
    
    const getTextSize = (): string => {
        switch (size) {
            case 'sm':
                return 'text-my-lg';
            case 'md':
                return 'text-my-xl';
            case 'lg':
                return 'text-my-2xl';
        }
    }

    const defaultCn = clsx(
        "w-fit block",
        getPadding(),
        "flex items-center gap-4",
        getTextSize(),
        "text-br-white font-semibold",
        "bg-black rounded-2xl"
    )

    if (external) {
        return (
        <motion.a
            href={href}
            target="_blank"
            className={clsx(defaultCn, className)}
            variants={variants}
            whileHover="hovered"
        >
            {label}
        </motion.a>
        )
    }

    return (
    <motion.div
        className={clsx("w-fit block rounded-2xl", className)}
        variants={variants}
        whileHover="hovered"
    >
        <Link
            href={href}
            className={defaultCn}
        >
            {label}
        </Link>
    </motion.div>
    )
}

export default BlackBtn