import CustomIcon from "@/components/CustomIcon";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
    const t = useTranslations('AboutPage')

    return (
    <main className="header-padding">
        <section className="
            px-8 pt-8 pb-16
            lg:px-32 lg:py-24
            bg-br-white"
        >
            <h1 className="
                mb-8 lg:mb-16
                text-3xl lg:text-5xl font-semibold"
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
                        src="/assets/about-photo.webp"
                        fill
                        sizes="100%"
                        className="w-full object-cover object-top"
                        priority
                        alt="Picture of Samuel"
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
                        <h3 className="
                            mb-4 lg:mb-4
                            text-2xl lg:text-3xl font-semibold"
                        >
                            Samuel Baquero, {t('role')}
                        </h3>
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
                                text-green-700 text-md lg:text-xl"
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
                                text-green-700 text-md lg:text-xl"
                            >
                                <CustomIcon
                                    iconId="check"
                                    className="mr-2"
                                />
                                {t('statusTag-1')}
                            </span>
                        </div>
                        <p className="text-my-lg text-gray-600 text-justify leading-8 lg:leading-8">
                            {t('overview')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="
            px-8 py-16
            lg:px-32 lg:py-16
            bg-gray-300"
        >
            <h2 className="
                mb-8 lg:mb-16
                text-3xl lg:text-5xl font-semibold"
            >
                {t('howIThink')}
            </h2>
            <p className="
                max-w-150 mb-8 lg:mb-16
                text-md xl:text-xl text-black text-justify leading-8"
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
        </section>
        <section className="
            px-8 py-16
            md:px-32 md:py-24 bg-mywhite
            border-b border-b-gray-600"
        >
            <h2 className="
                mb-8 md:mb-16
                text-3xl lg:text-5xl font-semibold"
            >
                {t('currentFocus')}
            </h2>
            <p className="
                max-w-150 mb-8 lg:mb-16
                text-md xl:text-xl text-black text-justify leading-8"
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
                    border-2 border-black rounded-2xl"
                >
                    <span>
                        <CustomIcon
                            iconId="check"
                            className="text-green-600 mr-2"
                        />
                        {t('focusedOnFreelance')}
                    </span>
                </div>
                <div className="
                    w-full lg:w-150
                    p-4 lg:p-8
                    flex items-center
                    text-md lg:text-xl
                    border-2 border-black rounded-2xl"
                >
                    <span>
                        <CustomIcon
                            iconId="check"
                            className="text-green-600 mr-2"
                        />
                        {t('reliableIndependent')}
                    </span>
                </div>
            </div>
        </section>
    </main>
    )
}