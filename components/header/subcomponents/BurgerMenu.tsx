'use client'
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react"

const BurgerMenu = () => {
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

    return (
        <div className="
            h-6 aspect-square lg:hidden
            text-white-1"
        >
            {/* Burger icon */}
            <button
                onClick={toggleMenu}
                className="w-full h-full z-50 relative"
            >
                <div className={`
                    h-0.5 w-full
                    ${isOpen ? "bg-br-white" : "bg-black"}
                    absolute top-1 left-0
                    duration-300 ease-in-out
                    ${isOpen ? ' rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
                <div className={`
                    h-0.5 w-full
                    ${isOpen ? "bg-br-white" : "bg-black"}
                    absolute left-0 top-1/2 -translate-y-1/2
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></div>
                <div className={`
                    h-0.5 w-full
                    ${isOpen ? "bg-br-white" : "bg-black"}
                    absolute bottom-1 left-0
                    duration-300 ease-in-out
                    ${isOpen ? ' -rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}`}
                ></div>
            </button>
            {/* Actual menu */}
            <div className={`
                w-full h-[70vh]
                pt-header-height-mob px-8
                ${isOpen ? 'fixed' : 'hidden'}
                top-0 left-0
                bg-black shadow-md`}
            >
                <ul className="
                    w-full h-full
                    flex flex-col justify-center items-end gap-6
                    text-xl font-semibold text-br-white"
                >
                    <li>
                        <Link
                            href='/'
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            {t('home')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/projects/web-dev'
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            {t('webDevProjects')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/projects/other'
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            {t('otherProjects')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/contact'
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            {t('contactMe')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/about'
                            className="px-2"
                            onClick={toggleMenu}
                        >
                            {t('aboutMe')}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu