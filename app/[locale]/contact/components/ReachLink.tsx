import CustomIcon, { IconId } from "@/components/CustomIcon";
import OrangeWithIcon from "@/components/ui-reusables/OrangeWithIcon";

interface Props {
    href: string;
    iconId: IconId;
    eyebrow: string;
    mainText: string;
}

const ReachLink = ({ href, iconId, eyebrow, mainText }: Props) => {
    return (
    <a
        href={href}
        target="_blank"
        className="
            group min-w-0 p-4 xl:p-8
            flex items-center justify-between gap-3 sm:gap-4 xl:gap-8
            border border-gray-300 rounded-2xl
            duration-400 ease-out
            hover:border-br-orange-main/60 hover:bg-br-orange-main/5 hover:shadow-lg
            focus-visible:border-br-orange-main focus-visible:bg-br-orange-main/5
            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-br-orange-main
            hover:-translate-y-1 focus-visible:-translate-y-1"
    >
        {/* Wrapper for between */}
        <div className="min-w-0 flex items-center gap-3 sm:gap-4 xl:gap-8">
            <div className="shrink-0">
                <OrangeWithIcon iconId={iconId} />
            </div>
            <div className="min-w-0 flex flex-col items-start gap-1 sm:gap-2 wrap-anywhere">
                <span className="text-my-sm text-secondary">
                    {eyebrow}
                </span>
                <span className="text-my-md sm:text-my-lg text-main">
                    {mainText}
                </span>
            </div>
        </div>
        <div className="
            w-8 md:w-12 aspect-square shrink-0
            flex justify-center items-center
            bg-br-orange-main
            text-br-white text-3xl
            rounded-full"
        >
            <CustomIcon
                iconId="arrowR"
            />
        </div>
    </a>
    )
}

export default ReachLink
