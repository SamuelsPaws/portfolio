import Link from "next/link"
import LangContainer from "./header-sub/LangContainer"
import { useTranslations } from "next-intl"
import ProjectsDdContainer from "./header-sub/ProjectsDdContainer"
import BurgerMenu from "./header-sub/BurgerMenu"

const Header = () => {
    const t = useTranslations('Reusable')

  return (
    <header className="
        fixed top-0 left-0
        w-full h-mob-header-height lg:h-header-height
        pr-8 lg:pr-4
        flex items-center justify-between
        bg-mywhite
        text-black font-semibold z-40"
    >
        <Link
            href="/"
            className="
                h-full px-8 lg:px-8
                grid place-content-center
                text-xl"
        >
            {t('home').toUpperCase()}
        </Link>
        <nav className="
            h-full
            hidden lg:flex items-center gap-8
            text-md tracking-wider"
        >
            <LangContainer />
            <ProjectsDdContainer />
            <Link
                href="/about"
                className="px-2"
            >
                {t('about').toUpperCase()}
            </Link>
            <Link
                href="/contact"
                className="px-6 py-2 bg-black text-white rounded-full"
            >
                {t('contactMe').toUpperCase()}
            </Link>
        </nav>
        <BurgerMenu />
    </header>
  )
}

export default Header