import FormTemplate, { type FormInputDefinition } from "@/components/form-template/FormTemplate"
import { useTranslations } from "next-intl"

const CtaForm = () => {
    const t = useTranslations('Reusable')

    const fields: FormInputDefinition[] = [
        {
            id: 'name',
            label: t('formName'),
        },
        {
            id: 'email',
            label: t('formEmail'),
            type: 'email'
        },
        {
            id: 'company',
            label: t('formCompany'),
            optional: true,
            className: 'col-span-2'
        },
        {
            id: 'projectNeed',
            label: t('formProjectNeed'),
            type: 'textarea',
            className: 'col-span-2'
        },
        {
            id: 'budget',
            label: t('formBudget'),
            optional: true
        },
        {
            id: 'timeline',
            label: t('formTimeline'),
            optional: true
        },
    ]
    
    const endpoints = [
        '/api/send-cta-form',
        '/api/send-confirmation'
    ]

    return (
    <FormTemplate
        fields={fields}
        endpoints={endpoints}
    />
    )
}

export default CtaForm
