import SimpleH2 from "@/components/SimpleH2";
import { PackageTheme, PackageType } from "@/lib/types/fortales/packages"
import { LocaleKey } from "@/lib/types/localeKey";
import { formatPrice } from "@/lib/utils/formatPrice";
import clsx from "clsx";
import PackageFeature from "./PackageFeature";
import Link from "next/link";
import CustomIcon from "@/components/CustomIcon";

interface Props {
    myPackage: PackageType;
    locale: LocaleKey;
    theme: PackageTheme;
    isLast?: boolean;
    ctaLabel: string;
}

const PackageLarge = ({ myPackage, locale, theme, isLast = false, ctaLabel }: Props) => {
    const features = myPackage.features.map(el => el.text[locale])

    return (
    <div className={clsx(
        "w-full md:w-1/2",
        "px-4 py-8 md:p-16",
        "flex flex-col justify-between",
        theme.backgroundColor,
        !isLast && "md:border-r border-gray-300"
    )}>
        {/* Wrapper for betweek */}
        <div className="w-full">
            {/* Title */}
            <SimpleH2
                text={myPackage.title.en}
                className="mb-8 text-most-h2"
            />
            {/* Price */}
            <div className="mb-8">
                <span className="text-4xl text-main font-semibold">
                    ${formatPrice(myPackage.price)}
                </span>
                <span className="text-my-md text-secondary">
                    {` / ${myPackage.paymentFrequency[locale].toLowerCase()}`}
                </span>
            </div>
            <p className="mb-8 text-my-md text-secondary">
                {myPackage.descriptionLong[locale]}
            </p>
            {/* Features */}
            <ul className="
                mb-16
                flex flex-col gap-4"
            >
                {features.map((el, index) => (
                    <PackageFeature
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
                "text-my-lg", theme.ctaTextColor,
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

export default PackageLarge