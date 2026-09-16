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
        flex flex-col gap-8
        md:flex-row md:items-start md:gap-16"
    >
        {/* Left div */}
        <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-my-xl text-gray-title font-semibold">
                {title}
            </h3>
            <p className="text-my-md text-secondary">
                {copy}
            </p>
        </div>
        {/* Right div */}
        {media && (
            <div className="w-full md:w-1/2">
                    <Gallery
                        gridVersion='projectSlug'
                        gridClassName="
                            w-full
                            grid grid-cols-2 md:grid-cols-3
                            auto-rows-[140px] gap-2
                            md:auto-rows-[200px] md:gap-4"
                        media={media}
                    />
            </div>
        )}
    </div>
    )
}

export default SolutionCard