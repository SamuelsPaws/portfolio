import CustomIcon from "@/components/CustomIcon";
import WhyWorkItem from "./WhyWorkItem";
import clsx from "clsx";

interface Props {
    text: string;
}

const FortalesTableItem = ({ text }: Props) => {
    return (
    <WhyWorkItem>
        <div className="flex items-center gap-4">
            {/* Bullet icon */}
            <div className={clsx(
                "w-4 md:w-6 aspect-square",
                "flex justify-center items-center",
                "bg-br-orange-main/20",
                "text-my-sm text-br-orange-main-desat",
                "rounded-full overflow-hidden"
            )}>
                <CustomIcon
                    iconId="check"
                />
            </div>
            <span className="flex-1 text-main text-my-md font-semibold wrap-anywhere">
                {text}
            </span>
        </div>
    </WhyWorkItem>
    )
}

export default FortalesTableItem