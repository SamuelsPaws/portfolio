import CustomIcon from "@/components/CustomIcon";
import { NavLinkType } from "@/lib/types/nav"
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

interface Props {
    item: NavLinkType;
    onLinkClick: () => void;
}

const NavDdMob = ({ item, onLinkClick }: Props) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const t = useTranslations('Reusable')

    const handleBtnClick = () => {
        setIsExpanded(prev => !prev)
    }

    return (
    <li className={clsx(
        "flex flex-col items-end",
        "border-y duration-400",
        isExpanded ? "border-brandwhite py-4" : "border-transparent py-0"
    )}>
        <button
            onClick={handleBtnClick}
            className="
                px-2
                flex items-center gap-1
                text-lg"
        >
            <span>{t(item.labelKey).toUpperCase()}</span>
            <CustomIcon
                iconId="chevronDown"
                className={clsx("scale-110 duration-400", isExpanded && "-rotate-180")}
            />
        </button>
        <div className={clsx(
            "grid transition-[grid-template-rows] duration-400 ease-out",
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}>
            <div className="overflow-hidden">
                <ul className="
                    w-full mt-4
                    px-2
                    flex flex-col items-end gap-4
                    text-md text-gray-300"
                >
                    {item.dropdown && item.dropdown.map((el, index) => (
                        <li key={index}>
                            <Link
                                href={el.href}
                                onClick={onLinkClick}
                            >
                                {t(el.labelKey)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </li>
    )
}

export default NavDdMob