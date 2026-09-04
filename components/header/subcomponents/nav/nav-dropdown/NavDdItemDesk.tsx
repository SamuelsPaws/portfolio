import { NavDdItemType } from "@/lib/types/nav";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
    item: NavDdItemType;
    onClick: () => void;
    isLast: boolean;
}

const NavDdItemDesk = ({ item, onClick, isLast }: Props) => {
    const t = useTranslations('Reusable')

    const cn = clsx(
        "p-4",
        "grid place-content-center",
        "bg-br-white hover:bg-gray-200 duration-200",
        "text-lg",
        !isLast && "border-b border-gray-400"
    )

    return (
    <Link
        onClick={onClick}
        href={item.href}
        className={cn}
    >
        {t(item.labelKey)}
    </Link>
    )
}

export default NavDdItemDesk