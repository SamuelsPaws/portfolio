import { useTranslations } from "next-intl";
import { SetStateAction } from "react";
import { Media } from "@/lib/types/galleryTypes";
import ImageBtn from "../ImageBtn";
import ImagePlusBtn from "../ImagePlusBtn";

interface Props {
    media: Media[];
    className: string;
    setSelectedMediaIndex: React.Dispatch<SetStateAction<number | null>>;
}

const ProjectSlugGrid = ({ media, className, setSelectedMediaIndex }: Props) => {
    const t = useTranslations('Reusable')

    return (
    <div className={className}>
        {media.slice(0, 5).map((el, index) => (
            <ImageBtn
                key={index}
                src={el.src}
                alt="nada"
                className="w-full h-full"
                lgText={true}
                thisMediaIndex={index}
                setSelectedMediaIndex={setSelectedMediaIndex}
            />
        ))}
        {media[5] && (
            media.length > 6 ? (
                <ImagePlusBtn
                    src={media[5].src}
                    alt="nada"
                    className="w-full h-full"
                    lgText={true}
                    thisMediaIndex={5}
                    setSelectedMediaIndex={setSelectedMediaIndex}
                    numberLabel={(media.length - 6).toString()}
                />
            ) : (
                <ImageBtn
                    src={media[5].src}
                    alt="nada"
                    className="w-full h-full"
                    lgText={true}
                    thisMediaIndex={5}
                    setSelectedMediaIndex={setSelectedMediaIndex}
                />
            )
        )}
    </div>
    )
}

export default ProjectSlugGrid