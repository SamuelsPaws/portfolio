'use client'
import Image from "next/image";
import ProfileSkillBullet from "./ProfileSkillBullet";
import { motion } from "motion/react";
import { smoothReveal } from "@/lib/motion-variants/smoothReveal";

interface Props {
    image: {
        src: string,
        width: number,
        height: number
    };
    name: string;
    role: string;
    description: string;
    skills: string[];
}

const ProfileColumn = ({ image, name, role, description, skills }: Props) => {
    return (
    <motion.div
        className="
            w-full md:w-1/2
            p-8 md:p-16
            flex flex-col items-center gap-4 md:gap-8
            bg-secondary
            border border-gray-400 rounded-4xl"
        variants={smoothReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <Image
            src={image.src}
            width={image.width}
            height={image.height}
            sizes="(max-width: 768px) 80vw, 260px"
            className="
                w-[80%] md:w-65 aspect-square
                object-cover object-[50%_10%]
                rounded-full border-2 border-br-orange-main-desat/50"
            alt="Foto de un miembro de Fortales"
        />
        <h3 className="text-2xl md:text-4xl text-main text-center font-['Source_Serif_4']">
            {name}
        </h3>
        <p className="text-my-lg text-br-orange-main-desat text-center font-semibold">
            {role}
        </p>
        <p className="text-my-md text-secondary text-center">
            {description}
        </p>
        {/* Bullet list */}
        <ul className="hidden md:flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            {skills.map((el, index) => (
                <ProfileSkillBullet
                    key={index}
                    text={el}
                />
            ))}
        </ul>
    </motion.div>
    )
}

export default ProfileColumn