import { motion } from "motion/react";

const bgGradientClass = {
    orange: 'bg-[linear-gradient(to_bottom,#fca6,#a60b_30%)]',
    blue: 'bg-[linear-gradient(to_bottom,#00f4,#0068_30%)]',
    green: 'bg-[linear-gradient(to_bottom,#9fb5,#052a_30%)]',
    gray: 'bg-[linear-gradient(to_bottom,#0002,#0008_30%)]',
}

type colorKey = keyof typeof bgGradientClass;

interface IdealForCardProps {
    variants: {};
    isEdge: boolean;
    imgSrc: string;
    imgAlt: string;
    bizName: string;
    color: colorKey;
}

const IdealForCard = ({ variants, isEdge, imgSrc, imgAlt, bizName, color }: IdealForCardProps) => {
    const transitionEdgeItem = {
        duration: 0.5,
        delay: 0.4
    }

    const transitionCenterItem = {
        duration: 0.2
    }

  return (
    <motion.div
        className="
            w-[300px] aspect-square hover:scale-[1.02] hover:mx-1 duration-200
            relative select-none
            shadow-md rounded-2xl overflow-hidden"
        variants={variants}
        transition={isEdge ? transitionEdgeItem : transitionCenterItem}
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

export default IdealForCard