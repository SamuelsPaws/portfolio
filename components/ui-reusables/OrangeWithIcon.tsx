import CustomIcon, { IconId } from "../CustomIcon";

interface Props {
    iconId: IconId;
}

const OrangeWithIcon = ({ iconId }: Props) => {
    return (
    <div className="
        w-8 md:w-12 aspect-square
        flex justify-center items-center
        bg-br-orange-main/20
        text-2xl text-br-orange-main
        rounded-full"
    >
        <CustomIcon
            iconId={iconId}
        />
    </div>
    )
}

export default OrangeWithIcon