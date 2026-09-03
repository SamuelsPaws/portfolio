import clsx from "clsx";

interface Props {
    title: string;
    bgColor: string;
    children: React.ReactNode;
}

const SectionSt = ({ title, bgColor, children }: Props) => {
    return (
    <section className={clsx(
        "px-8 py-12",
        "lg:px-16 lg:py-24",
        bgColor
    )}>
        <h2 className="
            mb-12 md:mb-24
            text-black text-3xl md:text-6xl font-semibold"
        >
            {title}
        </h2>
        {children}
    </section>
    )
}

export default SectionSt