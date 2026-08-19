import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";

interface Props {
    src: string;
    className: string;
}

const variants = {
    hidden: {
        opacity: 0,
        y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
}

const ImageNoBtn = ({ src, className }: Props) => {
    return (
    <motion.div
        className={clsx(
            "relative",
            className
        )}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        <Image
            src={src}
            fill
            sizes="100%"
            className="w-full h-full object-cover"
            alt="Fotografía propiedad de Ilaló Garden Hotel"
        />
    </motion.div>
    )
}

export default ImageNoBtn