interface Props {
    text: string;
}

const CenterH2 = ({ text }: Props) => {
    return (
    <h2 className="
        w-2/3 mx-auto mb-16
        text-5xl text-center text-main
        font-['Source_Serif_4'] leading-16"
    >
        {text}
    </h2>
    )
}

export default CenterH2