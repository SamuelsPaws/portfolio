import { GalleryGridVersion, Media } from "@/lib/types/galleryTypes";
import { SetStateAction } from "react";
import ProjectSlugGrid from "./grids/ProjectSlugGrid";

interface Props {
    media: Media[];
    selectedMediaIndex: number | null;
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
    version: GalleryGridVersion;
    className: string;
}

const GalleryGrid = ({ media, selectedMediaIndex, setSelectedMediaIndex, version, className }: Props) => {
    if (version === 'projectSlug') {
        return (
        <ProjectSlugGrid
            media={media}
            className={className}
            setSelectedMediaIndex={setSelectedMediaIndex}
        />
        )
    }

    return (
    <div></div>
    )
}

export default GalleryGrid