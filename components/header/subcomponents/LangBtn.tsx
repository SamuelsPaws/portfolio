import { useTranslations } from 'next-intl'
import GlobeIcon from '../../icons/GlobeIcon'
import { Ref, SetStateAction } from 'react'

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
            flex gap-1
            text-sky-600"
        ref={ref}
    >
        <GlobeIcon />
        <span>{t('languageName')}</span>
        <i className="fa fa-chevron-down scale-[0.7] translate-y-0.5" aria-hidden="true"></i>
    </button>
  )
}

export default LangBtn