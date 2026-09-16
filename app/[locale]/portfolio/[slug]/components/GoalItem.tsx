import { IconId } from "@/components/CustomIcon"
import OrangeWithIcon from "@/components/ui-reusables/OrangeWithIcon";

interface Props {
    iconId: IconId;
    text: string;
}

const GoalItem = ({ iconId, text }: Props) => {
    return (
    <div className="
        w-full md:w-100
        p-8
        flex items-center gap-4
        bg-main
        rounded-2xl border border-gray-300 dark:border-gray-600"
    >
        <OrangeWithIcon iconId={iconId} />
        <span className="flex-1 text-secondary text-my-md">
            {text}
        </span>
    </div>
    )
}

export default GoalItem