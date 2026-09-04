import { useTranslations } from 'next-intl'
import GlobeIcon from '../../icons/GlobeIcon'
import { Ref, SetStateAction } from 'react'
import CustomIcon from '@/components/CustomIcon';
import clsx from 'clsx';

interface Props {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
    ref?: Ref<HTMLButtonElement>;
}

const LangBtn = ({ ref, isMenuOpen, setIsMenuOpen }: Props) => {
    const t = useTranslations("Meta")

    const handleClick = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
    <button
        onClick={handleClick}
        className="
            px-0
            flex gap-1 items-center
            text-sky-600 dark:text-sky-300
            md:hover:text-sky-400 dark:md:hover:text-sky-100 duration-400
            text-myf-md"
        ref={ref}
    >
        <CustomIcon
            iconId="globe"
            className="md:scale-110"
        />
        <span>{t('languageName')}</span>
        <CustomIcon
            iconId="chevronDown"
            className={clsx("scale-125 duration-400", isMenuOpen ? "-rotate-180" : "rotate-0")}
        />
    </button>
  )
}

export default LangBtn