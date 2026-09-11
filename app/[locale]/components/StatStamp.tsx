interface Props {
    num: number;
    label: string;
}

const StatStamp = ({ num, label }: Props) => {
    return (
    <div className="flex flex-col gap-4">
        <span className="
            text-4xl
            text-black dark:text-br-white
            font-bold"
        >
            {num}+
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300 tracking-wider">
            {label.toUpperCase()}
        </span>
    </div>
    )
}

export default StatStamp