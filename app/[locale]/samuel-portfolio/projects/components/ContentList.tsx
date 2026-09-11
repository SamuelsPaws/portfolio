import ListItem from "./ListItem"

interface Props {
    items: string[];
}

const ContentList = ({ items }: Props) => {
    return (
    <ul className="mt-4 flex flex-col gap-2">
        {items.map((el, index) => (
            <ListItem key={index} text={el} />
        ))}
    </ul>
    )
}

export default ContentList