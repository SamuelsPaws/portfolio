import clsx from "clsx";

interface Props {
    title?: string;
    bgColor: string;
    children?: React.ReactNode;
}

const FortSectionSt = ({ title, bgColor, children }: Props) => {
    return (
    <section className={clsx(
        "px-8 py-16 relative",
        "md:px-16 md:py-32",
        "xl:px-32 xl:py-32",
        bgColor,
        "overflow-hidden"
    )}>
        {title && (
            <h2 className="
                w-full md:w-2/3 mx-auto
                mb-8 md:mb-16
                text-most-h2 text-center text-black dark:text-br-white
                font-['Source_Serif_4'] leading-10 md:leading-16"
            >
                {title}
            </h2>
        )}
        {children}
    </section>
    )
}

export default FortSectionSt