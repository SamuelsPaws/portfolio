import Image from "next/image";
import Link from "next/link";
import CustomIcon from "@/components/CustomIcon";
import Eyebrow from "@/components/ui-reusables/Eyebrow";

type Props = {
    href: string;
    imgSrc: string;
    imgWidth: number;
    imgHeight: number;
    imgAlt: string;
    category: string;
    title: string;
    description: string;
    ctaLabel: string;
};

export default function FeaturedPortfolioCard({
    href,
    imgSrc,
    imgWidth,
    imgHeight,
    imgAlt,
    category,
    title,
    description,
    ctaLabel,
}: Props) {
    return (
    <Link
        href={href}
        className="
            group w-full md:w-80
            flex flex-col
            rounded-4xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-current"
    >
        <div className="mb-4 overflow-hidden rounded-4xl">
            <Image
                src={imgSrc}
                width={imgWidth}
                height={imgHeight}
                sizes="(min-width: 768px) 320px, 100vw"
                className="
                    w-full h-60 md:h-80 object-cover
                    md:group-hover:scale-105 duration-400"
                alt={imgAlt}
            />
        </div>
        <Eyebrow
            text={category}
            shortMargin
        />
        <h3 className="
            mb-2
            text-2xl md:text-3xl font-['Source_Serif_4']"
        >
            {title}
        </h3>
        <p className="
            mb-4
            text-myf-md text-secondary"
        >
            {description}
        </p>
        <div className="
            mt-auto flex items-center gap-3
            text-my-md text-main font-semibold
            md:group-hover:pl-2 duration-400 ease-out"
        >
            <span>
                {ctaLabel}
            </span>
            <span aria-hidden="true">
                <CustomIcon iconId="arrowR" />
            </span>
        </div>
    </Link>
    );
}
