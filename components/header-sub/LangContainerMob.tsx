'use client'
import { useRef, useState } from 'react'
import LangBtn from './LangBtn'
import { useRouter, usePathname } from '@/i18n/navigation'
import LangMenuMob from './LangMenuMob'

const LangContainerMob = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const router = useRouter()
    const pathname = usePathname()
    const langBtnRef = useRef<HTMLButtonElement>(null)

    const changeLocale = (locale: string) => {
        router.replace(pathname, { locale })
    }

    // const images = {
    //     en: <div className="h-8 aspect-square rounded-full overflow-hidden relative"><Image src="/assets/en.svg" fill sizes="100%" className="object-cover drag-none" alt="Flag of the USA" /></div>,
    // }

    return (
    <div className='h-full flex items-center relative'>
        <LangBtn setIsMenuOpen={setIsMenuOpen} ref={langBtnRef} />
        <LangMenuMob
            changeLocale={changeLocale}
            isMenuOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            langBtnCurrent={langBtnRef.current}
        />
    </div>
    )
}

export default LangContainerMob