import clsx from "clsx";

interface Props {
    left?: boolean;
}

const ProcessArrow = ({ left }: Props) => {
    return (
    <div
        className={clsx(
            "w-60 h-44 self-end relative",
            "clip-arrow",
            left ? "place-self-end scale-x-[-100%]" : "place-self-start"
        )}
        aria-hidden="true"
    >
        <div className="absolute inset-0 scroll-fill" />
    </div>
    )
}

export default ProcessArrow