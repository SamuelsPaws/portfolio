import clsx from "clsx"
import FortSectionSt from "../FortSectionSt"
import SimpleH2 from "../SimpleH2"
import CtaTrustItem from "./subcomponents/CtaTrustItem"
import FormInput from "./subcomponents/FormInput"
import CustomIcon from "../CustomIcon"
import CenterH2 from "../CenterH2"
import { useTranslations } from "next-intl"

interface Props {
    bgColor: string;
}

const FortSectionCta = ({ bgColor }: Props) => {
    const t = useTranslations('FortHome')

    return (
    <FortSectionSt
        bgColor={bgColor}
    >
        {/* Container with 2 columns */}
        <div className="
            w-full mx-auto mb-32
            flex gap-16"
        >
            {/* Left column */}
            <div className="
                w-1/2
                flex flex-col justify-between"
            >
                {/* Wrapper for between */}
                <div className="w-full">
                    <SimpleH2
                        text={t('h2Cta')}
                        className="mb-8 text-5xl text-left"
                    />
                    <p className="mb-8 text-my-md text-secondary">
                        {t('ctaCopy')}
                    </p>
                    <ul className="flex flex-col gap-8">
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
            <div className="w-1/2 flex justify-center">
                {/* Form */}
                <form
                    action=""
                    className="
                        w-[90%]
                        p-8
                        grid grid-cols-2 items-end gap-8
                        bg-main
                        border border-gray-300 rounded-4xl shadow-img-sm"
                >
                    <FormInput
                        label={t('formName')}
                        inputId="customerName"
                        optionalLabel={t('optional')}
                    />
                    <FormInput
                        label={t('formEmail')}
                        inputId="customerEmail"
                        type="email"
                        optionalLabel={t('optional')}
                    />
                    <FormInput
                        label={t('formCompany')}
                        inputId="customerCompany"
                        className="col-span-2"
                        optional
                        optionalLabel={t('optional')}
                    />
                    <FormInput
                        label={t('formNeed')}
                        inputId="projectNeed"
                        className="col-span-2"
                        type="textarea"
                        optionalLabel={t('optional')}
                    />
                    <FormInput
                        label={t('formBudget')}
                        inputId="budget"
                        optional
                        optionalLabel={t('optional')}
                    />
                    <FormInput
                        label={t('formTimeline')}
                        inputId="timeline"
                        optional
                        optionalLabel={t('optional')}
                    />
                    <button
                        type="submit"
                        className={clsx(
                            "w-full col-span-2 group",
                            "py-4",
                            "flex justify-center items-center gap-3",
                            "bg-black dark:bg-br-white",
                            "text-my-md text-br-white dark:text-black",
                            "rounded-full"
                        )}
                    >
                        <span className="md:group-hover:pl-4 duration-200">
                            {t('formSubmit')}
                        </span>
                        <CustomIcon
                            iconId="arrowR"
                            className="scale-110"
                        />
                    </button>
                </form>
            </div>
        </div>
        <CenterH2
            text={t('preferWhatsapp')}
        />
        <a
            className="
                w-fit mx-auto
                px-8 py-4
                flex items-center gap-4
                bg-whatsapp-500
                text-my-xl text-br-white
                rounded-full
                md:hover:scale-105 duration-400 ease-out"
        >
            <span>{t('whatsappCta')}</span>
            <CustomIcon
                iconId="whatsapp"
            />
        </a>
    </FortSectionSt>
    )
}

export default FortSectionCta