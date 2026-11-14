import FortSectionSt from "@/components/FortSectionSt"
import Eyebrow from "@/components/ui-reusables/Eyebrow"
import { Link } from "@/i18n/navigation"
import type { LocaleKey } from "@/lib/types/localeKey"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

interface Props {
    params: Promise<{ locale: LocaleKey, slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'ClientGuides' })

    return {
        title: `${t('guideTitle')} | Fortales`,
        description: t('guideIntro'),
        robots: { index: false, follow: true },
    }
}

export default async function ClientGuidePage({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'ClientGuides' })

    return (
    <main id="main-content" tabIndex={-1}>
        {/* Guide banner */}
        <FortSectionSt bgColor="bg-main" firstSection>
            <Link href="/client-guides" className="text-my-md text-secondary underline underline-offset-4">
                {t('back')}
            </Link>
            <div className="max-w-200 mt-8">
                <Eyebrow text={t('previewStatus')} />
                <h1 className="mb-4 text-4xl md:text-5xl xl:text-6xl text-main font-serif">
                    {t('guideTitle')}
                </h1>
                <p className="text-my-lg text-secondary leading-relaxed">
                    {t('guideIntro')}
                </p>
            </div>
        </FortSectionSt>

        {/* Guide template */}
        <FortSectionSt bgColor="bg-secondary">
            <article className="max-w-200 mx-auto">
                <Eyebrow text={t('templateBrow')} />
                <h2 className="mb-4 text-most-h2 text-main font-serif">
                    {t('beforeTitle')}
                </h2>
                <p className="mb-8 text-my-md text-secondary leading-relaxed">
                    {t('beforeCopy')}
                </p>

                {/* Example step */}
                <div className="
                    p-8
                    bg-main
                    border border-gray-300 rounded-4xl"
                >
                    <Eyebrow text={t('stepLabel')} shortMargin />
                    <h3 className="mb-4 text-2xl text-main font-serif">
                        {t('stepTitle')}
                    </h3>
                    <p className="text-my-md text-secondary leading-relaxed">
                        {t('stepCopy')}
                    </p>
                </div>
                <p className="mt-8 text-my-md text-secondary leading-relaxed">
                    {t('templateNote')}
                </p>
            </article>
        </FortSectionSt>
    </main>
    )
}
