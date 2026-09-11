'use client'
import CustomIcon, { IconId } from "@/components/CustomIcon";
import { smoothRevealSm } from "@/lib/motion-variants/smoothReveal";
import { motion } from "motion/react";

interface Props {
    text: string;
    iconId: IconId;
}

const WhyCareItem = ({ text, iconId }: Props) => {
    return (
    <motion.div className="
        px-4
        flex items-center gap-4
        bg-br-white dark:bg-br-gray-600
        rounded-2xl"
        variants={smoothRevealSm}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <div className="
            w-8 aspect-square
            flex justify-center items-center
            text-my-xl text-br-orange-main"
        >
            <CustomIcon
                iconId={iconId}
            />
        </div>
        <div className="self-stretch w-[1px] bg-gray-300 dark:bg-br-gray-800"></div>
        <p className="
            flex-1 my-4
            text-my-md text-secondary text-left"
        >
            {text}
        </p>
    </motion.div>
    )
}

export default WhyCareItem