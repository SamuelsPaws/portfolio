import clsx from "clsx";

interface Props {
    text: string;
    halfMargin?: boolean;
}

const CenteredP = ({ text, halfMargin = false }: Props) => {
    return (
    <p className={clsx(
        "w-full md:w-2/3 mx-auto",
        "text-secondary text-my-md text-center leading-6 md:leading-8",
        halfMargin ? "mb-4 md:mb-8" : "mb-8 md:mb-16"
    )}>
        {text}
    </p>
    )
}

export default CenteredP