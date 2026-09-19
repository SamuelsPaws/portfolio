import CustomIcon from "@/components/CustomIcon";
import Eyebrow from "@/components/ui-reusables/Eyebrow";
import HeroBulletItem from "./components/HeroBulletItem";
import Image from "next/image";
import FortSectionSt from "@/components/FortSectionSt";
import CenteredP from "@/components/ui-reusables/CenteredP";
import StepCard from "@/components/ui-reusables/StepCard";
import OrangeWithIcon from "@/components/ui-reusables/OrangeWithIcon";
import ReachLink from "./components/ReachLink";
import organization from "@/data/fortales/organization";
import Link from "next/link";
import FaqCard from "../about/components/FaqCard";
import SimpleH2 from "@/components/SimpleH2";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { LocaleKey } from "@/lib/types/localeKey";
import { availableLocales } from "@/data/locales";
import getLangAlternates from "@/lib/utils/getLangAlternates";
import SimpleH3 from "@/components/SimpleH3";
import FortCtaBtn from "@/components/ui-reusables/FortCtaBtn";
import { generateBreadcrumbSchema, generateContactSchema } from "@/lib/seo/schema";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbs } from "@/data/breadcrumbs";
import FormTemplate, { type FormInputDefinition } from "@/components/form-template/FormTemplate";
import CtaSection from "./components/cta-section/CtaSection";

type Props = {
    params: Promise<{
        locale: LocaleKey;
    }>
}

const BASE_URL = organization.url;

export async function generateMetadata({ params }: { params: Promise<{ locale: LocaleKey }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "Metadata.FortContact",
    });

    const canonical = `${BASE_URL}/${locale}/contact`;

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
            languages: getLangAlternates('/contact', BASE_URL),
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

