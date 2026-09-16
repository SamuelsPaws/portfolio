import { useLocale } from "next-intl"
import type { LocaleKey } from "@/lib/types/localeKey"
import { MediaInfoItem } from "@/lib/types/galleryTypes"

interface Props {
    item: MediaInfoItem;
}

const MediaInfoElement = ({ item }: Props) => {
    const locale = useLocale() as LocaleKey
    if (item.type === 'list') {
        return (
        <ul className="flex flex-col gap-2">
            {item.content.map((el, index) => (
                <li
                    key={index}
                    className="text-gray-200 text-myf-md"
                >
                    {el[locale]}
                </li>
            ))}
        </ul>
        )
    }

    if (item.type === 'title') {
        return (
        <h4 className="
            mb-2
            text-myf-lg text-br-white text-left font-semibold"
        >
            {item.content[locale]}
        </h4>
        )
    }

    if (item.type === 'paragraph') {
        return (
        <p className="text-myf-md text-gray-200 text-left">
            {item.content[locale]}
        </p>
        )
    }

    return <div></div>
}

export default MediaInfoElement