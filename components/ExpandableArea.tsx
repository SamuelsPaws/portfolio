import clsx from "clsx"

interface Props {
    isExpanded: boolean;
    children?: React.ReactNode;
    className?: string;
    noTransition?: boolean;
}

const ExpandableArea = ({ isExpanded, children, className, noTransition = false }: Props) => {
    return (
    <div
        aria-hidden={!isExpanded}
        inert={!isExpanded}
        className={clsx(
        "grid transition-[grid-template-rows] ease-out",
        noTransition ? "duration-0" : "duration-400",
        isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        className
    )}>
        <div className="overflow-hidden">
            {children}
        </div>
    </div>
    )
}

export default ExpandableArea
