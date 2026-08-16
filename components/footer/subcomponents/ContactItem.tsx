'use client'
import CustomIcon, { IconId } from "@/components/CustomIcon";
import clsx from "clsx";
import { motion } from "motion/react";

interface ContactItemProps {
    href: string;
    iconId: IconId;
    text: string;
    newTab: boolean;
}

const ContactItem = ({ href, iconId, text, newTab }: ContactItemProps) => {
  return (
    <motion.a
        href={href}
        className="
            flex items-center gap-4
            text-lg lg:text-2xl text-gray-300"
        target={newTab ? "_blank" : undefined}
        whileHover={{ letterSpacing: '1px' }}
        transition={{ duration: 0.3, type: 'spring' }}
    >
        <CustomIcon
            iconId={iconId}
        />
        <span className="underline">
            {text}
        </span>
    </motion.a>
  )
}

export default ContactItem