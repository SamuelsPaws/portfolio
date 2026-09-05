import { useTranslations } from "next-intl";
import CopyBtn from "./components/CopyBtn";
import EmailBtn from "./components/EmailBtn";
import PhoneBtn from "./components/PhoneBtn";
import portfolioSam from "@/data/portfolioSam";
import { LocaleKey } from "@/lib/types/localeKey";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { availableLocales, localeCodesArray } from "@/data/locales";
import SectionSt from "@/components/SectionSt";

const BASE_URL = portfolioSam.url;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: LocaleKey }>
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "Metadata.Contact",
    });

    const canonical = `${BASE_URL}/${locale}/contact`;

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
            languages: Object.fromEntries(localeCodesArray.map(el => [el[0], `${BASE_URL}/${el[1]}/contact`])),
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

export default function Contact() {
    const t = useTranslations('ContactPage')

    return (
    <main className="header-padding">
        <SectionSt
            title={t('h1')}
            bgColor="bg-br-white dark:bg-br-black"
        >
            <p className="
                mb-8 text-lg
                md:mb-16 md:text-xl
                text-black dark:text-gray-300"
            >
                {t('overview')}
            </p>
            <div className="
                w-fit mx-auto mb-8 lg:mb-16
                flex items-center gap-4
                text-xl lg:text-3xl
                text-black dark:text-gray-300"
            >
                <span>
                    samsantbaq@gmail.com
                </span>
                <CopyBtn text="samsantbaq@gmail.com" />
            </div>
            <EmailBtn />
        </SectionSt>
        <SectionSt
            title={t('contactPhone')}
            bgColor="bg-gray-300 dark:bg-br-gray-600"
        >
            <div className="
                w-fit mx-auto mb-16
                flex items-center gap-4
                text-2xl lg:text-3xl
                text-black dark:text-gray-300"
            >
                <span>
                    098 489 2528
                </span>
                <CopyBtn text="+593984892528" />
            </div>
            <PhoneBtn />
        </SectionSt>
    </main>
    )
}