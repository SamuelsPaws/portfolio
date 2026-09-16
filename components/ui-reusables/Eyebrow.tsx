import clsx from "clsx";

interface Props {
    text: string;
    desat?: boolean;
    wide?: boolean;
}

const Eyebrow = ({ text, desat = false, wide = false }: Props) => {
    return (
    <span className={clsx(
        "block mb-4",
        "text-my-md font-semibold",
        desat ? "text-br-orange-main-desat" : "text-br-orange-main",
        wide ? "tracking-wider" : "tracking-normal"
    )}>
        {text}
    </span>
    )
}

export default Eyebrow