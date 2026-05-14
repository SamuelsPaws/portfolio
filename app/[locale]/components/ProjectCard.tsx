'use client'
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string
    description: string | null
    imgUrl: string
    tech: string
    href: string
    theme: string
}

const ProjectCard = ({ title, description, imgUrl, tech, href, theme }: ProjectCardProps) => {

  return (
    <Link href={href} className="w-full lg:w-auto">
      <motion.div
        className={clsx(
          "w-full lg:w-[380px] h-[400px] lg:h-[500px]",
          "p-4 lg:p-8 relative",
          "flex flex-col gap-4 lg:gap-8",
          "rounded-2xl overflow-hidden hover-shadow-lg",
          theme === 'dark' && "bg-black",
          theme === 'light' && "bg-mywhite"
        )}
        whileHover={{ y: -20, x: -5, }}
        transition={{ duration: 0.3, type: 'spring' }}
      >
        <div className={clsx(
          "w-full aspect-[40/21] relative",
          "rounded-2xl overflow-hidden",
          theme === 'dark' ? "border-4 border-mywhite" : "border border-gray-200"
        )}>
          <Image
            src={imgUrl}
            fill
            sizes="105%"
            className={clsx(
              "w-full object-cover",
              imgUrl === '/assets/icounter.webp' && 'scale-105'
            )}
            alt={`OpenGraph image for the project: ${title}`}
          />
        </div>
        <div className="
          flex-1
          flex flex-col"
        >
          {/* Title */}
          <h3 className={clsx(
            "mb-2",
            "text-xl lg:text-2xl font-semibold",
            theme === 'dark' && "text-mywhite",
            theme === "light" && "text-black"
          )}>
            {title}
          </h3>
          {/* Description */}
          {description &&
            <p className={clsx(
              "mb-2 lg:mb-8",
              "text-md lg:text-xl",
              theme === 'dark' && "text-gray-300",
              theme === 'light' && "text-gray-600"
            )}>
              {description}
            </p>
          }
          <p className={clsx(
            "self-end",
            "text-md lg:text-lg font-semibold",
            theme === 'dark' && "text-green-500",
            theme === 'light' && "text-green-600"
          )}>
            {tech}
          </p>
        </div>
        <div className={clsx(
          "absolute",
          "bottom-4 right-4",
          "lg:bottom-8 lg:right-8",
          theme === 'dark' ? "text-mywhite" : "text-black",
          "text-3xl"
        )}>
          <i className="fa fa-external-link"></i>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProjectCard