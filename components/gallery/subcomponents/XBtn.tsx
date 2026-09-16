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
            left-6 top-6
            md:left-8 md:top-8
            flex justify-center items-center
            text-br-white text-3xl md:text-4xl"
    >
        <CustomIcon
            iconId="x"
        />
    </button>
    )
}

export default XBtn