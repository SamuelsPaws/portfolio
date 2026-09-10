import FortalesTableItem from "./FortalesTableItem";
import WhyWorkItem from "./WhyWorkItem";

interface Props {
    otherText: string;
    fortalesText: string;
}

const WhyWorkRow = ({ otherText, fortalesText }: Props) => {
    return (
    <>
    <WhyWorkItem>
        <span className="text-my-md text-secondary">
            {otherText}
        </span>
    </WhyWorkItem>
    <FortalesTableItem text={fortalesText} />
    </>
    )
}

export default WhyWorkRow