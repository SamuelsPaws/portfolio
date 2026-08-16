'use client'
import CustomIcon from "@/components/CustomIcon";
import clsx from "clsx";
import { useState } from "react";

const defaultCn = "p-4 lg:p-8 group flex flex-col items-start text-left bg-br-white border border-transparent rounded-2xl"

interface Props {
    title: string;
    children: React.ReactNode;
    expandable?: boolean;
}

const ContentChunk = ({ title, children, expandable = false }: Props) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(!expandable)

    const handleClick = () => {
        setIsExpanded(prev => !prev)
    }

    if (expandable) {
        return (
        <button
            onClick={handleClick}
            className={clsx(defaultCn, "md:hover:border-gray-800 duration-200")}
        >
            <div className="w-full flex justify-between">
                <h2 className="text-my-xl font-semibold tracking-wide">
                    {title}
                </h2>
                {/* Button icon */}
                <div className="
                    w-8 aspect-square
                    flex justify-center items-center
                    text-gray-500 text-2xl
                    border border-gray-600 rounded-full
                    md:group-hover:border-gray-800 md:group-hover:text-gray-700 md:group-hover:shadow-sm duration-200"
                >
                    <CustomIcon
                        iconId="plus"
                        className={clsx("duration-400 ease-out", isExpanded && "-rotate-45")}
                    />
                </div>
            </div>
            <div className={clsx(
                "grid transition-[grid-template-rows] duration-400 ease-out",
                isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}>
                <div className="overflow-hidden">
                    {children}
                </div>
            </div>
        </button>
        )
    }

    return (
    <div className={defaultCn}
    >
        <h2 className={clsx(
            "text-my-xl font-semibold tracking-wide"
        )}>
            {title}
        </h2>
        {children}
    </div>
    )
}

export default ContentChunk