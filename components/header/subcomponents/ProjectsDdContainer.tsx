'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ProjectsDd from './ProjectsDd'

const ProjectsDdContainer = () => {
    const [isDdOpen, setIsDdOpen] = useState<boolean>(false)
    const t = useTranslations('Reusable')
    const btnRef = useRef<HTMLButtonElement>(null)

    const toggleDdOpen = () => {
        setIsDdOpen(prev => !prev)
    }

    return (
    <div className='h-full flex items-center relative'>
        <button
            ref={btnRef}
            onClick={toggleDdOpen}
            className="px-2"
        >
            {t('projects').toUpperCase()}
        </button>
        <ProjectsDd
            isDdOpen={isDdOpen}
            setIsDdOpen={setIsDdOpen}
            btnCurrent={btnRef.current}
        />
    </div>
    )
}

export default ProjectsDdContainer