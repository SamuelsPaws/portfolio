import CustomIcon from "@/components/CustomIcon";

interface Props {
    onClick: () => void;
}

const XBtn = ({ onClick }: Props) => {
    return (
    <button
        onClick={onClick}
        className="
            fixed z-[9980]
            left-4 top-4
            md:left-8 md:top-8
            flex justify-center items-center
            text-br-white text-3xl md:text-4xl"
    >
        <CustomIcon
            iconId="x"
            className="opacity-70"
        />
    </button>
    )
}

export default XBtn