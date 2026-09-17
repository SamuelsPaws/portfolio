import FortSectionSt from "@/components/FortSectionSt"
import CenteredP from "@/components/ui-reusables/CenteredP"
import FortCtaBtn from "@/components/ui-reusables/FortCtaBtn"
import { useTranslations } from "next-intl"
import ContactCtaH2 from "./subcomponents/ContactCtaH2"
import ContactCtaBrow from "./subcomponents/ContactCtaBrow"

const CtaSection = () => {
    const t = useTranslations('FortContact')

    return (
    <FortSectionSt
        bgColor="bg-main"
    >
        <ContactCtaBrow text={t('ctaBrow')} />
        <ContactCtaH2 text={t('h2Cta')} />
        <CenteredP
            halfMargin
            text={t('ctaCopy')}
        />
        <FortCtaBtn
            href=""
            label={t('conversationCta')}
            centered
            external
        />
    </FortSectionSt>
    )
}

export default CtaSection