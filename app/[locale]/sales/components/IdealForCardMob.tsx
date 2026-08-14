import { motion } from "motion/react";

const bgGradientClass = {
    orange: 'bg-[linear-gradient(to_bottom,#f946,#520a_30%)]',
    blue: 'bg-[linear-gradient(to_bottom,#00f4,#0048_30%)]',
    green: 'bg-[linear-gradient(to_bottom,#0f03,#030a_30%)]',
    gray: 'bg-[linear-gradient(to_bottom,#0002,#0008_30%)]',
}

type colorKey = keyof typeof bgGradientClass;

interface IdealForCardMobProps {
    imgSrc: string;
    imgAlt: string;
    bizName: string;
    color: colorKey;
}

const IdealForCardMob = ({ imgSrc, imgAlt, bizName, color }: IdealForCardMobProps) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    const transition = {
        duration: 0.2
    }

  return (
    <motion.div
        className="
            w-[300px] aspect-square relative
            shadow-md rounded-2xl overflow-hidden"
        variants={variants}
        transition={transition}
        initial='hidden'
        whileInView='visible'
        viewport={{
            once: true
        }}
    >
        <div className={`absolute inset-0 ${bgGradientClass[color]} z-10`}></div>
        <img
            src={imgSrc}
            className="w-full h-full object-cover z-0"
            alt={imgAlt}
        />
        {/* Actual content */}
        <div className="
            absolute inset-0 px-8 z-20
            flex flex-col justify-center items-center
            text-white"
        >
            <p className="text-3xl text-center">{bizName}</p>
        </div>
    </motion.div>
  )
}

export default IdealForCardMob