import CustomIcon from "@/components/CustomIcon";

type Props = {
    text: string;
};

export default function HeroBulletItem({ text }: Props) {
    return (
        <div className="
            flex items-center gap-4
            text-my-md text-br-orange-main"
        >
            <CustomIcon
                iconId="check"
                className="scale-110"
            />
            <span className="text-secondary">
                {text}
            </span>
        </div>
    );
}