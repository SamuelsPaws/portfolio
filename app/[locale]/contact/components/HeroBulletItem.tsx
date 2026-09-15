import CustomIcon from "@/components/CustomIcon";

type Props = {
    text: string;
};

export default function HeroBulletItem({ text }: Props) {
    return (
        <div className="
            min-w-0 flex items-center gap-3 md:gap-4
            text-my-md text-br-orange-main"
        >
            <CustomIcon
                iconId="check"
                className="shrink-0 scale-110"
            />
            <span className="text-secondary">
                {text}
            </span>
        </div>
    );
}