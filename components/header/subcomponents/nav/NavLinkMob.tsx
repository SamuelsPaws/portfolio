import { NavLinkType } from "@/lib/types/nav"
import { useTranslations } from "next-intl";
import Link from "next/link";
import NavDdMob from "./nav-dropdown/NavDdMob";

interface Props {
    item: NavLinkType;
    onLinkClick: () => void;
}

const NavLinkMob = ({ item, onLinkClick }: Props) => {
    const t = useTranslations('Reusable')
    const cn = "px-2 text-br-white"

    if (item.external) {
        return (
        <li>
            <a
                href={item.href}
                onClick={onLinkClick}
                target="_blank"
                className={cn}
            >
                {t(item.labelKey).toUpperCase()}
            </a>
        </li>
        )
    }

    if (item.dropdown) {
        return (
        <NavDdMob
            item={item}
            onLinkClick={onLinkClick}
        />
        )
    }

    return (
    <li>
        <Link
            href={item.href}
            onClick={onLinkClick}
            className={cn}
        >
            {t(item.labelKey).toUpperCase()}
        </Link>
    </li>
    )
}

export default NavLinkMob