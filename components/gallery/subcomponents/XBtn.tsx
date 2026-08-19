interface Props {
    onClick: () => void;
}

const XBtn = ({ onClick }: Props) => {
    return (
    <button
        onClick={onClick}
        className="
            fixed z-[9980]
            left-6 top-6
            lg:left-8 lg:top-8"
    >
        <img
            src="/assets/x.svg"
            className="
                w-4 h-4
                lg:w-6 lg:h-6
                opacity-90"
        />
    </button>
    )
}

export default XBtn