import FormTemplate, { type FormInputDefinition } from "@/components/form-template/FormTemplate";
import FortSectionSt from "@/components/FortSectionSt";
import { useTranslations } from "next-intl";

export default function DiscoveryForm() {
    const t = useTranslations('DiscoveryForm')

    const fields: FormInputDefinition[] = [
        {
            id: 'businessName',
            label: t('businessOrPersonName'),
            className: 'col-span-2',
        },
        {
            id: 'businessDescription',
            label: t('describeBusiness'),
            type: 'textarea',
            className: 'col-span-2',
        },
        {
            id: 'targetAudience',
            label: t('targetAudience'),
            type: 'textarea',
            optional: true,
            className: 'col-span-2',
        },
        {
            id: 'brandTone',
            label: t('brandTone'),
            type: 'checkbox',
            options: [
                { value: 'professional', label: t('toneProfessional') },
                { value: 'friendly', label: t('toneFriendly') },
                { value: 'premium', label: t('tonePremium') },
                { value: 'bold', label: t('toneBold') },
                { value: 'minimal', label: t('toneMinimal') },
                { value: 'playful', label: t('tonePlayful') },
            ],
            optional: true,
            className: 'col-span-2',
        },
        {
            id: 'brandColors',
            label: t('brandColors'),
            optional: true,
            className: 'col-span-2',
        },
        {
            id: 'hasAssets',
            label: t('hasAssets'),
            type: 'checkbox',
            options: [
                { value: 'photography', label: t('assetPhotography') },
                { value: 'videos', label: t('assetVideos') },
                { value: 'logo', label: t('assetLogo') },
                { value: 'design-guide', label: t('assetDesignGuide') },
            ],
            optional: true,
            className: 'col-span-2',
        },
        {
            id: 'hasHosting',
            label: t('hasHosting'),
            type: 'radio',
            options: [
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') },
            ],
            className: 'col-span-2 md:col-span-1',
        },
        {
            id: 'hasDomain',
            label: t('hasDomain'),
            type: 'radio',
            options: [
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') },
            ],
            className: 'col-span-2 md:col-span-1',
        },
        {
            id: 'mainGoals',
            label: t('mainGoals'),
            type: 'checkbox',
            options: [
                { value: 'credibility', label: t('goalCredibility') },
                { value: 'showcase', label: t('goalShowcase') },
                { value: 'sell-products', label: t('goalSellProducts') },
                { value: 'publish-content', label: t('goalPublishContent') },
                { value: 'generate-inquiries', label: t('goalGenerateInquiries') },
                { value: 'bookings', label: t('goalBookings') },
                { value: 'other', label: t('other') },
            ],
            className: 'col-span-2',
        },
        {
            id: 'contactMethods',
            label: t('contactMethods'),
            type: 'checkbox',
            options: [
                { value: 'whatsapp', label: 'WhatsApp' },
                { value: 'email', label: t('email') },
                { value: 'phone', label: t('phone') },
                { value: 'social-media', label: t('socialMedia') },
            ],
            optional: true,
            className: 'col-span-2',
        },
        {
            id: 'additional',
            label: t('additional'),
            type: 'textarea',
            optional: true,
            className: 'col-span-2',
        },
    ]

    const endpoints = [
        '/api/send-discovery-form'
    ]

    return (
    <main>
        {/* Banner */}
        <section className="
            h-auto md:h-100 xl:h-120
            px-8 pt-24 pb-16
            md:px-16 md:py-32
            xl:px-32 xl:py-32
            flex flex-col md:flex-row items-center gap-16 md:gap-16
            bg-main"
        >
            {/* Left */}
            <div className="
                w-full md:w-1/2
                flex flex-col gap-4 md:gap-8"
            >
                <h1 className="text-4xl md:text-6xl text-main font-['Source_Serif_4'] leading-16">
                    {t('h1')}
                </h1>
                <p className="text-my-md text-secondary">
                    {t('intro')}
                </p>
            </div>
            {/* Right */}
            <div className="
                w-full md:w-1/2
                flex items-center justify-end"
            >
                <img
                    src="/assets/fortales-logo.svg"
                    className="w-16 md:w-25"
                    alt="Logo de Fortales"
                />
                <img
                    src="/assets/fortales-text.svg"
                    className="w-40 md:w-70 -translate-x-0"
                    alt="Logo de Fortales"
                />
            </div>
        </section>
        <FortSectionSt
            bgColor="bg-secondary"
        >
            {/* Wrapper */}
            <div className="
                w-full
                flex justify-center"
            >
                <FormTemplate
                    fields={fields}
                    endpoints={endpoints}
                />
            </div>
        </FortSectionSt>
    </main>
    )
}
