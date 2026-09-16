interface Props {
    id: string;
}

const TargetForScroll = ({ id }: Props) => {
    return (
    <div
        id={id}
        className="
            absolute -top-header-height-mob lg:-top-header-height left-0
            w-[1px] h-[1px] bg-transparent"
    />
    )
}

export default TargetForScroll