export default async function Contact({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations('FortContact')
    const emailSubject = t('emailSubject');
    const emailBody = t('emailBody');
    const emailHref = `mailto:${organization.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    const contactSchema = await generateContactSchema(locale)
    const breadcrumbSchema = generateBreadcrumbSchema(getBreadcrumbs(locale)['contact'], organization.url, locale)

    const heroFormFields: FormInputDefinition[] = [
        {
            id: 'name',
            label: t('formName'),
        },
        {
            id: 'email',
            label: t('formEmail'),
            type: 'email'
        },
        {
            id: 'company',
            label: t('formCompany'),
            optional: true,
            className: 'col-span-2'
        },
        {
            id: 'projectNeed',
            label: t('formProjectNeed'),
            className: 'col-span-2'
        },
        {
            id: 'message',
            label: t('formMessage'),
            type: 'textarea',
            className: 'col-span-2',
            optional: true,
        },
    ]

    const heroFormEndpoints = [
        '/api/send-contact-form',
        '/api/send-confirmation'
    ]

    return (
    <main>
        <JsonLd data={contactSchema} />
        <JsonLd data={breadcrumbSchema} />
        {/* Hero */}
        <section className="
            px-8 py-24 md:px-16 md:py-32 xl:px-32
            flex flex-col xl:flex-row gap-8 md:gap-16"
        >
            {/* Left div */}
            <div className="w-full min-w-0 xl:w-1/2">
                <Eyebrow text={t('heroBrow')} />
                <h1 className="
                    mb-8
                    text-4xl md:text-5xl xl:text-6xl font-['Source_Serif_4'] leading-tight xl:leading-16
                    opacity-0 animate-fade-in-right-600"
                >
                    {t('h1')}
                </h1>
                <p className="
                    mb-8
                    text-my-md text-secondary
                    opacity-0 animate-fade-in-right-800"
                >
                    {t('heroCopy')}
                </p>
                {/* Bullet points */}
                <div className="
                    w-full mb-8
                    flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6
                    opacity-0 animate-fade-in-right-800"
                >
                    <HeroBulletItem text={t('consultationBullet')} />
                    <HeroBulletItem text={t('quoteBullet')} />
                    <HeroBulletItem text={t('replyBullet')} />
                </div>
                <Image
                    src="/assets/fort-contact-hero.jpg"
                    width={1280}
                    height={720}
                    className="
                        w-full h-56 sm:h-64 lg:h-100
                        object-cover object-center
                        rounded-4xl shadow-img
                        opacity-0 animate-fade-in-up-1200"
                    alt={t('heroImageAlt')}
                    priority
                />
            </div>
            {/* Right div */}
            <div className="
                w-full xl:w-1/2
                flex justify-center items-start"
            >
                <FormTemplate
                    fields={heroFormFields}
                    endpoints={heroFormEndpoints}
                    after={
                        <div className="
                            w-full col-span-2
                            flex flex-col items-center gap-4 md:gap-8"
                        >
                            <div className="w-full h-[1px] bg-gray-300" />
                            <p className="text-my-sm text-secondary text-center">
                                {t('formFootnote2')}
                            </p>
                        </div>
                    }
                />
            </div>
        </section>
        <FortSectionSt
            title={t('h2WhatNext')}
            bgColor="bg-secondary"
        >
            <CenteredP
                text={t('whatNextCopy')}
            />
            <div className="
                w-full mx-auto
                flex flex-col md:flex-row justify-center gap-8 xl:gap-16 flex-wrap"
            >
                <StepCard
                    iconId="search"
                    num={1}
                    title={t('h3Step1')}
                    copy={t('step1Copy')}
                />
                <StepCard
                    iconId="message-bubble"
                    num={2}
                    title={t('h3Step2')}
                    copy={t('step2Copy')}
                />
                <StepCard
                    iconId="file-solid"
                    num={3}
                    title={t('h3Step3')}
                    copy={t('step3Copy')}
                />
            </div>
        </FortSectionSt>
        <FortSectionSt
            bgColor="bg-main"
        >
            {/* Content wrapper */}
            <div className="
                w-full
                flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-24"
            >
                {/* Left div */}
                <div className="w-full min-w-0 lg:flex-1">
                    {/* Eyebrow */}
                    <Eyebrow text={t('directBrow')} />
                    <h1 className="
                        mb-4 md:mb-8
                        text-most-h2 text-main
                        font-['Source_Serif_4'] leading-10 md:leading-16"
                    >
                        {t('h2Direct')}
                    </h1>
                    <p className="
                        mb-4
                        text-my-md text-secondary"
                    >
                        {t('directCopy')}
                    </p>
                </div>
                {/* Right div */}
                <div className="
                    w-full min-w-0 lg:flex-1
                    p-4 sm:p-6 xl:p-8
                    bg-main
                    border border-gray-300 rounded-4xl shadow-img-sm"
                >
                    <div className="
                        mb-4 md:mb-8
                        flex items-center gap-4"
                    >
                        <OrangeWithIcon
                            iconId="people"
                        />
                        <span className="text-my-md text-secondary">
                            {t('directTeam')}
                        </span>
                    </div>
                    <div className="
                        mb-4 md:mb-8
                        flex flex-col gap-4"
                    >
                        <ReachLink
                            iconId="email"
                            href={emailHref}
                            eyebrow={t('emailLabel')}
                            mainText={organization.email}
                        />
                        <ReachLink
                            iconId="whatsapp"
                            href={`https://wa.me/${organization.phone.replace(/\D/g, '')}`}
                            eyebrow={t('whatsappLabel')}
                            mainText={t('conversationCta')}
                        />
                    </div>
                    <div className="w-full h-[1px] mb-4 md:mb-8 bg-gray-300"></div>
                    <div className="
                        mx-auto
                        text-my-sm text-secondary text-center"
                    >
                        {t('directNote')}
                    </div>
                </div>
            </div>
        </FortSectionSt>
        {/* Faq */}
        <FortSectionSt bgColor="bg-secondary">
            {/* Content wrapper */}
            <div className="
                w-full
                flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-24"
            >
                <div className="
                    w-full min-w-0
                    lg:flex-1 lg:w-auto"
                >
                    <Eyebrow text={t('faqBrow')} />
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
                        {Array(4).fill(null).map((_, i) => (
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
                    w-full min-w-0 lg:w-72 xl:w-90 lg:shrink-0
                    p-6 sm:p-8
                    bg-black/5 dark:bg-br-gray-600
                    rounded-4xl"
                >
                    <SimpleH3
                        text={t('h3Question')}
                        className="mb-4 text-3xl leading-10"
                    />
                    <p className="
                        mb-4
                        text-secondary text-my-sm"
                    >
                        {t('questionCopy')}
                    </p>
                    <a
                        href={emailHref}
                        className="
                            w-full
                            py-2 md:hover:pl-4 duration-200
                            flex items-center justify-center gap-2
                            bg-black dark:bg-br-white
                            text-my-md text-br-white dark:text-black
                            rounded-full"
                    >
                        <span>{t('questionCta')}</span>
                        <CustomIcon
                            iconId="arrowR"
                            className="scale-110"
                        />
                    </a>
                </div>
            </div>
        </FortSectionSt>
        <CtaSection />
    </main>
    )
}
