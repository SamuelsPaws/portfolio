import clsx from "clsx";

interface Props {
    text: string;
    className?: string;
}

const SimpleH3 = ({ text, className }: Props) => {
    return (
    <h3 className={clsx(
        "text-main",
        "font-['Source_Serif_4']",
        className
    )}>
        {text}
    </h3>
    )
}

export default SimpleH3