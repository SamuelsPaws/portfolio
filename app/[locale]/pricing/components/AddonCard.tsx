'use client'
import { stepCardHover, stepCardReveal } from "@/lib/motion-variants/stepCardMotion";
import { AddOn } from "@/lib/types/fortales/addons"
import { LocaleKey } from "@/lib/types/localeKey";
import { formatPrice } from "@/lib/utils/formatPrice";
import { motion, useReducedMotion } from "motion/react";

interface Props {
    item: AddOn;
    locale: LocaleKey
}

const AddonCard = ({ item, locale }: Props) => {
    const reducedMotion = useReducedMotion() ?? false;

    return (
    <motion.div 
        className="
            w-full
            p-8
            flex flex-col justify-between
            bg-br-white dark:bg-br-gray-800
            border border-gray-300 rounded-4xl"
        variants={stepCardReveal}
        custom={reducedMotion}
        initial="hidden"
        whileInView="visible"
        whileHover={reducedMotion ? undefined : stepCardHover}
        viewport={{ once: true, amount: 0.3 }}
    >
        <h4 className="
            mb-4
            text-my-lg text-br-orange-main font-semibold"
        >
            {item.title[locale].toUpperCase()}
        </h4>
        <p className="
            mb-4
            text-secondary text-my-md"
        >
            {item.copy[locale]}
        </p>
        <div className="flex gap-2 items-end">
            <span className="text-3xl md:text-4xl font-semibold text-main">
                ${formatPrice(item.price)}
            </span>
            <span className="text-my-lg text-secondary">
                / {item.paymentDetail[locale].toLowerCase()}
            </span>
        </div>
    </motion.div>
    )
}

export default AddonCard