import { useTranslations } from 'next-intl'
import GlobeIcon from '../../icons/GlobeIcon'
import { Ref, SetStateAction } from 'react'
import CustomIcon from '@/components/CustomIcon';

interface Props {
    setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
    ref?: Ref<HTMLButtonElement>;
}

const LangBtn = ({ ref, setIsMenuOpen }: Props) => {
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
            text-sky-600 text-myf-md"
        ref={ref}
    >
        <GlobeIcon />
        <span>{t('languageName')}</span>
        <CustomIcon
            iconId="chevronDown"
            className="scale-125"
        />
    </button>
  )
}

export default LangBtn