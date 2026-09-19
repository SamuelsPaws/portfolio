'use client'
import { IconId } from "@/components/CustomIcon"
import OrangeWithIcon from "@/components/ui-reusables/OrangeWithIcon";
import { smoothReveal } from "@/lib/motion-variants/smoothReveal";
import { motion } from "motion/react";

interface Props {
    iconId: IconId;
    text: string;
}

const GoalItem = ({ iconId, text }: Props) => {
    return (
    <motion.div
        className="
            w-full md:w-100
            p-8
            flex items-center gap-4
            bg-main
            rounded-2xl border border-gray-300 dark:border-gray-600"
        variants={smoothReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <OrangeWithIcon iconId={iconId} />
        <span className="flex-1 text-secondary text-my-md">
            {text}
        </span>
    </motion.div>
    )
}

export default GoalItem