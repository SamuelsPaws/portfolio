'use client'
import CustomIcon from "@/components/CustomIcon";
import ExpandableArea from "@/components/ExpandableArea";
import { AddOn } from "@/lib/types/fortales/addons"
import clsx from "clsx";
import { useId, useState } from "react";
import AddOnLi from "./addon-li/AddOnLi";
import { LocaleKey } from "@/lib/types/localeKey";
import { addOns as dataAddOns } from "@/data/fortales/addons";

type AddOnSlug = (typeof dataAddOns)[number]['slug']

interface Props {
    addOns: AddOn[];
    locale: LocaleKey;
    seeMoreLabel: string;
    seeLessLabel: string;
}

const MoreAddOnsArea = ({ addOns, locale, seeMoreLabel, seeLessLabel }: Props) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const contentId = useId()

    const toggleExpanded = () => {
        setIsExpanded(prev => !prev)
    }

    return (
    <>
    <ExpandableArea
        isExpanded={isExpanded}
        className="w-full"
        noTransition
    >
        <ul id={contentId} className="
            w-full mt-4
            flex flex-col gap-4"
        >
            {addOns.map((el, index) => (
                <AddOnLi
                    key={index}
                    addOnData={el}
                    addOnSlug={el.slug as AddOnSlug}
                    locale={locale}
                />
            ))}
        </ul>
    </ExpandableArea>
    <button
        type="button"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        className="
            mt-4 group
            flex items-center gap-2
            text-my-md text-gray-title font-semibold"
    >
        <span>{isExpanded ? seeLessLabel : seeMoreLabel}</span>
        <CustomIcon
            iconId="chevronDown"
            className={clsx(
                isExpanded ? "-rotate-180" : "rotate-0",
                "md:group-hover:translate-y-1 duration-200"
            )}
        />
    </button>
    </>
    )
}

export default MoreAddOnsArea
