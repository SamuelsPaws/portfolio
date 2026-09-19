import { useTranslations } from 'next-intl'
import StatStamp from './StatStamp'
import FortCtaBtn from '@/components/ui-reusables/FortCtaBtn'
import Image from 'next/image'

const Hero = () => {
    const t = useTranslations('FortHome')

    return (
    <section className="
        px-8 py-24
        md:px-16 md:py-32
        xl:px-32 xl:py-32
        flex flex-col gap-8
        md:flex-row md:justify-center md:gap-8 xl:gap-16
        bg-main"
    >
        {/* Left div */}
        <div className="
            w-full md:w-[45%]
            flex flex-col justify-center gap-8 md:gap-8"
        >
            <h1 className="
                text-4xl md:text-5xl xl:text-6xl text-center md:text-left
                text-black dark:text-br-white
                font-serif font-semibold leading-12 md:leading-18 tracking-wide wrap-break-word
                opacity-0 animate-fade-in-right-600"
            >
                {t('h1-1')} <span className="text-br-orange-main">{t('h1-2')}</span> {t('h1-3')}
            </h1>
            <p className="
                text-my-lg
                text-gray-600 dark:text-gray-300
                font-[300]
                opacity-0 animate-fade-in-right-800"
            >
                {t('subhead')}
            </p>
            {/* Div with buttons */}
            <div className="
                w-full md:w-auto
                flex flex-col gap-4 flex-wrap
                md:flex-row md:gap-4
                opacity-0 animate-fade-in-right-1000"
            >
                <FortCtaBtn
                    href='/pricing'
                    label={t('ctaMain')}
                />
                <FortCtaBtn
                    href='/about'
                    label={t('ctaSecond')}
                    type='secondary'
                />
            </div>
            {/* Separator */}
            <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-600" />
            {/* Div with numbers */}
            <div className="
                hidden md:flex gap-16
                opacity-0 animate-fade-in-up-1200"
            >
                <StatStamp
                    head={t('performanceFirst')}
                    body={t('fastByDesign')}
                />
                <StatStamp
                    head={t('seoBuiltIn')}
                    body={t('readyToBeFound')}
                />
            </div>
        </div>
        {/* Right div (image) */}
        <div className="
            w-full h-80 relative
            md:w-[540px] md:h-auto md:max-h-140 md:aspect-square
            rounded-4xl overflow-hidden shadow-img
            opacity-0 animate-fade-in-left-slow-1200"
        >
            <Image
                src="/assets/hero-img.jpg"
                fill
                sizes='100%'
                className="h-full w-full object-cover object-center"
                alt="Personas observando una computadora"
                priority
            />
        </div>
    </section>
    )
}

export default Hero
