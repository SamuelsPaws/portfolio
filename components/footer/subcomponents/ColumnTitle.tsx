interface Props {
    text: string;
}

const ColumnTitle = ({ text }: Props) => {
    return (
    <div className="
        mb-8
        text-my-lg text-br-orange-500
        font-semibold"
    >
        {text.toUpperCase()}
    </div>
    )
}

export default ColumnTitle