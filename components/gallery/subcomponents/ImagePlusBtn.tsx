import clsx from "clsx";
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
    numberLabel: string;
}

const ImagePlusBtn = ({
    src,
    alt,
    className,
    lgText,
    thisMediaIndex,
    setSelectedMediaIndex,
    numberLabel
}: Props) => {
    const t = useTranslations('General')

    const handleClick = () => {
        setSelectedMediaIndex(thisMediaIndex)
    }

    return (
    <button
        onClick={handleClick}
        className={clsx(
            "relative",
            "group cursor-pointer",
            "rounded-2xl overflow-hidden",
            className
        )}
    >
        {/* Overlay */}
        <div className="
            absolute inset-0 z-10
            bg-radial from-black/70 to-black/40 opacity-90 md:group-hover:opacity-100 duration-600 ease-out"
        ></div>
        {/* Number label */}
        <div className="absolute left-1/2 top-1/2 -translate-1/2 z-20">
            <span className={clsx(
                "text-br-white whitespace-nowrap",
                lgText ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"
            )}>
                +{numberLabel !== '0' && numberLabel}
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
    </button>
    )
}

export default ImagePlusBtn