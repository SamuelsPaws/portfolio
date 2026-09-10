interface Props {
    increases: boolean;
    setter: () => void;
}

const QuantityBtn = ({ increases, setter }: Props) => {
    return (
    <button
        onClick={setter}
        className="
            w-6 h-full
            flex justify-center items-center
            bg-gray-300"
    >
        <span className="text-my-sm text-secondary">
            {increases ? '+' : '-'}
        </span>
    </button>
    )
}

export default QuantityBtn