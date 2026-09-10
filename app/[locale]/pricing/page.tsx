import FortSectionSt from "@/components/FortSectionSt";
import StepCard from "@/components/ui-reusables/StepCard";
import { myPackages, packageThemes } from "@/data/fortales/packages";
import { LocaleKey } from "@/lib/types/localeKey";
import PackageLarge from "./components/PackageLarge";
import SimpleH3 from "@/components/SimpleH3";
import AddonCard from "./components/AddonCard";
import { addOns } from "@/data/fortales/addons";
import FortSectionCta from "@/components/cta-section/FortSectionCta";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{
        locale: LocaleKey
    }>
}

export default async function Pricing({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations('FortPricing')

    return (
    <main className="pt-35 bg-br-white dark:bg-br-black">
        <FortSectionSt
            bgColor="bg-br-white dark:bg-br-black"
        >
            <h1 className="mx-auto mb-16 text-center text-5xl text-main font-['Source_Serif_4']">
                {t('h1')}
            </h1>
            <div className="
                w-fit mx-auto
                flex gap-16"
            >
                <StepCard
                    iconId="box-iso"
                    num={1}
                    title={t('h2StepOne')}
                    copy={t('stepOneCopy')}
                />
                <StepCard
                    iconId="pencil-ruler"
                    num={2}
                    title={t('h2StepTwo')}
                    copy={t('stepTwoCopy')}
                    iconCn="scale-90"
                />
                <StepCard
                    iconId="file-solid"
                    num={3}
                    title={t('h2StepThree')}
                    copy={t('stepThreeCopy')}
                    iconCn="scale-80"
                />
            </div>
        </FortSectionSt>
        <FortSectionSt
            bgColor="bg-gray-200 dark:bg-br-gray-800"
        >
            <div className="
                w-full
                flex"
            >
                <PackageLarge
                    myPackage={myPackages.starter}
                    locale={locale}
                    theme={packageThemes.flat}
                    ctaLabel={t('packageCta')}
                />
                <PackageLarge
                    myPackage={myPackages.premium}
                    locale={locale}
                    theme={packageThemes.orangeLarge}
                    isLast
                    ctaLabel={t('packageCta')}
                />
            </div>
        </FortSectionSt>
        <FortSectionSt
            title={t('h2Customize')}
            bgColor="bg-br-white dark:bg-br-black"
        >
            <p className="
                w-2/3 mx-auto mb-16
                text-my-md text-secondary text-center leading-8"
            >
                {t('customizeCopy')}
            </p>
            <SimpleH3
                text={t('h3AddOns')}
                className="text-4xl mb-16"
            />
            <div className="
                w-full mb-16
                grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
                {addOns.map((el, index) => (
                    <AddonCard
                        key={index}
                        item={el}
                        locale={locale}
                    />
                ))}
            </div>
            <h3 className="
                mx-auto mb-4
                text-my-lg text-gray-title text-center font-semibold">
                {t('h3CustomAddOns')}
            </h3>
            <p className="
                w-2/3 mx-auto
                text-my-md text-secondary text-center leading-8"
            >
                {t('customAddOnsCopy')}
            </p>
        </FortSectionSt>
        <FortSectionCta bgColor="bg-secondary" />
    </main>
    )
}