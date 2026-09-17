'use client'
import { stepCardRevealNoShadow } from "@/lib/motion-variants/stepCardMotion";
import { motion } from "motion/react";

interface Props {
    text: string;
}

const ContactCtaH2 = ({ text }: Props) => {
    return (
    <motion.h2
        className="
            w-full max-w-200 mx-auto mb-4 md:mb-8
            text-4xl md:text-5xl xl:text-7xl text-center
            font-['Source_Serif_4'] leading-tight xl:leading-22"
        variants={stepCardRevealNoShadow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-32px 0px' }}
    >
        {text}
    </motion.h2>
    )
}

export default ContactCtaH2