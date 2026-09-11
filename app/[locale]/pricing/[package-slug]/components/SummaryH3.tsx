import SimpleH3 from "@/components/SimpleH3";

interface Props {
    text: string;
}

const SummaryH3 = ({ text }: Props) => {
    return (
    <SimpleH3
        text={text}
        className="
            mb-4 md:mb-8
            text-2xl md:text-3xl text-main"
    />
    )
}

export default SummaryH3