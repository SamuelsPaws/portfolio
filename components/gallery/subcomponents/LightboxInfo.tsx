import CustomIcon from "@/components/CustomIcon";
import { MediaInfoItem } from "@/lib/types/galleryTypes";
import clsx from "clsx";
import MediaInfoElement from "./MediaInfoElement";

interface Props {
    position: 'left' | 'right';
    items: MediaInfoItem[];
    isOpen: boolean;
    onClick: () => void;
}

const LightboxInfo = ({ position, items, isOpen, onClick }: Props) => {
    return (
    <button
        onClick={onClick}
        className={clsx(
            "absolute bottom-4 z-[9970]",
            position === 'left' ? "left-4" : "right-4",
            isOpen && "w-80",
            "duration-400 group",
            "px-8 py-8",
            "flex flex-col gap-4",
            "bg-black/85",
            "text-white",
            "border border-[#fff5] md:hover:border-gray-200 rounded-xl"
    )}>
        <div className="flex items-center gap-2 text-xl">
            <CustomIcon
                iconId="info-o"
            />
            <h3 className="font-semibold">
                Comments
            </h3>
        </div>
        {isOpen && <div className={clsx(
            "grid transition-[grid-template-rows] duration-400 ease-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}>
            <div className={clsx("overflow-hidden")}>
                {items.map((el, index) => (
                    <MediaInfoElement
                        key={index}
                        item={el}
                    />
                ))}
            </div>
        </div>}
        {/* Button icon */}
        {isOpen && (
            <div className="
                absolute top-4 right-4
                w-8 aspect-square
                flex justify-center items-center
                text-gray-500 text-2xl
                border border-gray-500 rounded-full
                md:group-hover:border-gray-200 md:group-hover:text-gray-200 md:group-hover:shadow-sm duration-200"
            >
                <CustomIcon
                    iconId="plus"
                    className="rotate-45"
                />
            </div>
        )}
    </button>
    )
}

export default LightboxInfo