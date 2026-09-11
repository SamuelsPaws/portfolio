import CustomIcon from "@/components/CustomIcon";
import clsx from "clsx";

interface Props {
    text: string;
}

const FeatureLi = ({ text }: Props) => {
    return (
    <li className="flex items-center gap-4">
        {/* Bullet icon */}
            <div className={clsx(
                "w-4 aspect-square translate-y-0.5 md:translate-y-1",
                "flex justify-center items-center",
                "bg-gray-400", // theme.checkBgColor,
                "text-sm text-br-white", // theme.checkColor,
                "rounded-full overflow-hidden"
            )}>
                <CustomIcon
                    iconId="check"
                />
            </div>
            <p className="flex-1 text-my-md text-secondary">
                {text}
            </p>
    </li>
    )
}

export default FeatureLi