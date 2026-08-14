import { useTranslations } from "next-intl";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image"

interface Props {
    label: string;
    changeLocale: (locale: string) => void;
    assocLocale: string;
}

const LangItemBtn = ({ label, changeLocale, assocLocale }: Props) => {
    const t = useTranslations('Meta')

    return (
    <button
        onClick={() => changeLocale(assocLocale)}
        className="
            w-24 py-2
            flex justify-center items-center gap-3 lg:gap-2
            bg-mywhite
            rounded-xl select-none lg:hover:bg-sky-100 duration-200"
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
        <span className="text-md lg:text-lg">{label}</span>
    </button>
    )
}

export default LangItemBtn