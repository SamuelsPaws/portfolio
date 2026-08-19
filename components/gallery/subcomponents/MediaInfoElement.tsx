import { MediaInfoItem } from "@/lib/types/galleryTypes"

interface Props {
    item: MediaInfoItem;
}

const MediaInfoElement = ({ item }: Props) => {
    if (item.type === 'list') {
        return (
        <ul className="flex flex-col gap-2">
            {item.content.map((el, index) => (
                <li
                    key={index}
                    className="text-gray-200 text-myf-md"
                >
                    {el}
                </li>
            ))}
        </ul>
        )
    }

    if (item.type === 'title') {
        return (
        <h4 className="text-myf-lg text-br-white text-left font-semibold">
            {item.content}
        </h4>
        )
    }

    if (item.type === 'paragraph') {
        return (
        <p className="text-myf-md text-gray-200 text-left">
            {item.content}
        </p>
        )
    }

    return <div></div>
}

export default MediaInfoElement