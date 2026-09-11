'use client'

import { smoothReveal } from "@/lib/motion-variants/smoothReveal";
import { motion } from "motion/react";

interface Props {
    imgSrc: string;
    alt: string;
    title: string;
    description: string;
}

const IdealForCard = ({ imgSrc, title, description, alt }: Props) => {
    return (
    <motion.div
        className="
            w-full md:w-90
            flex flex-col gap-4 md:gap-8"
        variants={smoothReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-32px 0px' }}
    >
        <div className="w-full h-50 md:h-70">
            <img
                src={imgSrc}
                className="w-full h-full object-contain"
                alt={alt}
            />
        </div>
        <div className="flex flex-col gap-4">
            <h3 className="text-br-gray-600 dark:text-gray-300 text-my-lg text-center font-semibold leading-8">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-myf-md text-center">
                {description}
            </p>
        </div>
    </motion.div>
    )
}

export default IdealForCard