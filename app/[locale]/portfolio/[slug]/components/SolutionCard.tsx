import Gallery from "@/components/gallery/Gallery";
import { Media } from "@/lib/types/galleryTypes";

interface Props {
    title: string;
    copy: string;
    media: Media[] | null;
}

const SolutionCard = ({ title, copy, media }: Props) => {
    return (
    <div className="
        w-full
        flex items-start gap-16"
    >
        {/* Left div */}
        <div className="
            w-1/2"
        >
            <h3 className="mb-4 text-my-xl text-gray-title font-semibold">
                {title}
            </h3>
            <p className="text-my-md text-secondary">
                {copy}
            </p>
        </div>
        {/* Right div */}
        <div className="w-1/2">
            {media && (
                <Gallery
                    gridVersion='projectSlug'
                    gridClassName="
                        w-full
                        grid grid-cols-3
                        auto-rows-[120px] gap-2
                        md:auto-rows-[200px] md:gap-4"
                    media={media}
                />
            )}
        </div>
    </div>
    )
}

export default SolutionCard