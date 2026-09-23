import FortSectionSt from "@/components/FortSectionSt";
import SimpleH2 from "@/components/SimpleH2";
import Eyebrow from "@/components/ui-reusables/Eyebrow";
import Image from "next/image";
import IconInfoCard from "@/components/ui-reusables/IconInfoCard";
import ValuesBullet from "./components/ValuesBullet";
import ProfileColumn from "./components/ProfileColumn";
import CustomIcon from "@/components/CustomIcon";
import WhyWorkTable from "./components/why-work-table/WhyWorkTable";
import FaqCard from "./components/FaqCard";
import SimpleH3 from "@/components/SimpleH3";
import Link from "next/link";
import FortSectionCta from "@/components/cta-section/FortSectionCta";
import { getTranslations } from "next-intl/server";
import { teamSkills } from "@/data/fortales/teamSkills";
import { LocaleKey } from "@/lib/types/localeKey";
import organization from "@/data/fortales/organization";
import getLangAlternates from "@/lib/utils/getLangAlternates";
import { availableLocales } from "@/data/locales";
import { Metadata } from "next";
import { generateBreadcrumbSchema, generateAboutSchema } from "@/lib/seo/schema";
import { getBreadcrumbs } from "@/data/breadcrumbs";
import JsonLd from "@/components/JsonLd";

type Props = {
    params: Promise<{
        locale: LocaleKey
    }>
}

const BASE_URL = organization.url;

