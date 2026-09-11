import clsx from "clsx";

interface Props {
    text: string;
    className?: string;
}

const SimpleH2 = ({ text, className }: Props) => {
    return (
    <h2 className={clsx(
        "text-main",
        "font-['Source_Serif_4'] leading-10 md:leading-16",
        className
    )}>
        {text}
    </h2>
    )
}

export default SimpleH2