import clsx from "clsx";
import CustomIcon, { IconId } from "../CustomIcon"

interface Props {
    iconId: IconId;
    title: string;
    description: string;
    bgColor?: string;
}

const IconInfoCard = ({ iconId, title, description, bgColor = "bg-main" }: Props) => {
    return (
    <div className={clsx(
        "w-full md:w-100 p-8",
        bgColor,
        "rounded-4xl border border-gray-300 shadow-img-sm",
    )}>
        <div className="
            h-8 aspect-square
            mb-4
            flex justify-start items-start
            text-2xl text-br-orange-main"
        >
            <CustomIcon
                iconId={iconId}
            />
        </div>
        <h3 className="
            mb-4
            text-my-lg text-gray-title font-semibold"
        >
            {title}
        </h3>
        <p className="text-my-md text-secondary">
            {description}
        </p>
    </div>
    )
}

export default IconInfoCard