'use client'
import { springyHoverRevealBig } from "@/lib/motion-variants/springyHover";
import { ProjectShort } from "@/lib/types/projectShort";
import mapTechLabel from "@/lib/utils/mapTechLabel";
import clsx from "clsx";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import CustomIcon from "./CustomIcon";

const variants = springyHoverRevealBig

interface Props {
    project: ProjectShort;
    theme: 'light' | 'dark';
}

const ProjectCard = ({ project, theme }: Props) => {

    return (
    <Link
        href={`/projects/${project.type}/${project.slug}`}
        className="w-full lg:w-auto"
    >
        <motion.div
            className={clsx(
                "w-full lg:w-[380px] h-[400px] lg:h-120",
                "p-4 lg:p-8 relative group",
                "flex flex-col gap-4 lg:gap-4",
                "rounded-2xl overflow-hidden",
                theme === 'dark' && "bg-black dark:bg-br-gray-600",
                theme === 'light' && "bg-br-white dark:bg-br-black"
            )}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-32px 0px" }}
            whileHover="hovered"
        >
            <div className={clsx(
                "w-full aspect-og relative",
                "rounded-2xl overflow-hidden",
                theme === 'dark' ? "border-4 border-br-white" : ""
            )}>
                <Image
                    src={project.imgSrc}
                    fill
                    sizes="100%"
                    className={clsx(
                        "w-full h-full object-cover",
                    )}
                    alt={`OpenGraph image for the project: ${project.title}`}
                />
            </div>
            <div className="
                flex-1
                flex flex-col"
            >
                {/* Title */}
                <h3 className={clsx(
                    "mb-2",
                    "text-my-xl font-semibold",
                    theme === 'dark' && "text-br-white",
                    theme === "light" && "text-black dark:text-br-white"
                )}>
                    {project.title}
                </h3>
                {/* Tech */}
                <p className={clsx(
                    "mb-2",
                    "text-myf-lg font-semibold",
                    theme === 'dark' && "text-orange-400",
                    theme === 'light' && "text-orange-500"
                )}>
                    {project.tech.map(mapTechLabel).join(', ')}
                </p>
                {/* Description */}
                <p className={clsx(
                    "mb-2 lg:mb-8",
                    "text-myf-lg",
                    theme === 'dark' && "text-gray-300 dark:text-br-white",
                    theme === 'light' && "text-gray-700 dark:text-gray-200"
                )}>
                    {project.description}
                </p>
            </div>
            {/* Arrow icon */}
            <div className={clsx(
                "absolute",
                "bottom-4 right-4",
                "md:bottom-8 md:right-8",
                "w-10 md:w-12 aspect-square",
                "flex justify-center items-center",
                "duration-400",
                theme === 'dark' ?
                    "text-gray-400 md:group-hover:text-orange-400"
                    :
                    "text-gray-500 md:group-hover:text-orange-500",
                "text-2xl md:text-3xl",
                "border rounded-full",
                theme === 'dark' ?
                    "border-gray-400 md:group-hover:border-orange-400"
                    :
                    "border-gray-500 md:group-hover:border-orange-500"
            )}>
                <CustomIcon
                    iconId="arrowR"
                />
            </div>
        </motion.div>
    </Link>
    )
}

export default ProjectCard