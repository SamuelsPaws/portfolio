'use client'
import Link from "next/link"
import LangContainer from "./subcomponents/LangContainer"
import { useTranslations } from "next-intl"
import BurgerMenu from "./subcomponents/nav/BurgerMenu"
import LangContainerMob from "./subcomponents/LangContainerMob"
import { useEffect, useState } from "react"
import clsx from "clsx"
import navLinks from "@/data/nav"
import NavLinkDesk from "./subcomponents/nav/NavLinkDesk"
import ThemeBtn from "./subcomponents/ThemeBtn"

const Header = () => {
    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    const t = useTranslations('Reusable')

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 100);
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    // pl is 6 not 8 to compensate for Home btn padding
    <header className={clsx(
        "fixed top-0 left-0",
        "w-full h-mob-header-height lg:h-header-height",
        "pl-6 pr-8",
        "lg:pl-6 lg:pr-4",
        "flex items-center justify-between",
        "bg-br-white dark:bg-br-black",
        "text-black dark:text-br-white",
        "font-semibold z-[9000] duration-600",
        isAtTop ? "shadow-[0_2px_8px_#0000]" : "shadow-header"
    )}>
        <Link
            href="/"
            className="
                px-2 py-2
                grid place-content-center
                text-xl"
        >
            {t('home').toUpperCase()}
        </Link>
        {/* Mobile-only div */}
        <div className="
            h-full
            flex items-center gap-8
            lg:hidden"
        >
            <LangContainerMob />
            <BurgerMenu />
        </div>
        <nav className="
            h-full
            hidden lg:flex items-center gap-8
            text-md tracking-wider"
        >
            <ThemeBtn />
            <LangContainer />
            <ul className="
                h-full
                flex items-center gap-8"
            >
                {navLinks.slice(1).map((el, index) => (
                    <NavLinkDesk
                        key={index}
                        item={el}
                        isLast={index >= navLinks.length - 2}
                    />
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header