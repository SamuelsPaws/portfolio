'use client'
import type { PortfolioProject } from "@/lib/types/fortales/portfolio"
import type { LocaleKey } from "@/lib/types/localeKey"
import Eyebrow from "@/components/ui-reusables/Eyebrow"
import Image from "next/image"
import ImplementationItem from "./subcomponents/ImplementationItem"
import HighlightItem from "./subcomponents/HighlightItem"
import FortCtaBtn from "@/components/ui-reusables/FortCtaBtn"
import clsx from "clsx"
import { motion, useReducedMotion } from "motion/react"
import { projectRevealGroup, projectRevealItem } from "@/lib/motion-variants/projectReveal"

interface Props extends Omit<PortfolioProject, "slug"> {
    locale: LocaleKey;
    ctaHref: string;
    ctaLabel: string;
    reversed: boolean;
    isFirst: boolean;
    isLast: boolean;
}

const ProjectCard = (props: Props) => {
    const reducedMotion = useReducedMotion() ?? false
    return (
    <motion.div
        variants={projectRevealGroup}
        custom={reducedMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className={clsx(
            "w-full min-w-0",
            "flex flex-col items-stretch gap-6 sm:gap-8 lg:items-center lg:gap-10 xl:gap-16",
            props.reversed ? "lg:flex-row-reverse" : "lg:flex-row",
            props.isFirst ? "pb-8" : "py-8",
            !props.isLast && "border-b border-gray-400"
    )}>
        <motion.div
            className="w-full min-w-0 lg:w-1/2 xl:w-[60%] lg:shrink-0"
            variants={projectRevealItem}
            custom={reducedMotion}
        >
            <Image
                src={props.imgSrc}
                width={props.imgW}
                height={props.imgH}
                className="w-full aspect-[3/2] lg:aspect-auto lg:h-120 xl:h-155 object-cover rounded-2xl sm:rounded-4xl"
                sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 50vw, 100vw"
                alt={props.imgAlt[props.locale]}
            />
        </motion.div>
        <motion.div
            variants={projectRevealItem}
            custom={reducedMotion}
            className="w-full min-w-0 lg:flex-1 wrap-break-word"
        >
            <Eyebrow
                text={props.eyebrow[props.locale]}
                desat
                wide
            />
            <h3 className="
                mb-4
                text-3xl sm:text-4xl xl:text-6xl leading-tight text-main font-['Source_Serif_4']"
            >
                {props.title}
            </h3>
            <p className="
                mb-6 sm:mb-8
                text-my-md text-secondary leading-relaxed"
            >
                {props.copy[props.locale]}
            </p>
            <div className="
                mb-6 sm:mb-8
                flex flex-wrap items-center gap-2 sm:gap-4"
            >
                {props.implementations.map((el, index) => (
                    <ImplementationItem
                        key={index}
                        text={el[props.locale]}
                    />
                ))}
            </div>
            <div className="w-full h-[1px] mb-6 sm:mb-8 bg-gray-400" />
            <div className="
                mb-6 sm:mb-8
                grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
                {props.highlights.map((highlight) => (
                    <HighlightItem
                        key={`${highlight.iconId}-${highlight.text[props.locale]}`}
                        iconId={highlight.iconId}
                        text={highlight.text[props.locale]}
                    />
                ))}
            </div>
            <div className="max-w-full [&_a]:whitespace-normal [&_a]:px-5 [&_a]:text-center [&_a_span]:min-w-0 [&_svg]:shrink-0">
                <FortCtaBtn
                    href={props.ctaHref}
                    label={props.ctaLabel}
                />
            </div>
        </motion.div>
    </motion.div>
    )
}

export default ProjectCard