'use client'
import CustomIcon from "@/components/CustomIcon";
import ExpandableArea from "@/components/ExpandableArea";
import clsx from "clsx";
import { useId, useState } from "react";

interface Props {
    question: string;
    answer: string;
}

const FaqCard = ({ question, answer }: Props) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const answerId = useId()

    const toggleExpanded = () => {
        setIsExpanded(prev => !prev)
    }

    return (
    <button
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-controls={answerId}
        className="
        rounded-2xl md:rounded-4xl
        md:hover:bg-black/10 dark:md:hover:bg-white/10 duration-400"
    >
        {/* Upper part */}
        <div className="flex items-center justify-between">
            <h3 className="text-my-lg text-gray-title text-left font-semibold">
                {question}
            </h3>
            <div className="text-my-xl">
                <CustomIcon
                    iconId="chevronDown"
                    className={clsx(isExpanded ? "-rotate-180" : "rotate-0", "duration-400")}
                />
            </div>
        </div>
        <ExpandableArea
            isExpanded={isExpanded}
            className="w-full"
        >
            <div id={answerId} className="
                w-full mt-8
                flex justify-start"
            >
                <p className="text-my-md text-secondary text-left">
                    {answer}
                </p>
            </div>
        </ExpandableArea>
    </button>
    )
}

export default FaqCard
