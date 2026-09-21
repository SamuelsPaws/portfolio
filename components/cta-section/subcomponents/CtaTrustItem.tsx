'use client'
import CustomIcon from "@/components/CustomIcon";
import { smoothRevealSm } from "@/lib/motion-variants/smoothReveal";
import { motion } from "motion/react";

interface Props {
    text: string;
}

const CtaTrustItem = ({ text }: Props) => {
    return (
    <motion.li
        className="
            w-full
            flex items-center gap-4"
        variants={smoothRevealSm}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        {/* Check icon */}
        <div className="
            w-8 aspect-square
            flex justify-center items-center
            text-my-xl text-br-orange-main"
        >
            <CustomIcon
                iconId="check"
            />
        </div>
        <p className="flex-1 text-my-xl text-secondary">
            {text}
        </p>
    </motion.li>
    )
}

export default CtaTrustItem