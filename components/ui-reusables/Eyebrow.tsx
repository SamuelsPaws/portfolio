interface Props {
    text: string;
}

const Eyebrow = ({ text }: Props) => {
    return (
    <span className="
        block mb-4
        text-my-md text-br-orange-main font-semibold"
    >
        {text}
    </span>
    )
}

export default Eyebrow