'use client'
import { springyHoverBigger } from "@/lib/motion-variants/springyHover";
import { ProjectShort } from "@/lib/types/projectShort";
import mapTechLabel from "@/lib/utils/mapTechLabel";
import clsx from "clsx";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const variants = springyHoverBigger

interface Props {
    project: ProjectShort;
    theme: 'light' | 'dark';
}

const ProjectCard = ({ project, theme }: Props) => {

    return (
    <Link
        href={`/${project.type}/${project.slug}`}
        className="w-full lg:w-auto"
    >
        <motion.div
            className={clsx(
                "w-full lg:w-[380px] h-[400px] lg:h-110",
                "p-4 lg:p-8 relative",
                "flex flex-col gap-4 lg:gap-4",
                "rounded-2xl overflow-hidden",
                theme === 'dark' && "bg-black",
                theme === 'light' && "bg-br-white"
            )}
            variants={variants}
            whileHover="hovered"
        >
            <div className={clsx(
                "w-full aspect-[40/21] relative",
                "rounded-2xl overflow-hidden",
                theme === 'dark' ? "border-4 border-br-white" : "border-2 border-black"
            )}>
                <Image
                    src={project.imgSrc}
                    fill
                    sizes="105%"
                    className={clsx(
                        "w-full object-cover",
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
                    "text-xl lg:text-xl font-semibold",
                    theme === 'dark' && "text-br-white",
                    theme === "light" && "text-black"
                )}>
                    {project.title}
                </h3>
                {/* Tech */}
                <p className={clsx(
                    "mb-2",
                    "text-sm lg:text-md font-semibold",
                    theme === 'dark' && "text-green-500",
                    theme === 'light' && "text-green-600"
                )}>
                    {project.tech.map(mapTechLabel).join(', ')}
                </p>
                {/* Description */}
                <p className={clsx(
                    "mb-2 lg:mb-8",
                    "text-md lg:text-md",
                    theme === 'dark' && "text-gray-300",
                    theme === 'light' && "text-gray-600"
                )}>
                    {project.description}
                </p>
            </div>
            <div className={clsx(
                "absolute",
                "bottom-4 right-4",
                "lg:bottom-8 lg:right-8",
                theme === 'dark' ? "text-br-white" : "text-black",
                "text-3xl"
            )}>
                <i className="fa fa-arrow-right"></i>
            </div>
        </motion.div>
    </Link>
    )
}

export default ProjectCard