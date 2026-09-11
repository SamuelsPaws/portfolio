'use client'
import { addOns } from "@/data/fortales/addons";
import { useAddOnsStore } from "@/lib/hooks/addons-state";
import { AddOnState } from "@/lib/types/fortales/addons";
import clsx from "clsx";

interface Props {
    addOnState: AddOnState;
    addOnSlug: (typeof addOns)[number]['slug'];
}

const EnableToggle = ({ addOnState, addOnSlug }: Props) => {
    const setAddOnEnabled = useAddOnsStore((state) => state.setAddOnEnabled)

    const toggleEnabled = () => {
        setAddOnEnabled(addOnSlug, !addOnState.enabled)
    }

    return (
    <button
        onClick={toggleEnabled}
        className={clsx(
            "w-10 min-w-10 h-6",
            "md:w-12 md:min-w-12 md:h-6 relative",
            "flex items-center",
            addOnState.enabled ? "bg-green-500" : "bg-gray-300",
            "rounded-full border overflow-hidden",
            addOnState.enabled ? "border-green-600" : "border-gray-400",
            "duration-200",
            addOnState.enabled ? "md:hover:bg-green-700" : "md:hover:bg-gray-400"
        )}
    >
        <div className={clsx(
            "absolute top-1/2 -translate-y-1/2",
            addOnState.enabled ? "left-[calc(100%_-_2px)] -translate-x-full" : "left-[2px] translate-x-0",
            "duration-400 ease-out",
            "h-[calc(100%_-_4px)] aspect-square",
            "text-lg text-br-white",
            "bg-br-white",
            "rounded-full border border-gray-300 overflow-hidden shadow-md"
        )} />
    </button>
    )
}

export default EnableToggle