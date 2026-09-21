'use client'
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react"
import NavLinkMob from "./NavLinkMob";
import clsx from "clsx";
import ThemeBtn from "../ThemeBtn";
import { NavLinkType } from "@/lib/types/nav";

interface Props {
    navLinks: NavLinkType[];
}

const BurgerMenu = ({ navLinks }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const t = useTranslations('Reusable')

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = (): void => {
            setIsOpen(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    return (
        <div className="h-6 aspect-square lg:hidden">
            {/* Burger icon */}
            <button
                type="button"
                onClick={toggleMenu}
                aria-label={t('navigation')}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="w-full h-full z-50 relative"
            >
                <div className={`
                    h-0.5 w-full
                    ${isOpen ? "bg-br-white" : "bg-black dark:bg-br-white"}
                    absolute top-1 left-0
                    duration-300 ease-in-out
                    ${isOpen ? ' rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
                <div className={`
                    h-0.5 w-full
                    ${isOpen ? "bg-br-white" : "bg-black dark:bg-br-white"}
                    absolute left-0 top-1/2 -translate-y-1/2
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></div>
                <div className={`
                    h-0.5 w-full
                    ${isOpen ? "bg-br-white" : "bg-black dark:bg-br-white"}
                    absolute bottom-1 left-0
                    duration-300 ease-in-out
                    ${isOpen ? ' -rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
            </button>
            {/* Actual menu */}
            <nav
                id="mobile-navigation"
                aria-label={t('navigation')}
                className={clsx(
                isOpen ? 'fixed' : 'hidden',
                "top-0 left-0",
                "w-screen h-[75vh]",
                "pt-header-height-mob px-8",
                "flex flex-col justify-center items-end gap-8",
                "bg-black dark:bg-br-gray-800",
                "border-b border-b-white/10 shadow-md"
            )}>
                <ul className="
                    w-full
                    flex flex-col justify-center items-end gap-4
                    text-xl font-semibold text-br-white"
                >
                    {navLinks.map((el, index) => (
                        <NavLinkMob
                            key={index}
                            item={el}
                            onLinkClick={toggleMenu}
                        />
                    ))}
                </ul>
                <ThemeBtn />
            </nav>
        </div>
    )
}

export default BurgerMenu
