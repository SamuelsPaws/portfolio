import { Media } from "@/lib/types/galleryTypes";
import Image from "next/image";

interface Props {
    media: Media | null;
}

const MediaViewer = ({ media }: Props) => {
    if (!media) return null

    if (media.type === 'image') {
        return (
            <Image
                src={media.src}
                fill
                sizes="100%"
                className="w-full h-full object-contain md:object-contain z-[9960]"
                priority
                alt="Fotografía propiedad de Ilaló Garden Hotel"
            />
        )
    }

    if (media.type === 'video') {
        return (
            <video
                src={media.src}
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover z-[9960]"
            ></video>
        )
    }

    return null
}

export default MediaViewer