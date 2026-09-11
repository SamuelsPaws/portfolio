import CustomIcon, { IconId } from "@/components/CustomIcon";

interface Props {
    text: string;
    iconId: IconId;
}

const WhyCareItem = ({ text, iconId }: Props) => {
    return (
    <div className="
        px-4
        flex items-center gap-4
        bg-br-white dark:bg-br-gray-600
        rounded-2xl"
    >
        <div className="
            w-8 aspect-square
            flex justify-center items-center
            text-my-xl text-br-orange-main"
        >
            <CustomIcon
                iconId={iconId}
            />
        </div>
        <div className="self-stretch w-[1px] bg-gray-300 dark:bg-br-gray-800"></div>
        <p className="
            flex-1 my-4
            text-my-md text-secondary text-left"
        >
            {text}
        </p>
    </div>
    )
}

export default WhyCareItem