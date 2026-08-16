import clsx from "clsx";
import { useTranslations } from "next-intl";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image"

interface Props {
    label: string;
    changeLocale: (locale: string) => void;
    assocLocale: string;
    isLast: boolean;
}

const LangItemBtn = ({ label, changeLocale, assocLocale, isLast }: Props) => {
    const t = useTranslations('Meta')

    return (
    <button
        onClick={() => changeLocale(assocLocale)}
        className={clsx(
            "px-4 py-4",
            "flex justify-center items-center gap-3 lg:gap-2",
            "bg-br-white",
            "select-none lg:hover:bg-gray-200 duration-200",
            !isLast && "border-r border-gray-400"
        )}
    >
        <div className="
            h-8 aspect-square
            rounded-full overflow-hidden relative"
        >
            <Image
                src={`/assets/${assocLocale}.svg`}
                fill
                sizes="100%"
                priority
                className="object-cover drag-none"
                alt={t('flagAlt')}
            />
        </div>
        <span className="text-md lg:text-lg text-black">{label}</span>
    </button>
    )
}

export default LangItemBtn