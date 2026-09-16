import clsx from "clsx";

interface Props {
    text: string;
    desat?: boolean;
    wide?: boolean;
    shortMargin?: boolean;
}

const Eyebrow = ({ text, desat = false, wide = false, shortMargin = false }: Props) => {
    return (
    <span className={clsx(
        "block",
        shortMargin ? "mb-2" : "mb-4",
        "text-my-md font-semibold",
        desat ? "text-br-orange-main-desat" : "text-br-orange-main",
        wide ? "tracking-wider" : "tracking-normal"
    )}>
        {text}
    </span>
    )
}

export default Eyebrow