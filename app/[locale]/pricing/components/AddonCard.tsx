import { AddOn } from "@/lib/types/fortales/addons"
import { LocaleKey } from "@/lib/types/localeKey";
import { formatPrice } from "@/lib/utils/formatPrice";

interface Props {
    item: AddOn;
    locale: LocaleKey
}

const AddonCard = ({ item, locale }: Props) => {
    return (
    <div className="
        w-full
        p-8
        flex flex-col justify-between
        bg-br-white dark:bg-br-gray-800
        border border-gray-300 rounded-4xl shadow-img-sm"
    >
        <h4 className="
            mb-4
            text-my-lg text-br-orange-main font-semibold"
        >
            {item.title[locale].toUpperCase()}
        </h4>
        <p className="
            mb-4
            text-secondary text-my-md"
        >
            {item.copy[locale]}
        </p>
        <div className="flex gap-2 items-end">
            <span className="text-3xl md:text-4xl font-semibold text-main">
                ${formatPrice(item.price)}
            </span>
            <span className="text-my-lg text-secondary">
                / {item.paymentDetail[locale].toLowerCase()}
            </span>
        </div>
    </div>
    )
}

export default AddonCard