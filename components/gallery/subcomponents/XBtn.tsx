import CustomIcon from "@/components/CustomIcon";

interface Props {
    onClick: () => void;
}

const XBtn = ({ onClick }: Props) => {
    return (
    <button
        type="button"
        autoFocus
        onClick={(event) => {
            event.stopPropagation()
            onClick()
        }}
        aria-label="Close media gallery"
        className="
            fixed z-[9980]
            left-4 top-4
            md:left-8 md:top-8
            flex justify-center items-center
            text-br-white text-3xl md:text-4xl
            duration-200 active:scale-[0.96]"
    >
        <CustomIcon
            iconId="x"
            className="opacity-70"
        />
    </button>
    )
}

export default XBtn
