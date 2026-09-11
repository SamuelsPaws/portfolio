'use client'
import CustomIcon from "@/components/CustomIcon"
import organization from "@/data/fortales/organization";
import { smoothRevealHover } from "@/lib/motion-variants/smoothReveal";
import { motion } from "motion/react";

interface Props {
    label: string;
    prefill: string;
}

const WaBtn = ({ label, prefill }: Props) => {
    return (
    <motion.a
        href={`https://wa.me/${organization.phone}?text=${prefill}`}
        target="_blank"
        className="
            w-fit mx-auto
            px-8 py-4
            flex items-center gap-4
            bg-whatsapp-500
            text-my-xl text-br-white
            rounded-full"
        variants={smoothRevealHover}
        initial="hidden"
        whileInView="visible"
        whileHover="hovered"
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <span>{label}</span>
        <CustomIcon
            iconId="whatsapp"
        />
    </motion.a>
    )
}

export default WaBtn