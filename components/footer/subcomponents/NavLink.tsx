import { NavLinkType } from "@/lib/types/nav"
import { useTranslations } from "next-intl";
import Link from "next/link";

const cn = 'text-br-white text-my-lg text-right md:hover:underline underline-offset-2'

interface Props {
    item: NavLinkType;
}

const NavLink = ({ item }: Props) => {
    const t = useTranslations('Reusable')

    if (item.external) {
        <li>
            <a
                href={item.href}
                target="_blank"
                className={cn}
            >
                {t(item.labelKey)}
            </a>
        </li>
    }

    return (
    <li>
        <Link
            href={item.href}
            className={cn}
        >
            {t(item.labelKey)}
        </Link>
    </li>
    )
}

export default NavLink