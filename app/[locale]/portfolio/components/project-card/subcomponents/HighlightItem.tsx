import CustomIcon, { IconId } from "@/components/CustomIcon"

interface Props {
    iconId: IconId;
    text: string;
    iconCn?: string;
}

const HighlightItem = ({ iconId, text, iconCn = "" }: Props) => {
    return (
    <div className="
        min-w-0 flex items-center gap-3 sm:gap-4
        text-my-sm text-main"
    >
        <CustomIcon
            iconId={iconId}
            className={`shrink-0 ${iconCn || "scale-125"}`}
        />
        <span className="min-w-0 wrap-break-word">
            {text}
        </span>
    </div>
    )
}

export default HighlightItem