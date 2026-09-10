import CustomIcon from "@/components/CustomIcon";

interface Props {
    text: string;
}

const CtaTrustItem = ({ text }: Props) => {
    return (
    <div className="
        w-full
        flex items-center gap-4"
    >
        {/* Check icon */}
        <div className="
            w-8 aspect-square
            flex justify-center items-center
            text-my-xl text-br-orange-main"
        >
            <CustomIcon
                iconId="check"
            />
        </div>
        <p className="flex-1 text-my-xl text-secondary">
            {text}
        </p>
    </div>
    )
}

export default CtaTrustItem