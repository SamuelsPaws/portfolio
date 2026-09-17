'use client'
import { useLocale, useTranslations } from "next-intl"
import CustomIcon from "@/components/CustomIcon"
import clsx from "clsx"
import { ChangeEvent, useState } from "react"
import SubmissionModal from "./subcomponents/SubmissionModal"
import FormInput from "./subcomponents/FormInput"
import { fetchEndpoint } from "@/lib/utils/fetch"

type FormState =
    | 'idle'
    | 'processing'
    | 'success'
    | 'error';

export type FormFieldType = 'text' | 'email' | 'textarea' | 'number'

interface InputDefinition {
    id: string;
    label: string;
    type?: FormFieldType;
    optional?: boolean;
    className?: string;
}

interface Props {
    before?: React.ReactNode;
    after?: React.ReactNode;
    fields: InputDefinition[];
    endpoints: string[];
}

function FormTemplate({
    before,
    after,
    fields,
    endpoints
}: Props) {
    const locale = useLocale()
    const [formData, setFormData] = useState<{[K in typeof fields[number]['id']]: string}>(
        Object.fromEntries(
            fields.map(el => [el.id, ''])
        )
    )
    const [formState, setFormState] = useState<FormState>('idle')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalState, setModalState] = useState<'success' | 'error'>('success')
    const t = useTranslations('Reusable')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSuccess = () => {
        setFormState('success')
        setModalState('success')
        setIsModalOpen(true)
        setFormData(Object.fromEntries(
            fields.map(el => [el.id, ''])
        ))
    }

    const handleError = () => {
        setFormState('error')
        setModalState('error')
        setIsModalOpen(true)
        setFormData(Object.fromEntries(
            fields.map(el => [el.id, ''])
        ))
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        // handle required fields
        if (true) {
            setFormState('processing')

            try {
                await Promise.all(endpoints.map(el => (
                    fetchEndpoint(el, { ...formData, locale })
                ))) 

                handleSuccess()
            } catch (err) {
                console.error(err)
                handleError()
            }
        }
    }

    const closeModal = () => {
        setFormState('idle')
        setIsModalOpen(false)
        window.location.reload()
    }

    return (
    <>
    <form
        onSubmit={handleSubmit}
        className="
            w-full md:w-[90%] max-w-180
            px-4 py-4 md:p-8
            grid grid-cols-2 items-end gap-4 md:gap-8
            bg-main
            border border-gray-300 rounded-4xl shadow-img-sm"
    >
        {before}
        {fields.map((el, index) => (
            <FormInput
                key={index}
                label={el.label}
                inputId={el.id}
                type={el.type}
                onChange={handleInputChange}
                optional={el.optional}
                optionalLabel={t('optional')}
                className={el.className}
            />
        ))}
        <button
            type="submit"
            className={clsx(
                "w-full col-span-2 group",
                "py-4",
                "flex justify-center items-center",
                "bg-black dark:bg-br-white",
                "text-my-md text-br-white dark:text-black",
                "rounded-full"
            )}
        >
            {formState !== 'processing' && (
                <div className="flex justify-center items-center gap-3">
                    <span className="md:group-hover:pl-4 duration-200">
                        {t('requestSubmit')}
                    </span>
                    <CustomIcon
                        iconId="arrowR"
                        className="scale-110"
                    />
                </div>
            )}
            {formState === 'processing' && (
                <CustomIcon
                    iconId="spinner-two"
                    className="animate-spin-loop"
                />
            )}
        </button>
        {after}
    </form>
    <SubmissionModal
        isOpen={isModalOpen}
        state={modalState}
        onClose={closeModal}
        successTitleLabel={t('submitSuccessTitle')}
        successCopyLabel={t('submitSuccessCopy')}
        errorTitleLabel={t('submitErrorTitle')}
        errorCopyLabel={t('submitErrorCopy')}
    />
    </>
    )
}

export default FormTemplate
