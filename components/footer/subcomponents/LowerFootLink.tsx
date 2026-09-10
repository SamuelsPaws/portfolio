import Link from "next/link";

interface Props {
    href: string;
    text: string;
}

const LowerFootLink = ({ href, text }: Props) => {
    return (
    <li>
        <Link
            href={href}
            className="text-myf-md text-gray-400 md:hover:underline"
        >
            {text}
        </Link>
    </li>
    )
}

export default LowerFootLink