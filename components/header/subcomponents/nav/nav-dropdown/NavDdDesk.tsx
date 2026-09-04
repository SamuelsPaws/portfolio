'use client'
import { useRef, useState } from 'react'
import { NavLinkType } from '@/lib/types/nav';
import { useTranslations } from 'next-intl';
import NavDdMenuDesk from './NavDdMenuDesk';

interface Props {
    item: NavLinkType;
    className: string;
}

const NavDdDesk = ({ item, className }: Props) => {
    const [isDdOpen, setIsDdOpen] = useState<boolean>(false)
    const btnRef = useRef<HTMLButtonElement>(null)
    const t = useTranslations('Reusable')

    const toggleDdOpen = () => {
        setIsDdOpen(prev => !prev)
    }

    return (
    <div className='relative'>
        <button
            ref={btnRef}
            onClick={toggleDdOpen}
            className={className}
        >
            {t(item.labelKey).toUpperCase()}
        </button>
        <NavDdMenuDesk
            isDdOpen={isDdOpen}
            setIsDdOpen={setIsDdOpen}
            btnCurrent={btnRef.current}
            items={item.dropdown}
        />
    </div>
    )
}

export default NavDdDesk