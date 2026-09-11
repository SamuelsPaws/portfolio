'use client'
import { _Translator, useTranslations } from "next-intl"
import FormInput from "./subcomponents/FormInput"
import CustomIcon from "@/components/CustomIcon"
import clsx from "clsx"
import { ChangeEvent, useState } from "react"
import SubmissionModal from "./subcomponents/SubmissionModal"
import { useAddOnsStore } from "@/lib/hooks/addons-state"
import { addOns } from "@/data/fortales/addons"
import { myPackages } from "@/data/fortales/packages"

type FormState =
    | 'idle'
    | 'processing'
    | 'success'
    | 'error';

interface FormData {
    name: string;
    email: string;
    company: string;
    phone: string;
}

interface FormPayload extends FormData {
    packageName: string;
    addOnsSelected: {
        slug: (typeof addOns)[number]['slug'],
        quantity: number | null
    }[];
}

const initialFormData = {
    name: '',
    email: '',
    company: '',
    phone: ''
}

interface Props {
    packageSlug: 'starter' | 'premium';
}

const SummaryForm = ({ packageSlug }: Props) => {
    const [formData, setFormData] = useState<FormData>(initialFormData)
    const [formState, setFormState] = useState<FormState>('idle')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalState, setModalState] = useState<'success' | 'error'>('success')
    const t = useTranslations('Reusable')
    const tH = useTranslations('FortHome')

    const addOnsState = useAddOnsStore((state) => state.addOns)
    const addOnsSelected = Array.from(
        Object.entries(addOnsState)).filter(el => el[1].enabled).map(el => {
            if ('quantity' in el[1]) {
                return {
                    slug: el[0] as (typeof addOns)[number]['slug'],
                    quantity: el[1].quantity
                }
            } else {
                return {
                    slug: el[0] as (typeof addOns)[number]['slug'],
                    quantity: null
                }
            }
        }
    )

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

        
        if (formData.name.length && formData.email.length) {
            setFormState('processing')

            try {
                const formPayload: FormPayload = {
                    ...formData,
                    packageName: myPackages[packageSlug].title.en,
                    addOnsSelected
                }

                const response = await fetch("/api/send-package-request", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formPayload),
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
            inputId="name"
            onChange={handleInputChange}
            label={t('formName')}
            className="col-span-2"
            optionalLabel={t('optional')}
        />
        <FormInput
            inputId="email"
            onChange={handleInputChange}
            label={t('formEmail')}
            className="col-span-2"
            optionalLabel={t('optional')}
        />
        <FormInput
            inputId="company"
            onChange={handleInputChange}
            label={t('formCompany')}
            className="col-span-2"
            optionalLabel={t('optional')}
            optional
        />
        <FormInput
            inputId="phone"
            onChange={handleInputChange}
            label={t('formPhone')}
            className="col-span-2"
            optionalLabel={t('optional')}
            optional
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
    </form>
    <SubmissionModal
        isOpen={isModalOpen}
        state={modalState}
        onClose={closeModal}
        successTitleLabel={tH('submitSuccessTitle')}
        successCopyLabel={tH('submitSuccessCopy')}
        errorTitleLabel={tH('submitErrorTitle')}
        errorCopyLabel={tH('submitErrorCopy')}
    />
    </>
    )
}

export default SummaryForm