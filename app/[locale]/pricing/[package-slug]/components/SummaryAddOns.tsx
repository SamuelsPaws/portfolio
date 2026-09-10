'use client'
import { addOns } from "@/data/fortales/addons"
import { useAddOnsStore } from "@/lib/hooks/addons-state"
import { LocaleKey } from "@/lib/types/localeKey"
import { formatPrice } from "@/lib/utils/formatPrice";

interface Props {
    addOnComponents: React.ReactNode[];
    noAddOnsLabel: string;
}

const SummaryAddOns = ({ addOnComponents, noAddOnsLabel }: Props) => {

    return (
    <ul className="
        mb-8
        flex flex-col gap-4"
    >
        {addOnComponents.length ? (
            addOnComponents
        ) : (
            <p className="text-my-md text-secondary">
                {noAddOnsLabel}
            </p>
        )}
    </ul>
    )
}

export default SummaryAddOns