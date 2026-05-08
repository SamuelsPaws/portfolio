'use client'
import clsx from 'clsx'
import { motion } from 'motion/react'

const paddingClasses = {
    sm: 'px-1 lg:px-2 py-0 lg:py-1',
    md: 'px-2 lg:px-4 py-1 lg:py-2',
    lg: 'px-8 lg:px-8 py-4 lg:py-4'
}

interface Props {
    children: React.ReactNode;
    textSize: string;
    paddingSize: 'sm' | 'md' | 'lg';
}

const RoundBlackInner = ({ children, textSize, paddingSize }: Props) => {
    return (
    <motion.div
        className={clsx(
            "text-mywhite font-semibold bg-black rounded-full hover-shadow-sm",
            "flex items-center gap-4",
            textSize,
            paddingClasses[paddingSize] ?? paddingClasses.md
        )}
        whileHover={{ y: -4, x: -1, }}
        transition={{ duration: 0.2, type: 'spring' }}
    >
        {children}
    </motion.div>
    )
}

export default RoundBlackInner