import FortSectionSt from "@/components/FortSectionSt"
import Eyebrow from "@/components/ui-reusables/Eyebrow"
import FortCtaBtn from "@/components/ui-reusables/FortCtaBtn"
import OrangeWithIcon from "@/components/ui-reusables/OrangeWithIcon"
import type { LocaleKey } from "@/lib/types/localeKey"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { GuideCard } from "./components/GuideCard"

interface Props {
    params: Promise<{ locale: LocaleKey }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'ClientGuides' })

    return {
        title: `${t('title')} | Fortales`,
        description: t('intro'),
        robots: { index: false, follow: true },
    }
}

export default async function ClientGuidesPage({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'ClientGuides' })

    // Temporary menu examples until the guide content is defined.
    const guides = [
        {
            slug: 'resend-setup-and-team-access',
            iconId: 'message-bubble' as const,
            title: t('resendTitle'),
            description: t('resendDescription'),
        },
        {
            slug: 'domain-and-dns',
            iconId: 'globe' as const,
            title: t('domainTitle'),
            description: t('domainDescription'),
        },
        {
            slug: 'prepare-your-website-content',
            iconId: 'file-solid' as const,
            title: t('contentTitle'),
            description: t('contentDescription'),
        },
        {
            slug: 'invite-your-website-team',
            iconId: 'handshake-far' as const,
            title: t('teamTitle'),
            description: t('teamDescription'),
        },
    ]

    return (
    <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <FortSectionSt bgColor="bg-main" firstSection>
            <div className="flex flex-col md:flex-row items-center gap-8 xl:gap-16">
                {/* Introduction */}
                <div className="w-full md:w-1/2 min-w-0">
                    <Eyebrow text={t('title')} />
                    <h1 className="
                        mb-8
                        text-4xl md:text-5xl xl:text-6xl text-main font-serif leading-tight"
                    >
                        {t('heroTitle')}
                        <span className="block text-br-orange-main">
                            {t('heroAccent')}
                        </span>
                    </h1>
                    <p className="mb-8 text-my-lg text-secondary leading-relaxed">
                        {t('intro')}
                    </p>
                    <FortCtaBtn
                        href="#guides"
                        label={t('browse')}
                    />
                </div>

                {/* Guide overview */}
                <div className="
                    w-full md:w-1/2 min-w-0
                    p-8 md:p-16
                    bg-secondary
                    rounded-4xl"
                >
                    <OrangeWithIcon iconId="bulb" />
                    <h2 className="mt-8 mb-4 text-3xl text-main font-serif">
                        {t('overviewTitle')}
                    </h2>
                    <p className="mb-8 text-my-md text-secondary leading-relaxed">
                        {t('overviewCopy')}
                    </p>
                    <ul className="flex flex-col gap-4 text-my-md text-main">
                        <li className="pb-4 border-b border-gray-400">
                            {t('topicAccounts')}
                        </li>
                        <li className="pb-4 border-b border-gray-400">
                            {t('topicDomains')}
                        </li>
                        <li>
                            {t('topicContent')}
                        </li>
                    </ul>
                </div>
            </div>
        </FortSectionSt>

        {/* Guide menu */}
        <FortSectionSt bgColor="bg-secondary">
            <div id="guides" className="mb-8 md:mb-16 scroll-mt-24">
                <Eyebrow text={t('menuBrow')} />
                <h2 className="mb-4 text-most-h2 text-main font-serif">
                    {t('menuTitle')}
                </h2>
                <p className="max-w-180 text-my-md text-secondary leading-relaxed">
                    {t('menuCopy')}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guides.map(guide => (
                    <GuideCard
                        key={guide.slug}
                        href={`/client-guides/${guide.slug}`}
                        iconId={guide.iconId}
                        title={guide.title}
                        description={guide.description}
                        label={t('previewLink')}
                        status={t('previewStatus')}
                    />
                ))}
            </div>
        </FortSectionSt>
    </main>
    )
}
