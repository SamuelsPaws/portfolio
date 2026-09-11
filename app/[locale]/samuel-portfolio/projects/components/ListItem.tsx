import CustomIcon from "@/components/CustomIcon";

interface Props {
    text: string;
}

const ListItem = ({ text }: Props) => {
    return (
    <li>
        <p className="text-myf-lg text-gray-700 dark:text-gray-300">
            <CustomIcon
                iconId="check"
                className="mr-2"
            />
            <span>{text}</span>
        </p>
    </li>
    )
}

export default ListItem