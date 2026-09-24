'use client'
import FormTemplate, { type FormInputDefinition } from "@/components/form-template/FormTemplate"
import { addOns } from "@/data/fortales/addons"
import { myPackages } from "@/data/fortales/packages"
import { useAddOnsStore } from "@/lib/hooks/addons-state"
import { useTranslations } from "next-intl"

interface Props {
    packageSlug: 'starter' | 'premium';
}

const SummaryForm = ({ packageSlug }: Props) => {
    const t = useTranslations('Reusable')
    const addOnsState = useAddOnsStore((state) => state.addOns)

    const fields: FormInputDefinition[] = [
        {
            id: 'name',
            label: t('formName'),
            className: 'col-span-2',
        },
        {
            id: 'email',
            label: t('formEmail'),
            type: 'email',
            className: 'col-span-2',
        },
        {
            id: 'company',
            label: t('formCompany'),
            optional: true,
            className: 'col-span-2',
        },
        {
            id: 'phone',
            label: t('formPhone'),
            optional: true,
            className: 'col-span-2',
        },
    ]

    const getAdditionalPayload = () => ({
        packageName: myPackages[packageSlug].title.en,
        addOnsSelected: Object.entries(addOnsState)
            .filter(([, state]) => state.enabled)
            .map(([slug, state]) => ({
                slug: slug as (typeof addOns)[number]['slug'],
                quantity: 'quantity' in state ? state.quantity : null,
            })),
    })

    return (
    <FormTemplate
        fields={fields}
        endpoints={[
            '/api/send-package-request',
            '/api/send-confirmation',
        ]}
        getAdditionalPayload={getAdditionalPayload}
    />
    )
}

export default SummaryForm
