import clsx from "clsx";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SetStateAction } from "react";

interface Props {
    src: string;
    alt: string;
    className: string;
    lgText: boolean;
    thisMediaIndex: number;
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
}

const variants = {
    hidden: {
        opacity: 0,
        y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
}

const ImageBtn = ({
    src,
    alt,
    className,
    lgText,
    thisMediaIndex,
    setSelectedMediaIndex
}: Props) => {
    const t = useTranslations('Reusable')

    const handleClick = () => {
        setSelectedMediaIndex(thisMediaIndex)
    }

    return (
    <motion.button
        onClick={handleClick}
        className={clsx(
            "relative",
            "group cursor-pointer",
            "rounded-2xl overflow-hidden",
            className
        )}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-24px 0px' }}
    >
        {/* Overlay */}
        <div className="
            absolute inset-0 z-10
            bg-radial from-black/70 to-black/40 opacity-0 md:group-hover:opacity-100 duration-600 ease-out"
        ></div>
        {/* See gallery text */}
        <div className="
            absolute left-1/2 top-1/2 -translate-1/2 z-20
            opacity-0 md:group-hover:opacity-100 duration-200"
        >
            <span className={clsx("text-br-white whitespace-nowrap", lgText ? "text-2xl" : "text-lg")}>
                {t('viewGallery')}
            </span>
        </div>
        {/* Image */}
        <Image
            src={src}
            fill
            sizes="100%"
            className="w-full h-full z-0 object-cover md:group-hover:scale-110 duration-600 ease-out"
            alt={alt}
        />
    </motion.button>
    )
}

export default ImageBtn