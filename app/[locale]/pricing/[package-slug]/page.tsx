import FortSectionSt from "@/components/FortSectionSt"
import SimpleH2 from "@/components/SimpleH2"
import { myPackages } from "@/data/fortales/packages"
import FeatureLi from "./components/FeatureLi"
import { addOns } from "@/data/fortales/addons"
import AddOnLi from "./components/addon-li/AddOnLi"
import { LocaleKey } from "@/lib/types/localeKey"
import MoreAddOnsArea from "./components/MoreAddOnsArea"
import Summary from "./components/Summary"
import FortSectionCta from "@/components/cta-section/FortSectionCta"
import StepCard from "@/components/ui-reusables/StepCard"
import { getTranslations } from "next-intl/server"

const themes = {
}

type Props = {
    params: Promise<{
        'package-slug': 'starter' | 'premium',
        locale: LocaleKey
    }>
}

export default async function ({ params }: Props) {
    const resolved = await params
    const slug = resolved["package-slug"]
    const locale = resolved.locale
    const t = await getTranslations('FortPackageSlug')

    const myPackage = myPackages[slug]

    return (
    <main>
        <section className="
            px-8 pt-24 pb-16
            md:px-32 md:py-32
            bg-main"
        >
            <h1 className="
                mb-16
                text-4xl md:text-7xl text-main font-['Source_Serif_4']"
            >
                {myPackage.title[locale]}
                <span className="text-2xl md:text-4xl text-secondary italic">
                    {` / ${t('descriptor')}`}
                </span>
            </h1>
            <p className="
                w-full md:w-1/2
                text-my-md text-secondary"
            >
                {t('copy')}
            </p>
        </section>
        <section className="
            flex flex-col md:flex-row items-stretch
            border-y border-y-gray-300"
        >
            {/* Left div */}
            <div className="
                w-full md:w-[45%]
                px-8 py-16
                md:pl-32 md:pr-16 md:py-32
                bg-main
                md:border-r border-r-gray-300"
            >
                <SimpleH2
                    text={t('h2Included')}
                    className="mb-8 text-most-h2"
                />
                <ul className="
                    sticky top-[calc(var(--spacing-header-height)+2rem)]
                    flex flex-col gap-4"
                >
                    {myPackage.features.map(el => el.text[locale]).map((el, index) => (
                        <FeatureLi
                            key={index}
                            text={el}
                        />
                    ))}
                </ul>
            </div>
            {/* Right div */}
            <div className="
                w-full
                md:flex-1 md:w-auto
                px-8 py-16
                md:pl-16 md:pr-32 md:py-32
                bg-gray-100 dark:bg-br-gray-800"
            >
                <SimpleH2
                    text={t('h2Customize')}
                    className="mb-8 text-most-h2"
                />
                <p className="mb-8 text-my-md text-gray-title font-semibold">
                    {t('mostPopularAO')}
                </p>
                <ul className="
                    w-full
                    flex flex-col gap-4"
                >
                    {addOns.slice(0, 6).map((el, index) => (
                        <AddOnLi
                            key={index}
                            addOnData={el}
                            addOnSlug={el.slug}
                            locale={locale}
                        />
                    ))}
                </ul>
                <MoreAddOnsArea
                    addOns={addOns.slice(6)}
                    locale={locale}
                    seeMoreLabel={t('seeMoreAO')}
                    seeLessLabel={t('seeLessAO')}
                />
                <p className="
                    mt-4 md:mt-8 mb-4
                    text-my-md text-secondary"
                >
                    {t('customCopy')}
                </p>
                <textarea
                    name="custom-request"
                    id="custom-request"
                    className="
                        w-full
                        p-4
                        bg-main
                        text-my-md text-secondary
                        border border-gray-300 rounded-md"
                    placeholder={t('customPlaceholder')}
                >
                </textarea>
            </div>
        </section>
        <FortSectionSt
            bgColor="bg-secondary"
        >
            <Summary locale={locale} packageSlug={slug} />
        </FortSectionSt>
        <FortSectionSt
            title={t('h2WhatNext')}
            bgColor="bg-main"
        >
            <div className="
                w-full md:w-fit mx-auto
                flex flex-col md:flex-row gap-8 md:gap-16"
            >
                <StepCard
                    iconId="glass-file"
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
                    iconCn="scale-90"
                />
            </div>
        </FortSectionSt>
        {/* <FortSectionCta bgColor="bg-secondary" /> */}
    </main>
    )
}