import { useTranslations } from "next-intl";

interface Props {
    increases: boolean;
    setter: () => void;
    disabled?: boolean;
}

const QuantityBtn = ({ increases, setter, disabled = false }: Props) => {
    const t = useTranslations('Reusable')

    return (
    <button
        type="button"
        onClick={setter}
        disabled={disabled}
        aria-label={increases ? t('increaseQuantity') : t('decreaseQuantity')}
        className="
            w-4 md:w-6 h-full
            flex justify-center items-center
            bg-gray-300"
    >
        <span className="text-my-sm text-gray-600">
            {increases ? '+' : '-'}
        </span>
    </button>
    )
}

export default QuantityBtn
