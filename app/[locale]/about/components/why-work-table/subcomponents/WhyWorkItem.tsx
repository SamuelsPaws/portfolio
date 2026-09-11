import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    dark?: boolean;
}

const WhyWorkItem = ({ children, dark = false }: Props) => {
    return (
    <div className={clsx(
        "w-full",
        dark && "bg-gray-100 dark:bg-br-gray-800",
        "px-4 py-4",
        "md:px-8 md:py-8",
        "border-b border-gray-200",
        "nth-last-[1]:border-0 md:nth-last-[2]:border-0"
    )}>
        {children}
    </div>
    )
}

export default WhyWorkItem