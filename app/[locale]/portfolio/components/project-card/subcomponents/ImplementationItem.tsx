interface Props {
    text: string;
}

const ImplementationItem = ({ text }: Props) => {
    return (
    <div className="
        max-w-full px-3 sm:px-4 py-2 wrap-break-word
        bg-gray-200 dark:bg-br-gray-600
        text-secondary
        rounded-full"
    >
        {text}
    </div>
    )
}

export default ImplementationItem