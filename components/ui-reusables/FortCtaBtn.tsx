'use client'
import Link from "next/link";
import CustomIcon from "../CustomIcon";
import { Variants } from "motion";
import { motion } from "motion/react";
import clsx from "clsx";

const cnMain = `
    px-8 py-4
    flex justify-center items-center gap-3
    bg-black dark:bg-br-white
    text-my-lg text-br-white dark:text-black
    rounded-full whitespace-nowrap
`

const cnSecondary = `
    px-8 py-4
    flex justify-center items-center gap-3
    text-my-lg text-br-gray-800 dark:text-gray-300
    bg-transparent
    border border-br-gray-800 dark:border-gray-300 rounded-full whitespace-nowrap
`

const cns = {
    main: cnMain,
    secondary: cnSecondary
} as const

const variants: Variants = {
    visible: {
        x: 0
    },
    hovered: {
        x: 6,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 18
        }
    },
}

interface Props {
    href: string;
    label: string;
    external?: boolean;
    type?: keyof typeof cns;
    centered?: boolean;
}

const FortCtaBtn = ({ href, label, external = false, type = 'main', centered }: Props) => {
    const cn = cns[type]
    const centeredCn = 'w-fit mx-auto'

    if (external) {
        return (
        <motion.a
            href={href}
            target="_blank"
            className={clsx(cn, centered && centeredCn)}
            variants={variants}
            initial="visible"
            whileHover="hovered"
        >
            <span>{label}</span>
            <CustomIcon
                iconId="arrowR"
                className='scale-110 -rotate-45'
            />
        </motion.a>
        )
    }

    return (
    <motion.div
        className={clsx("w-full md:w-fit h-fit block rounded-full", centered && centeredCn)}
        variants={variants}
        initial="visible"
        whileHover="hovered"
    >
        <Link
            href={href}
            className={cn}
        >
            <span>{label}</span>
            {type === 'main' && (
                <CustomIcon
                    iconId="arrowR"
                    className='scale-110'
                />
            )}
        </Link>
    </motion.div>
    )
}

export default FortCtaBtn