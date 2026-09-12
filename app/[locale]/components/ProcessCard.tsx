'use client'
import { smoothReveal } from "@/lib/motion-variants/smoothReveal";
import clsx from "clsx";
import { motion } from "motion/react";

interface Props {
    title: string;
    number: number;
    text: string;
    place: string;
}

const ProcessCard = ({ title, number, text, place }: Props) => {
    return (
    <motion.div
        className={clsx(
            "w-full md:w-[75%]",
            place,
            "flex flex-col",
            "rounded-2xl md:rounded-4xl overflow-hidden shadow-img-sm"
        )}
        variants={smoothReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        {/* Upper part */}
        <div className="
            w-full p-4 md:p-8
            flex items-center gap-4
            bg-black dark:bg-br-gray-800"
        >
            {/* Number */}
            <div className="
                w-6 md:w-8 aspect-square
                flex justify-center items-center
                bg-br-white
                text-black text-my-md font-semibold
                rounded-full overflow-hidden"
            >
                <span>{number}</span>
            </div>
            {/* Title */}
            <h3 className="flex-1 text-br-white text-my-lg font-semibold">
                {title}
            </h3>
        </div>
        {/* Lower part */}
        <div className="
            w-full p-4 md:p-8
            bg-br-white dark:bg-br-gray-600
            border-x border-b border-gray-300 dark:border-transparent
            rounded-b-2xl md:rounded-b-4xl"
        >
            <p className="text-main text-sm md:text-md xl:text-lg text-left">
                {text}
            </p>
        </div>
    </motion.div>
    )
}

export default ProcessCard