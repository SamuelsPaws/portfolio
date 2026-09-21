'use client'
import { useId, useRef, useState } from 'react'
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
    const menuId = useId()

    const toggleDdOpen = () => {
        setIsDdOpen(prev => !prev)
    }

    return (
    <div className='
        relative h-full
        flex items-center'
    >
        <button
            type="button"
            ref={btnRef}
            onClick={toggleDdOpen}
            aria-expanded={isDdOpen}
            aria-controls={menuId}
            className={className}
        >
            {t(item.labelKey).toUpperCase()}
        </button>
        <NavDdMenuDesk
            id={menuId}
            isDdOpen={isDdOpen}
            setIsDdOpen={setIsDdOpen}
            btnRef={btnRef}
            items={item.dropdown}
        />
    </div>
    )
}

export default NavDdDesk
