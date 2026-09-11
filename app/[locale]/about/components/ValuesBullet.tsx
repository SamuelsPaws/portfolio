import CustomIcon, { IconId } from "@/components/CustomIcon"

interface Props {
    iconId: IconId;
    text: string;
}

const ValuesBullet = ({ iconId, text }: Props) => {
    return (
    <div className="flex items-center gap-4">
        <div className="
            w-12 aspect-square
            flex justify-center items-center
            bg-br-white dark:bg-br-gray-800
            text-2xl text-br-orange-500
            rounded-full"
        >
            <CustomIcon
                iconId={iconId}
            />
        </div>
        <p className="text-my-md text-main font-semibold">
            {text}
        </p>
    </div>
    )
}

export default ValuesBullet