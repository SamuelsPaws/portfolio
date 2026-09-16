interface Props {
    text: string;
}

const CenterH2 = ({ text }: Props) => {
    return (
    <h2 className="
        w-full md:w-2/3 mx-auto mb-8 md:mb-16
        text-most-h2 text-center text-main
        font-['Source_Serif_4'] leading-10 md:leading-16"
    >
        {text}
    </h2>
    )
}

export default CenterH2