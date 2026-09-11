'use client'
import { _Translator, useTranslations } from "next-intl"
import FormInput from "./FormInput"
import CustomIcon from "@/components/CustomIcon"
import clsx from "clsx"
import { ChangeEvent, useState } from "react"
import SubmissionModal from "./SubmissionModal"

type FormState =
    | 'idle'
    | 'processing'
    | 'success'
    | 'error';

type FormData = {
    name: string,
    email: string,
    company: string,
    projectNeed: string,
    budget: string,
    timeline: string
}

const initialFormData = {
    name: '',
    email: '',
    company: '',
    projectNeed: '',
    budget: '',
    timeline: '',
}

const CtaForm = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData)
    const [formState, setFormState] = useState<FormState>('idle')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalState, setModalState] = useState<'success' | 'error'>('success')
    const t = useTranslations('FortHome')

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
        setFormData(initialFormData)
    }

    const handleError = () => {
        setFormState('error')
        setModalState('error')
        setIsModalOpen(true)
        setFormData(initialFormData)
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        
        if (formData.name.length && formData.email.length && formData.projectNeed.length) {
            setFormState('processing')

            try {
                const response = await fetch("/api/send", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })
    
                if (!response.ok) {
                    handleError()
                    throw new Error("Failed to submit request.");
                }
    
                // const data = await response.json();
                handleSuccess()
            } catch (err) {
                console.error(err);
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
            w-full md:w-[90%]
            px-8 py-8 md:p-8
            grid grid-cols-2 items-end gap-4 md:gap-8
            bg-main
            border border-gray-300 rounded-4xl shadow-img-sm"
    >
        <FormInput
            label={t('formName')}
            inputId="name"
            onChange={handleInputChange}
            optionalLabel={t('optional')}
            className="col-span-2 md:col-span-1"
        />
        <FormInput
            label={t('formEmail')}
            inputId="email"
            onChange={handleInputChange}
            type="email"
            optionalLabel={t('optional')}
            className="col-span-2 md:col-span-1"
        />
        <FormInput
            label={t('formCompany')}
            inputId="company"
            onChange={handleInputChange}
            className="col-span-2"
            optional
            optionalLabel={t('optional')}
        />
        <FormInput
            label={t('formNeed')}
            inputId="projectNeed"
            onChange={handleInputChange}
            className="col-span-2"
            type="textarea"
            optionalLabel={t('optional')}
        />
        <FormInput
            label={t('formBudget')}
            inputId="budget"
            onChange={handleInputChange}
            optional
            optionalLabel={t('optional')}
            className="col-span-2 md:col-span-1"
        />
        <FormInput
            label={t('formTimeline')}
            inputId="timeline"
            onChange={handleInputChange}
            optional
            optionalLabel={t('optional')}
            className="col-span-2 md:col-span-1"
        />
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
                        {t('formSubmit')}
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

export default CtaForm