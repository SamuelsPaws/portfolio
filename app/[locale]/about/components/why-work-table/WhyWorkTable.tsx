import { useTranslations } from "next-intl"
import WhyWorkItem from "./subcomponents/WhyWorkItem"
import WhyWorkRow from "./subcomponents/WhyWorkRow"

const WhyWorkTable = () => {
    const t = useTranslations('FortAbout')

    return (
    <div className="
        w-200 mx-auto
        grid grid-cols-2
        border border-gray-200
        rounded-4xl shadow-img-sm overflow-hidden"
    >
        <WhyWorkItem dark>
            <span className="text-my-md text-gray-title font-semibold">
                {t('others')}
            </span>
        </WhyWorkItem>
        <WhyWorkItem dark>
            <span className="text-my-md text-br-orange-main font-semibold">
                Fortales
            </span>
        </WhyWorkItem>
        {/* Rows */}
        {Array(4).fill(null).map((el, index) => (
            <WhyWorkRow
                key={index}
                otherText={t(`row${index + 1}Others`)}
                fortalesText={t(`row${index + 1}Us`)}
            />
        ))}
    </div>
    )
}

export default WhyWorkTable