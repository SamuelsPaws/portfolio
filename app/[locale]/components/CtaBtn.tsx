import RoundBlackLink from '@/components/ui-reusables/RoundBlackLink'
import { useTranslations } from 'next-intl'

const CtaBtn = () => {
    const t = useTranslations('HomePage')

  return (
    <RoundBlackLink
        href='/projects/web-dev'
        textSize='text-xl lg:text-3xl'
        paddingSize='lg'
        containerClasses=''
    >
        <span>{t('heroCta')}</span>
    </RoundBlackLink>
  )
}

export default CtaBtn