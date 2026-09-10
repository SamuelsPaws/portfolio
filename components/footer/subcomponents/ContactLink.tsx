import CustomIcon, { IconId } from "@/components/CustomIcon";

const cn = 'flex items-center gap-2 text-br-white text-my-lg md:hover:underline underline-offset-2'

interface Props {
    href: string;
    label: string;
    iconId: IconId;
}

const ContactLink = ({ href, label, iconId }: Props) => {
    return (
    <li>
        <a
            href={href}
            target="_blank"
            className={cn}
        >
            <CustomIcon
                iconId={iconId}
                className=""
            />
            <span>{label}</span>
        </a>
    </li>
    )
}

export default ContactLink