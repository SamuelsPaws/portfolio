import { motion } from "motion/react";

type LeftOrRight = 'left' | 'right';

interface BenefitsCardProps {
    leftOrRight: LeftOrRight;
    headline: string;
    description: string;
}

const BenefitsCard = ({ leftOrRight, headline, description }: BenefitsCardProps) => {
    const getVariants = (leftOrRight: LeftOrRight) => {
        const leftRightIndex = leftOrRight === 'right' ? 1 : leftOrRight === 'left' ? -1 : 1;

        return {
            hidden: {
                opacity: 0,
                x: 20 * leftRightIndex
            },
            visible: {
                opacity: 1,
                x: 0
            }
        }
    }

  return (
    <motion.div
        className="
            w-full h-full row-span-2 p-8
            flex flex-col justify-center gap-8
            border border-black/40 backdrop-blur-md rounded-2xl shadow-sm"
        variants={getVariants(leftOrRight)}
        initial='hidden'
        whileInView='visible'
        transition={{
            duration: 0.3,
            delay: 0.2
        }}
        viewport={{
            once: true
        }}
    >
        <p className="text-3xl text-black font-bold">{headline}</p>
        <p className="text-lg text-black/60">{description}</p>
    </motion.div>
  )
}

export default BenefitsCard