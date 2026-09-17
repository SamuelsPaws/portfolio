"use client";
import CustomIcon, { IconId } from "@/components/CustomIcon";
import { stepCardHover, stepCardReveal } from "@/lib/motion-variants/stepCardMotion";
import { motion, useReducedMotion } from "motion/react";

interface Props {
    iconId: IconId;
    num: number;
    title: string;
    copy: string;
    iconCn?: string;
}

const StepCard = ({ iconId, num, title, copy, iconCn }: Props) => {
    const reducedMotion = useReducedMotion() ?? false;

    return (
    <motion.article
        className="
            w-full md:w-100
            p-8
            flex flex-col
            bg-br-white dark:bg-br-gray-800
            border border-gray-300 rounded-4xl"
        variants={stepCardReveal}
        custom={reducedMotion}
        initial="hidden"
        whileInView="visible"
        whileHover={reducedMotion ? undefined : stepCardHover}
        viewport={{ once: true, amount: 0.3 }}
    >
        {/* Upper part */}
        <div className="
            w-full mb-8
            flex justify-between items-center"
        >
            <div className="
                w-12 aspect-square
                flex justify-center items-center
                bg-gray-200 dark:bg-br-gray-600
                text-4xl text-br-orange-main-desat
                rounded-full"
            >
                <CustomIcon
                    iconId={iconId}
                    className={iconCn}
                />
            </div>
            <div className="
                w-8
                flex justify-center"
            >
                <span className="text-my-lg text-br-orange-main font-semibold">
                    {num}
                </span>
            </div>
        </div>
        <h2 className="mb-4 text-2xl md:text-3xl text-main font-['Source_Serif_4']">
            {title}
        </h2>
        <p className="text-secondary text-my-md">
            {copy}
        </p>
    </motion.article>
    )
}

export default StepCard
