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

type Props = {
    params: Promise<{
        locale: LocaleKey
    }>
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
                w-fit mx-auto mb-16
                text-gray-600 dark:text-gray-300 text-my-lg"
            >
                {t('idealFor')}:
            </p>
            {/* Ideal for container */}
            <div className="
                w-fit mx-auto mb-32
                flex flex-wrap justify-center gap-16"
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
                w-fit mx-auto
                flex items-start gap-16"
            >
                <Image
                    src="/assets/thinking-woman.jpg"
                    width={900}
                    height={900}
                    className="
                        w-120 aspect-square
                        object-cover object-center
                        rounded-4xl shadow-img"
                    alt="Mujer observando una página web"
                />
                <div className="w-120">
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
                            iconId="handshake"
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
            <div className="
                w-full
                grid grid-cols-2 gap-8"
            >
                <ArrowSvgDef />
                <ProcessCard
                    title={t('h3StepOne')}
                    number={1}
                    text={t('stepOneCopy')}
                    place="place-self-end"
                />
                <ProcessArrow />
                <ProcessArrow left />
                <ProcessCard
                    title={t('h3StepTwo')}
                    number={2}
                    text={t('stepTwoCopy')}
                    place="place-self-start"
                />
                <ProcessCard
                    title={t('h3StepThree')}
                    number={3}
                    text={t('stepThreeCopy')}
                    place="place-self-end"
                />
                <ProcessArrow />
                <ProcessArrow left />
                <ProcessCard
                    title={t('h3StepFour')}
                    number={4}
                    text={t('stepFourCopy')}
                    place="place-self-start"
                />
                <ProcessCard
                    title={t('h3StepFive')}
                    number={5}
                    text={t('stepFiveCopy')}
                    place="place-self-end"
                />
            </div>
        </FortSectionSt>
        {/* Pricing and packages */}
        <FortSectionSt
            title={t('h2Pricing')}
            bgColor="bg-gray-200 dark:bg-br-gray-800"
        >
            <div className="
                w-fit mx-auto mb-16
                flex gap-8"
            >
                <PackageCard
                    myPackage={myPackages.starter}
                    locale={locale}
                    theme={packageThemes.flat}
                    ctaLabel={t('packageCta')}
                />
                <PackageCard
                    myPackage={myPackages.premium}
                    locale={locale}
                    theme={packageThemes.orangeBold}
                    ctaLabel={t('packageCta')}
                />
            </div>
            <h3 className="
                w-fit mx-auto mb-8
                text-my-lg text-gray-title text-center font-semibold"
            >
                {t('h3NeedMore')}
            </h3>
            <p className="
                w-2/3 mx-auto mb-8
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