export async function generateMetadata({ params }: { params: Promise<{ locale: LocaleKey }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "Metadata.FortAbout",
    });

    const canonical = `${BASE_URL}/${locale}/about`;

    return {
        metadataBase: new URL(BASE_URL),

        title: t("title"),
        description: t("description"),
        
        keywords: t.raw("keywords"),
        applicationName: organization.name,
        authors: [
            {
                name: organization.author,
            },
        ],
        creator: organization.author,
        publisher: organization.author,
        alternates: {
            canonical,
            languages: getLangAlternates('/about', BASE_URL),
        },

        openGraph: {
            title: t("ogTitle"),
            description: t("ogDescription"),
            url: canonical,
            siteName: organization.name,
            locale: availableLocales[locale],
            type: "website",
            images: [
                {
                    url: organization.image,
                    width: 1200,
                    height: 630,
                    alt: organization.name,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: t("twitterTitle"),
            description: t("twitterDescription"),
            images: [organization.image],
        },

        category: t('category'),

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
  };
}

export default async function About({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations('FortAbout')

    const pageSchema = await generateAboutSchema(locale)

    const breadcrumbSchema = generateBreadcrumbSchema(getBreadcrumbs(locale)['about'], organization.url, locale)

    return (
    <main id="main-content" tabIndex={-1}>
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={pageSchema} />
        {/* Hero */}
        <section className="
            px-8 py-24
            md:px-32 md:py-32
            bg-main"
        >
            {/* Content wrapper */}
            <div className="
                w-full
                flex flex-col md:flex-row items-center gap-8 md:gap-32"
            >
                {/* Left div */}
                <div className="w-full md:w-1/2">
                    {/* Eyebrow */}
                    <Eyebrow text={t('heroBrow').toUpperCase()} />
                    <h1 className="
                        mb-4 md:mb-8
                        text-most-h2 text-main
                        font-['Source_Serif_4'] leading-10 md:leading-14
                        opacity-0 animate-fade-in-right-600"
                    >
                        {t('h1')}
                    </h1>
                    <p className="
                        mb-4
                        text-my-md text-secondary
                        opacity-0 animate-fade-in-right-800"
                    >
                        {t('subhead1')}
                    </p>
                    <p className="
                        text-my-md text-secondary
                        opacity-0 animate-fade-in-right-1000"
                    >
                        {t('subhead2')}
                    </p>
                </div>
                {/* Right image */}
                <Image
                    src="/assets/about-hero.jpg"
                    width={935}
                    height={995}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="
                        w-full md:w-1/2
                        h-80 md:h-120
                        object-cover object-top
                        rounded-4xl shadow-img
                        opacity-0 animate-fade-in-left-slow-1000"
                    alt="Foto del equipo de Fortales"
                    priority
                />
            </div>
        </section>
        {/* Our story */}
        <FortSectionSt
            bgColor="bg-secondary"
        >
            {/* Upper content wrapper */}
            <div className="
                w-full mb-16
                flex flex-col-reverse md:flex-row items-start gap-16"
            >
                <div className="w-full md:w-1/2">
                    <img
                        src="/assets/undraw-ideas.svg"
                        className="w-full h-60 md:h-80 object-contain"
                        alt="Una persona pensando"
                    />    
                </div>
                <div className="w-full md:w-1/2">
                    <Eyebrow text={t('storyBrow').toUpperCase()} />
                    <SimpleH2
                        text={t('h2Story')}
                        className="mb-8 text-most-h2 leading-10 md:leading-16"
                    />
                    {/* Paragraphs */}
                    <div className="flex flex-col gap-4">
                        <p className="text-my-md text-secondary">
                            {t('storyCopy1')}
                        </p>
                        <p className="text-my-md text-secondary">
                            {t('storyCopy2')}
                        </p>
                    </div>
                </div>
            </div>
            {/* Cards */}
            <div className="
                w-full
                flex flex-col md:flex-row justify-center flex-wrap gap-8"
            >
                <IconInfoCard
                    iconId="bulb"
                    title={t('h3Business')}
                    description={t('businessCopy')}
                />
                <IconInfoCard
                    iconId="handshake-far"
                    title={t('h3Collaboration')}
                    description={t('collaborationCopy')}
                />
                <IconInfoCard
                    iconId="growth"
                    title={t('h3Growth')}
                    description={t('growthCopy')}
                />
            </div>
        </FortSectionSt>
        {/* Values */}
        <FortSectionSt
            title={t('h2Values')}
            bgColor="bg-main"
        >
            <p className="
                w-full md:w-2/3 mx-auto mb-8 md:mb-16
                text-secondary text-my-md text-center leading-6 md:leading-8"
            >
                {t('valuesCopy')}
            </p>
            {/* Values grid */}
            <div className="
                w-fit mx-auto mb-16
                grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
            >
                <IconInfoCard
                    iconId="building"
                    title={t('h3ValuesBiz')}
                    description={t('valuesBizCopy')}
                    bgColor="bg-br-white dark:bg-br-gray-800"
                />
                <IconInfoCard
                    iconId="message-bubble"
                    title={t('h3Communication')}
                    description={t('communicationCopy')}
                    bgColor="bg-br-white dark:bg-br-gray-800"
                />
                <IconInfoCard
                    iconId="heart"
                    title={t('h3Last')}
                    description={t('lastCopy')}
                    bgColor="bg-br-white dark:bg-br-gray-800"
                />
                <IconInfoCard
                    iconId="calendar-clock"
                    title={t('h3Partner')}
                    description={t('partnerCopy')}
                    bgColor="bg-br-white dark:bg-br-gray-800"
                />
            </div>
            {/* Lower bullet points */}
            <div className="
                w-full
                p-8
                md:px-16 md:py-16
                flex flex-col md:flex-row justify-between items-start md:items-center gap-8
                bg-br-orange-main/10
                rounded-4xl border border-br-orange-main/20"
            >
                <ValuesBullet
                    iconId="handHeart"
                    text={t('pricingBullet')}
                />
                <ValuesBullet
                    iconId="bulb"
                    text={t('recsBullet')}
                />
                <ValuesBullet
                    iconId="headset"
                    text={t('supportBullet')}
                />
            </div>
        </FortSectionSt>
        {/* Team */}
        <FortSectionSt
            title={t('h2Team')}
            bgColor="bg-secondary"
        >
            <p className="
                w-full md:w-2/3 mx-auto mb-8 md:mb-16
                text-my-md text-secondary text-center leading-6 md:leading-8"
            >
                {t('teamCopy')}
            </p>
            {/* Profile columns */}
            <div className="
                w-full
                flex flex-col md:flex-row items-stretch gap-8 md:gap-16"
            >
                <ProfileColumn
                    image={{
                        src: '/assets/headshot.JPG',
                        width: 1023,
                        height: 1537
                    }}
                    name="Samuel Baquero"
                    role={t('samuelRole').toUpperCase()}
                    description={t('samuelCopy')}
                    skills={teamSkills.samuelBaquero.map(el => el[locale])}
                />
                <ProfileColumn
                    image={{
                        src: '/assets/wen-headshot.jpeg',
                        width: 1023,
                        height: 1537
                    }}
                    name="Wendy Dominguez"
                    role={t('wenRole').toUpperCase()}
                    description={t('wenCopy')}
                    skills={teamSkills.wendyDominguez.map(el => el[locale])}
                />
            </div>
        </FortSectionSt>
        {/* Why work with us */}
        <FortSectionSt
            title={t('h2WhyUs')}
            bgColor="bg-main"
        >
            <p className="
                w-full md:w-2/3 mx-auto mb-8 md:mb-16
                text-my-md text-secondary text-center leading-6 md:leading-8"
            >
                {t('whyUsCopy')}  
            </p>
            <WhyWorkTable />
        </FortSectionSt>
        {/* Faq */}
        <FortSectionSt bgColor="bg-secondary">
            {/* Content wrapper */}
            <div className="
                w-full
                flex flex-col md:flex-row items-start gap-16 md:gap-32"
            >
                <div className="
                    w-full
                    md:flex-1 md:w-auto"
                >
                    <Eyebrow text={t('faqBrow').toUpperCase()} />
                    <SimpleH2
                        text={t('h2Faq')}
                        className="mb-8 md:mb-16 text-most-h2"
                    />
                    <p className="
                        mb-8 md:mb-16
                        text-my-md text-secondary leading-6 md:leading-8"
                    >
                        {t('faqCopy')}
                    </p>
                    <div className="
                        flex flex-col gap-4"
                    >
                        {Array(9).fill(null).map((_, i) => (
                            <FaqCard
                                key={i}
                                question={t(`q${i + 1}`)}
                                answer={t(`a${i + 1}`)}
                            />
                        ))}
                    </div>
                </div>
                {/* Didn't find? */}
                <div className="
                    w-full md:w-90
                    p-8
                    bg-black/5 dark:bg-br-gray-600
                    rounded-4xl"
                >
                    <SimpleH3
                        text={t('h3OtherQuestions')}
                        className="mb-4 text-3xl leading-10"
                    />
                    <p className="
                        mb-4
                        text-secondary text-my-sm"
                    >
                        {t('otherQuestionsCopy')}
                    </p>
                    <Link
                        href="/contact"
                        className="
                            w-full
                            py-2 md:hover:pl-4 duration-200
                            flex items-center justify-center gap-2
                            bg-black dark:bg-br-white
                            text-my-md text-br-white dark:text-black
                            rounded-full"
                    >
                        <span>{t('otherQuestionsCta')}</span>
                        <CustomIcon
                            iconId="arrowR"
                            className="scale-110"
                        />
                    </Link>
                </div>
            </div>
        </FortSectionSt>
        <FortSectionCta bgColor="bg-main" />
    </main>
    )
}
