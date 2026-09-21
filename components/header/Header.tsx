'use client'
import Link from "next/link"
import LangContainer from "./subcomponents/LangContainer"
import { useTranslations } from "next-intl"
import BurgerMenu from "./subcomponents/nav/BurgerMenu"
import LangContainerMob from "./subcomponents/LangContainerMob"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { navLinksFort, navLinksSamPort } from "@/data/nav"
import NavLinkDesk from "./subcomponents/nav/NavLinkDesk"
import ThemeBtn from "./subcomponents/ThemeBtn"
import { usePathname } from "next/navigation"
import Image from "next/image"

const Header = () => {
    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    const t = useTranslations('Reusable')
    
    const pathname = usePathname()
    const isSamPortfolio = pathname.split('/').includes('samuel-portfolio')

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

    const navLinks = isSamPortfolio ? navLinksSamPort : navLinksFort

    return (<>
    {!isSamPortfolio && (
        <a
            href="#main-content"
            className="fixed left-4 top-4 z-[9999] -translate-y-24 rounded-full bg-black px-4 py-2 text-br-white transition-transform duration-200 focus-visible:translate-y-0 dark:bg-br-white dark:text-black"
        >
            {t('skipToContent')}
        </a>
    )}
    {/* pl is 6 not 8 to compensate for Home btn padding */}
    <header className={clsx(
        "fixed top-0 left-0",
        "w-full h-mob-header-height lg:h-header-height",
        "pl-6 pr-8",
        "md:pl-8 md:pr-8",
        "flex items-center justify-between",
        "bg-br-white dark:bg-br-black",
        "text-black dark:text-br-white",
        "font-semibold z-[9000] duration-600",
        isAtTop ? "shadow-[0_2px_8px_#0000]" : "shadow-header"
    )}>
        {/* Home button */}
        {isSamPortfolio ? (
            <Link
                href="/samuel-portfolio"
                className="
                    px-2 py-2
                    grid place-content-center
                    text-xl"
            >
                {t('home').toUpperCase()}
            </Link>
        ) : (
            <Link
                href="/"
                className="
                    flex items-center gap-2
                    text-xl"
            >
                <Image
                    src="/assets/fortales-logo.svg"
                    width={32}
                    height={32}
                    alt="Fortales"
                    className="w-8 h-auto"
                />
            </Link>
        )}
        {/* Mobile-only div */}
        <div className="
            h-full
            flex items-center gap-8
            lg:hidden"
        >
            <LangContainerMob />
            <BurgerMenu navLinks={navLinks} />
        </div>
        <nav aria-label={t('navigation')} className="
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
    </>
  )
}

export default Header
