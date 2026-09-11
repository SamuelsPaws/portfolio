import CustomIcon from "@/components/CustomIcon";
import SectionSt from "@/components/SectionSt";
import { availableLocales, localeCodesArray } from "@/data/locales";
import portfolioSam from "@/data/portfolioSam";
import { LocaleKey } from "@/lib/types/localeKey";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const BASE_URL = portfolioSam.url;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: LocaleKey }>
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "Metadata.About",
    });

    const canonical = `${BASE_URL}/${locale}/about`;

    return {
        metadataBase: new URL(BASE_URL),

        title: t("title"),
        description: t("description"),
        
        keywords: t.raw("keywords"),
        applicationName: portfolioSam.name,
        authors: [
            {
                name: portfolioSam.author,
            },
        ],
        creator: portfolioSam.author,
        publisher: portfolioSam.author,
        alternates: {
            canonical,
            languages: Object.fromEntries(localeCodesArray.map(el => [el[0], `${BASE_URL}/${el[1]}/about`])),
        },

        openGraph: {
            title: t("ogTitle"),
            description: t("ogDescription"),
            url: canonical,
            siteName: portfolioSam.name,
            locale: availableLocales[locale],
            type: "website",
            images: [
                {
                    url: portfolioSam.image,
                    width: 1200,
                    height: 630,
                    alt: portfolioSam.name,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: t("twitterTitle"),
            description: t("twitterDescription"),
            images: [portfolioSam.image],
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

export default function About() {
    const t = useTranslations('AboutPage')

    return (
    <main className="header-padding">
        <section className="
            px-8 pt-8 pb-16
            md:px-16 md:py-24
            bg-br-white dark:bg-br-black"
        >
            <h1 className="
                mb-8 md:mb-24
                text-3xl md:text-6xl
                text-black dark:text-br-white font-semibold"
            >
                {t('h1')}
            </h1>
            <div className="flex gap-8 flex-wrap">
                {/* Left div with image 1/2 */}
                <div className="
                    w-full
                    lg:w-100 lg:min-w-100
                    aspect-square relative
                    rounded-4xl overflow-hidden shadow-lg"
                >
                    <Image
                        src="/assets/headshot.JPG"
                        fill
                        sizes="100%"
                        className="w-full object-cover object-[50%_18%]"
                        priority
                        alt="Photo of Samuel"
                    />
                </div>
                {/* Right div, general container 2/2 */}
                <div className="flex-1 flex justify-center">
                    {/* Div with vertical content */}
                    <div className="
                        w-full
                        lg:max-w-200 lg:min-w-[620px] lg:h-full
                        flex flex-col"
                    >
                        <h2 className="
                            mb-4 lg:mb-4
                            text-2xl lg:text-3xl
                            text-black dark:text-br-white font-semibold"
                        >
                            Samuel Baquero, {t('role')}
                        </h2>
                        {/* Tags */}
                        <div className="
                            mb-4 lg:mb-12
                            flex
                            flex-col gap-0
                            lg:flex-row lg:gap-8"
                        >
                            <span className="
                                h-8
                                flex items-center
                                text-green-700 dark:text-green-600
                                text-md lg:text-xl"
                            >
                                <CustomIcon
                                    iconId="location"
                                    className="mr-2"
                                />
                                Quito, Ecuador
                            </span>
                            <span className="
                                h-8
                                flex items-center
                                text-green-700 dark:text-green-600
                                text-md lg:text-xl"
                            >
                                <CustomIcon
                                    iconId="check"
                                    className="mr-2"
                                />
                                {t('statusTag-1')}
                            </span>
                        </div>
                        <p className="
                            text-my-lg
                            text-gray-600 dark:text-gray-300
                            text-justify leading-8 lg:leading-8"
                        >
                            {t('overview')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <SectionSt
            title={t('howIThink')}
            bgColor="bg-gray-300 dark:bg-br-gray-600"
        >
            <p className="
                max-w-150 mb-8 lg:mb-16
                text-md xl:text-xl text-black dark:text-gray-200 text-justify leading-8"
            >
                {t('howIThinkOverview')}
            </p>
            <div className="
                grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
                <div className="
                    lg:h-45 p-4 relative
                    bg-yellow-100
                    border-2 border-black rounded-2xl shadow-[4px_4px_0_#bb0]"
                >
                    <h3 className="mb-4 text-lg lg:text-xl font-semibold">
                        {t('structureFirst')}
                    </h3>
                    <p className="text-md lg:text-lg">
                        {t('structureFirstText')}
                    </p>
                    <div className="absolute top-3 right-4 text-md">
                        <i className="fa fa-university" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="
                    lg:h-45 p-4 relative
                    bg-pink-100
                    border-2 border-black rounded-2xl shadow-[4px_4px_0_#d8b]"
                >
                    <h3 className="mb-4 text-lg lg:text-xl font-semibold">
                        {t('understandDeeply')}
                    </h3>
                    <p className="text-md lg:text-lg">
                        {t('understandDeeplyText')}
                    </p>
                    <div className="absolute top-3 right-4 text-lg">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="
                    lg:h-45 p-4 relative
                    bg-green-100
                    border-2 border-black rounded-2xl shadow-[4px_4px_0_#6ca]"
                >
                    <h3 className="mb-4 text-lg lg:text-xl font-semibold">
                        {t('debugging')}
                    </h3>
                    <p className="text-md lg:text-lg">
                        {t('debuggingText')}
                    </p>
                    <div className="absolute top-3 right-4 text-xl">
                        <i className="fa fa-bug" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="
                    lg:h-45 p-4 relative
                    bg-sky-100
                    border-2 border-black rounded-2xl shadow-[4px_4px_0_#3ac]"
                >
                    <h3 className="mb-4 text-lg lg:text-xl font-semibold">
                        {t('usable')}
                    </h3>
                    <p className="text-md lg:text-lg">
                        {t('usableText')}
                    </p>
                    <div className="absolute top-3 right-4 text-xl">
                        <i className="fa fa-paint-brush" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </SectionSt>
        <SectionSt
            title={t('currentFocus')}
            bgColor="bg-br-white dark:bg-br-black"
        >
            <p className="
                max-w-150 mb-8 lg:mb-16
                text-md xl:text-xl text-black dark:text-gray-300 text-justify leading-8"
            >
                {t('currentFocusText')}
            </p>
            <div className="
                w-full lg:w-fit mx-auto
                flex flex-col gap-8"
            >
                <div className="
                    w-full lg:w-150
                    p-4 lg:p-8
                    flex items-center
                    text-md lg:text-xl
                    text-black dark:text-br-white
                    border-2 border-black dark:border-br-white rounded-2xl"
                >
                    <span>
                        <CustomIcon
                            iconId="check"
                            className="text-green-600 dark:text-green-400 mr-2"
                        />
                        {t('focusedOnFreelance')}
                    </span>
                </div>
                <div className="
                    w-full lg:w-150
                    p-4 lg:p-8
                    flex items-center
                    text-md lg:text-xl
                    text-black dark:text-br-white
                    border-2 border-black dark:border-br-white rounded-2xl"
                >
                    <span>
                        <CustomIcon
                            iconId="check"
                            className="text-green-600 dark:text-green-400 mr-2"
                        />
                        {t('reliableIndependent')}
                    </span>
                </div>
            </div>
        </SectionSt>
    </main>
    )
}