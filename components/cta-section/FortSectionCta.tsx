import clsx from "clsx"
import FortSectionSt from "../FortSectionSt"
import SimpleH2 from "../SimpleH2"
import CtaTrustItem from "./subcomponents/CtaTrustItem"
import FormInput from "./subcomponents/FormInput"
import CustomIcon from "../CustomIcon"
import CenterH2 from "../CenterH2"
import { useTranslations } from "next-intl"
import WaBtn from "./subcomponents/WaBtn"
import CtaForm from "./subcomponents/CtaForm"

interface Props {
    bgColor: string;
}

const FortSectionCta = ({ bgColor }: Props) => {
    const t = useTranslations('FortHome')
    const tR = useTranslations('Reusable')

    return (
    <FortSectionSt
        bgColor={bgColor}
    >
        {/* Container with 2 columns */}
        <div className="
            w-full mx-auto mb-16 md:mb-32
            flex flex-col xl:flex-row gap-8 md:gap-16"
        >
            {/* Left column */}
            <div className="
                w-full xl:w-1/2
                flex flex-col justify-between gap-8"
            >
                {/* Wrapper for between */}
                <div className="w-full">
                    <SimpleH2
                        text={t('h2Cta')}
                        className="mb-8 text-most-h2 text-left"
                    />
                    <p className="mb-8 text-my-md text-secondary">
                        {t('ctaCopy')}
                    </p>
                    <ul className="flex flex-col gap-4 md:gap-8">
                        <CtaTrustItem
                            text={t('ctaConsultation')}
                        />
                        <CtaTrustItem
                            text={t('ctaQuote')}
                        />
                        <CtaTrustItem
                            text={t('ctaResponse')}
                        />
                    </ul>
                </div>
                {/* Note */}
                <p className="
                    w-3/4 mx-auto
                    text-myf-md text-secondary text-center"
                >
                    {t('ctaFootnote')}
                </p>
            </div>
            {/* Right column */}
            <div className="w-full xl:w-1/2 flex justify-center">
                <CtaForm />
            </div>
        </div>
        <CenterH2
            text={t('preferWhatsapp')}
        />
        <WaBtn 
            label={t('whatsappCta')}
            prefill={tR('waEncodedFill')}
        />
    </FortSectionSt>
    )
}

export default FortSectionCta