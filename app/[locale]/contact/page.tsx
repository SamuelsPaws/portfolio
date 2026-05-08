import { useTranslations } from "next-intl";
import CopyBtn from "./components/CopyBtn";
import EmailBtn from "./components/EmailBtn";
import PhoneBtn from "./components/PhoneBtn";

export default function Contact() {
    const t = useTranslations('ContactPage')

    return (
        <main className="header-padding">
            <section className="
                px-8 py-16
                lg:px-32 lg:py-32
                bg-mywhite"
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
                        +593 98 489 2528
                    </span>
                    <CopyBtn text="+593984892528" />
                </div>
                <PhoneBtn />
            </section>
        </main>
    )
}