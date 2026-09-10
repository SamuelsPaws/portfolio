import clsx from "clsx";

interface Props {
    title?: string;
    bgColor: string;
    children?: React.ReactNode;
}

const FortSectionSt = ({ title, bgColor, children }: Props) => {
    return (
    <section className={clsx(
        "px-32 py-32",
        bgColor
    )}>
        {title && (
            <h2 className="
                w-2/3 mx-auto mb-16
                text-5xl text-center text-black dark:text-br-white
                font-['Source_Serif_4'] leading-16"
            >
                {title}
            </h2>
        )}
        {children}
    </section>
    )
}

export default FortSectionSt