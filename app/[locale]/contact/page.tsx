import { useTranslations } from "next-intl";
import CopyBtn from "./components/CopyBtn";
import EmailBtn from "./components/EmailBtn";
import PhoneBtn from "./components/PhoneBtn";
import portfolioSam from "@/data/portfolioSam";
import { LocaleKey } from "@/lib/types/localeKey";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { availableLocales, localeCodesArray } from "@/data/locales";

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
            <section className="
                px-8 py-16
                lg:px-32 lg:py-32
                bg-br-white"
            >
                <h1 className="
                    mb-4 text-4xl
                    lg:mb-8 lg:text-6xl font-semibold"
                >
                    {t('h1')}
                </h1>
                <p className="
                    mb-8 text-lg
                    lg:mb-16 lg:text-xl"
                >
                    {t('overview')}
                </p>
                <div className="
                    w-fit mx-auto mb-8 lg:mb-16
                    flex items-center gap-4
                    text-xl lg:text-3xl"
                >
                    <span>
                        samsantbaq@gmail.com
                    </span>
                    <CopyBtn text="samsantbaq@gmail.com" />
                </div>
                <EmailBtn />
            </section>
            <section className="
                px-8 py-16
                lg:px-32 lg:py-32
                bg-gray-300"
            >
                <h2 className="
                    mb-8 text-4xl
                    lg:mb-16 lg:text-6xl
                    text-center font-semibold"
                >
                    {t('contactPhone')}
                </h2>
                <div className="
                    w-fit mx-auto mb-16
                    flex items-center gap-4
                    text-2xl lg:text-3xl"
                >
                    <span>
                        098 489 2528
                    </span>
                    <CopyBtn text="+593984892528" />
                </div>
                <PhoneBtn />
            </section>
        </main>
    )
}