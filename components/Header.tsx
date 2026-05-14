import Link from "next/link"
import LangContainer from "./header-sub/LangContainer"
import { useTranslations } from "next-intl"
import ProjectsDdContainer from "./header-sub/ProjectsDdContainer"
import BurgerMenu from "./header-sub/BurgerMenu"
import LangContainerMob from "./header-sub/LangContainerMob"

const Header = () => {
    const t = useTranslations('Reusable')

  return (
    // pl is 6 not 8 to compensate for Home btn padding
    <header className="
        fixed top-0 left-0
        w-full h-mob-header-height lg:h-header-height
        pl-6 pr-8
        lg:pl-6 lg:pr-4
        flex items-center justify-between
        bg-mywhite
        text-black font-semibold z-40"
    >
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
    </header>
  )
}

export default Header