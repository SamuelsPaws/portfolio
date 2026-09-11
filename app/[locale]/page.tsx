import PackageCard from "@/components/package-card/PackageCard";
import Hero from "./components/Hero";
import FortSectionSt from "@/components/FortSectionSt";
import IdealForCard from "./components/IdealForCard";
import CenterH2 from "@/components/CenterH2";
import Image from "next/image";
import WhyCareItem from "./components/WhyCareItem";
import ProcessCard from "./components/ProcessCard";
import ProcessArrow from "./components/ProcessArrow";
import { LocaleKey } from "@/lib/types/localeKey";
import { myPackages, packageThemes } from "@/data/fortales/packages";
import FortSectionCta from "@/components/cta-section/FortSectionCta";
import { getTranslations } from "next-intl/server";
import ArrowSvgDef from "./components/ArrowSvgDef";
import FortCtaBtn from "@/components/ui-reusables/FortCtaBtn";
import organization from "@/data/fortales/organization";
import { Metadata } from "next";
import { availableLocales, localeCodesArray } from "@/data/locales";

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
        namespace: "Metadata.FortHome",
    });

    const canonical = `${BASE_URL}/${locale}`;

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
            languages: Object.fromEntries(localeCodesArray.map(el => [el[0], `${BASE_URL}/${el[1]}`])),
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

export default async function FortalesHome({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations('FortHome')

    return (
    <main>
        <Hero />
        {/* Who it is for */}
        <FortSectionSt
            title={t('h2WhoFor')}
            bgColor="bg-gray-200 dark:bg-br-gray-800"
        >
            <p className="
                w-fit mx-auto
                mb-8 md:mb-16
                text-gray-600 dark:text-gray-300 text-my-lg"
            >
                {t('idealFor')}:
            </p>
            {/* Ideal for container */}
            <div className="
                w-fit mx-auto
                mb-16 md:mb-32
                flex flex-col md:flex-row flex-wrap justify-center gap-16"
            >
                <IdealForCard
                    imgSrc="/assets/undraw-upgrade.svg"
                    alt="A small business"
                    title={t('h3SmallBiz')}
                    description={t('smallBizCopy')}
                />
                <IdealForCard
                    imgSrc="/assets/undraw-computer.svg"
                    alt="A small business"
                    title={t('h3EstablishedBiz')}
                    description={t('establishedBizCopy')}
                />
                <IdealForCard
                    imgSrc="/assets/undraw-idea.svg"
                    alt="A small business"
                    title={t('h3LaunchNew')}
                    description={t('launchNewCopy')}
                />
                <IdealForCard
                    imgSrc="/assets/undraw-growth.svg"
                    alt="A small business"
                    title={t('h3Results')}
                    description={t('resultsCopy')}
                />
            </div>
            <CenterH2
                text={t('h2WhyCare')}
            />
            <div className="
                w-full md:w-fit mx-auto
                flex flex-col md:flex-row items-start gap-16"
            >
                <Image
                    src="/assets/thinking-woman.jpg"
                    width={900}
                    height={900}
                    className="
                        w-full md:w-120 aspect-square
                        object-cover object-center
                        rounded-4xl shadow-img
                        scroll-reveal-right"
                    alt="Mujer observando una página web"
                />
                <div className="w-full md:w-120">
                    <h3 className="
                        mx-auto mb-8
                        text-my-xl text-gray-title text-center font-semibold"
                    >
                        {t('h3WhyCare')}
                    </h3>
                    <p className="
                        mx-auto mb-8
                        text-my-md text-secondary text-center"
                    >
                        {t('whyCareCopy')}
                    </p>
                    <div className="
                        w-full
                        flex flex-col items-start gap-4"
                    >
                        <WhyCareItem
                            text={t('credibilityCopy')}
                            iconId="handshake-heart"
                        />
                        <WhyCareItem
                            text={t('visibilityCopy')}
                            iconId="search"
                        />
                        <WhyCareItem
                            text={t('performanceCopy')}
                            iconId="speed"
                        />
                        <WhyCareItem
                            text={t('growthCopy')}
                            iconId="cart-checkout"
                        />
                    </div>
                </div>
            </div>
        </FortSectionSt>
        {/* Benefits */}
        {/* <FortSectionSt
            title="How we convert visitors into bookings effectively"
            bgColor="bg-br-white dark:bg-br-black"
        >

        </FortSectionSt> */}
        {/* Demo/portfolio PENDING */}
        {/* Testimonials PENDING */}
        {/* Process */}
        <FortSectionSt
            title={t('h2Process')}
            bgColor="bg-br-white dark:bg-br-black"
        >
            <ArrowSvgDef />
            <div className="
                w-full
                grid grid-cols-[0.5fr_1fr_0.5fr] md:grid-cols-2 gap-x-4 gap-y-8 md:gap-8"
            >
                <ProcessCard
                    title={t('h3StepOne')}
                    number={1}
                    text={t('stepOneCopy')}
                    place="col-span-2 md:place-self-end md:col-span-1"
                />
                <ProcessArrow />
                <ProcessArrow left />
                <ProcessCard
                    title={t('h3StepTwo')}
                    number={2}
                    text={t('stepTwoCopy')}
                    place="col-span-2 md:place-self-start md:col-span-1"
                />
                <ProcessCard
                    title={t('h3StepThree')}
                    number={3}
                    text={t('stepThreeCopy')}
                    place="col-span-2 md:place-self-end md:col-span-1"
                />
                <ProcessArrow />
                <ProcessArrow left />
                <ProcessCard
                    title={t('h3StepFour')}
                    number={4}
                    text={t('stepFourCopy')}
                    place="col-span-2 md:place-self-start md:col-span-1"
                />
                <ProcessCard
                    title={t('h3StepFive')}
                    number={5}
                    text={t('stepFiveCopy')}
                    place="col-span-2 md:place-self-end md:col-span-1"
                />
            </div>
        </FortSectionSt>
        {/* Pricing and packages */}
        <FortSectionSt
            title={t('h2Pricing')}
            bgColor="bg-gray-200 dark:bg-br-gray-800"
        >
            <div className="
                w-full md:w-fit mx-auto mb-16
                flex flex-col md:flex-row gap-8"
            >
                <PackageCard
                    myPackage={myPackages.starter}
                    locale={locale}
                    theme={packageThemes.flat}
                    ctaLabel={t('packageCta')}
                    everythingInLabel={t('everythingIn')}
                />
                <PackageCard
                    myPackage={myPackages.premium}
                    locale={locale}
                    theme={packageThemes.orangeBold}
                    ctaLabel={t('packageCta')}
                    everythingInLabel={t('everythingIn')}
                />
            </div>
            <h3 className="
                w-fit mx-auto mb-8
                text-my-lg text-gray-title text-center font-semibold"
            >
                {t('h3NeedMore')}
            </h3>
            <p className="
                w-full md:w-2/3 mx-auto mb-8
                text-secondary text-my-md text-center"
            >
                {t('needMoreCopy')}
            </p>
            <FortCtaBtn
                href="/pricing"
                label={t('pricingCta')}
                centered
            />
        </FortSectionSt>
        {/* CTA */}
        <FortSectionCta bgColor="bg-main" />
    </main>
    )
}