interface Props {
    head: string;
    body: string;
}

const StatStamp = ({ head, body }: Props) => {
    return (
    <div className="
        max-w-60
        flex flex-col gap-2"
    >
        <span className="
            text-my-xl text-main
            font-bold"
        >
            {head}
        </span>
        <span className="text-my-sm text-gray-600 dark:text-gray-300 tracking-wider">
            {body}
        </span>
    </div>
    )
}

export default StatStamp