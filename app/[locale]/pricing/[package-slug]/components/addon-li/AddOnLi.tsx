'use client'
import { addOns } from "@/data/fortales/addons"
import EnableToggle from "./subcomponents/EnableToggle";
import { AddOn } from "@/lib/types/fortales/addons";
import { LocaleKey } from "@/lib/types/localeKey";
import ExpandableArea from "@/components/ExpandableArea";
import { useId, useState } from "react";
import CustomIcon from "@/components/CustomIcon";
import clsx from "clsx";
import { formatPrice } from "@/lib/utils/formatPrice";
import QuantitySelect from "./subcomponents/QuantitySelect";
import { useAddOnsStore } from "@/lib/hooks/addons-state";

interface Props {
    addOnData: AddOn;
    addOnSlug: (typeof addOns)[number]['slug'];
    locale: LocaleKey
}

const AddOnLi = ({ addOnData, addOnSlug, locale }: Props) => {
    const addOnState = useAddOnsStore((state) => state.addOns[addOnSlug])
    const [isInfoExpanded, setIsInfoExpanded] = useState<boolean>(false)
    const infoId = useId()

    const toggleInfoExpanded = () => {
        setIsInfoExpanded(prev => !prev)
    }

    return (
    <li className="
        w-full
        flex flex-col"
    >
        {/* Upper part and all that shows on desk */}
        <div className="
            w-full
            p-4
            bg-br-white
            border border-gray-300 rounded-t-2xl md:rounded-2xl"
        >
            {/* Upper part */}
            <div className="flex justify-between items-center gap-4">
                {/* Wrapper for between */}
                <div className="flex items-center gap-4 xl:gap-8">
                    <EnableToggle
                        addOnState={addOnState}
                        addOnSlug={addOnSlug}
                        label={addOnData.title[locale]}
                    />
                    <h3 className="text-my-md text-br-gray-600 font-semibold">
                        {addOnData.title[locale]}
                    </h3>
                    <button
                        type="button"
                        onClick={toggleInfoExpanded}
                        aria-expanded={isInfoExpanded}
                        aria-controls={infoId}
                        className="
                            flex items-center gap-1
                            text-my-sm text-br-gray-500
                            md:hover:text-gray-400 duration-200"
                    >
                        <span>Info</span>
                        <CustomIcon
                            iconId="chevronDown"
                            className={clsx(isInfoExpanded ? "-rotate-180" : "rotate-0", "duration-200")}
                        />
                    </button>
                </div>
                {/* Wrapper for between right */}
                <div className="flex items-center gap-2 md:gap-8">
                    {addOnData.supportsQuantity && (
                        <QuantitySelect
                            addOnState={addOnState}
                            addOnSlug={addOnSlug}
                        />
                    )}
                    <span className="
                        hidden md:block
                        text-my-md text-br-orange-main-desat font-semibold"
                    >
                        +${formatPrice(addOnData.price)}
                        {addOnData.supportsQuantity && (
                            <span className="hidden md:inline text-my-sm">
                                {` / ${addOnData.paymentDetail[locale].toLowerCase()}`}
                            </span>
                        )}
                    </span>
                </div>
            </div>
            {/* Lower expandable */}
            <ExpandableArea
                isExpanded={isInfoExpanded}
                className="w-full"
            >
                <p id={infoId} className="
                    mt-4
                    text-my-sm text-gray-600 text-left"
                >
                    {addOnData.copy[locale]}
                </p>
            </ExpandableArea>
        </div>
        {/* Lower part mobile only */}
        <div className="
            w-full
            px-4 py-2
            flex md:hidden justify-end
            bg-gray-100
            border-x border-b border-gray-300 rounded-b-2xl"
        >
            <span className="text-my-sm text-br-orange-main-desat font-semibold">
                +${formatPrice(addOnData.price)}
                {addOnData.supportsQuantity && (
                    <span className="inline text-my-sm">
                        {` / ${addOnData.paymentDetail[locale].toLowerCase()}`}
                    </span>
                )}
            </span>
        </div>
    </li>
    )
}

export default AddOnLi
