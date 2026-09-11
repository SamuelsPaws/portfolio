'use client'
import { addOns } from "@/data/fortales/addons"
import EnableToggle from "../EnableToggle";
import { AddOn } from "@/lib/types/fortales/addons";
import { LocaleKey } from "@/lib/types/localeKey";
import ExpandableArea from "@/components/ExpandableArea";
import { useState } from "react";
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

    const toggleInfoExpanded = () => {
        setIsInfoExpanded(prev => !prev)
    }

    return (
    <li className="
        w-full
        p-4
        bg-br-white
        border border-gray-300 rounded-2xl"
    >
        {/* Upper part */}
        <div className="flex justify-between items-center gap-4">
            {/* Wrapper for between */}
            <div className="flex items-center gap-4 xl:gap-8">
                <EnableToggle
                    addOnState={addOnState}
                    addOnSlug={addOnSlug}
                />
                <h3 className="text-my-md text-br-gray-600 font-semibold">
                    {addOnData.title[locale]}
                </h3>
                <button
                    onClick={toggleInfoExpanded}
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
            <div className="flex items-center gap-4 md:gap-8">
                {addOnData.supportsQuantity && (
                    <QuantitySelect
                        addOnState={addOnState}
                        addOnSlug={addOnSlug}
                    />
                )}
                <span className="
                    block
                    text-my-md text-br-orange-main-desat font-semibold"
                >
                    +${formatPrice(addOnData.price)}
                    {addOnData.supportsQuantity && (
                        <span className="hidden md:block text-my-sm">
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
            <p className="
                mt-4
                text-my-sm text-gray-600 text-left"
            >
                {addOnData.copy[locale]}
            </p>
        </ExpandableArea>
    </li>
    )
}

export default AddOnLi