import { NavLinkType } from "@/lib/types/nav"
import { useTranslations } from "next-intl";
import Link from "next/link";
import NavDdDesk from "./nav-dropdown/NavDdDesk";

interface Props {
    item: NavLinkType;
    isLast: boolean;
}

const NavLinkDesk = ({ item, isLast }: Props) => {
    const t = useTranslations('Reusable')
    const cn = "block px-2 hover-animated-underline relative"
    const cnLast = `
        block px-6 py-2
        bg-black dark:bg-br-white
        text-white dark:text-black
        rounded-full md:hover:scale-105 duration-200
    `

    if (item.external) {
        return (
        <li>
            <a
                href={item.href}
                target="_blank"
                className={isLast ? cnLast : cn}
            >
                {t(item.labelKey).toUpperCase()}
            </a>
        </li>
        )
    }

    if (item.dropdown) {
        return (
        <li className="
            h-full
            flex items-center"
        >
            <NavDdDesk
                item={item}
                className={isLast ? cnLast : cn}
            />
        </li>
        )
    }

    return (
    <li>
        <Link
            href={item.href}
            className={isLast ? cnLast : cn}
        >
            {t(item.labelKey).toUpperCase()}
        </Link>
    </li>
    )
}

export default NavLinkDesk