import { PackageTheme, PackageType } from "@/lib/types/fortales/packages";
import PackageBenefit from "./subcomponents/PackageBenefit";
import { LocaleKey } from "@/lib/types/localeKey";
import { formatPrice } from "@/lib/utils/formatPrice";
import Link from "next/link";
import CustomIcon from "../CustomIcon";
import clsx from "clsx";

interface Props {
    myPackage: PackageType;
    locale: LocaleKey;
    theme: PackageTheme;
    ctaLabel: string;
}

const PackageCard = ({ myPackage, locale, theme, ctaLabel }: Props) => {
    const features = myPackage.features.filter(el => el.priority).map(el => el.text[locale])

    return (
    <div className={clsx(
        "w-120 p-8",
        "flex flex-col justify-between",
        theme.backgroundColor,
        theme.borderClasses,
        "rounded-4xl", theme.shadow
    )}>
        {/* Wrapper for between */}
        <div className="w-full">
            {/* Title */}
            <h3 className="
                mb-4
                text-2xl text-main font-semibold"
            >
                {myPackage.title[locale].toUpperCase()}
            </h3>
            {/* Description */}
            <p className="
                mb-4
                text-my-md text-secondary"
            >
                {myPackage.description[locale]}
            </p>
            {/* Price */}
            <div className="mb-8">
                <span className="text-4xl text-main font-semibold">
                    ${formatPrice(myPackage.price)}
                </span>
                <span className="text-my-md text-secondary">
                    {` / ${myPackage.paymentFrequency[locale].toLowerCase()}`}
                </span>
            </div>
            {/* Features */}
            <ul className="
                w-full mb-8
                flex flex-col gap-4"
            >
                {features.map((el, index) => (
                    <PackageBenefit
                        key={index}
                        text={el}
                        theme={theme}
                    />
                ))}
            </ul>
        </div>
        {/* Cta */}
        <Link
            href={`/pricing/${myPackage.slug}`}
            className={clsx(
                "w-full justify-self-end group",
                "py-4",
                "flex justify-center items-center gap-3",
                theme.ctaBgColor,
                "text-my-md", theme.ctaTextColor,
                "rounded-full"
            )}
        >
            <span className="md:group-hover:pl-4 duration-200">
                {ctaLabel}
            </span>
            <CustomIcon
                iconId="arrowR"
                className="scale-110"
            />
        </Link>
    </div>
    )
}

export default PackageCard