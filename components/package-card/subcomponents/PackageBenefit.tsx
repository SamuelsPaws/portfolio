import CustomIcon from "@/components/CustomIcon";
import { PackageTheme } from "@/lib/types/fortales/packages";
import clsx from "clsx";

interface Props {
    text: string;
    theme: PackageTheme;
}

const PackageBenefit = ({ text, theme }: Props) => {
    return (
    <li className="
        w-full
        flex items-start gap-4"
    >
        {/* Bullet icon */}
        <div className={clsx(
            "w-4 aspect-square translate-y-1",
            "flex justify-center items-center",
            theme.checkBgColor,
            "text-sm", theme.checkColor,
            "rounded-full overflow-hidden"
        )}>
            <CustomIcon
                iconId="check"
            />
        </div>
        <p className="flex-1 text-myf-md text-secondary">
            {text}
        </p>
    </li>
    )
}

export default PackageBenefit