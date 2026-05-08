'use client'
import clsx from "clsx";
import { motion } from "motion/react";

interface ContactItemProps {
    href: string;
    iconClass: string;
    text: string;
    newTab: boolean;
}

const ContactItem = ({ href, iconClass, text, newTab }: ContactItemProps) => {
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
        <i className={clsx("fa", iconClass)}></i>
        <span className="underline">
            {text}
        </span>
    </motion.a>
  )
}

export default ContactItem