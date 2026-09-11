import clsx from "clsx";
import { ChangeEvent } from "react";

interface Props {
    label: string;
    inputId: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
    optional?: boolean;
    type?: 'text' | 'email' | 'textarea' | 'number';
    optionalLabel: string;
}

const FormInput = ({
    label,
    inputId,
    onChange,
    className,
    optional = false,
    type = 'text',
    optionalLabel
}: Props) => {
    const oneLineInputCn = `
        px-4 py-2
        text-myf-md text-secondary
        border border-gray-300 rounded-full
    `

    const textInputComponent = (
        <input
            id={inputId}
            name={inputId}
            type="text"
            onChange={onChange}
            className={oneLineInputCn}
        />
    )
    
    const emailInputComponent = (
        <input
            id={inputId}
            name={inputId}
            onChange={onChange}
            type="email"
            className={oneLineInputCn}
        />
    )
    
    const textAreaComponent = (
        <textarea
            id={inputId}
            name={inputId}
            onChange={onChange}
            className="
                h-16
                px-4 py-2
                text-myf-md text-secondary
                border border-gray-300 rounded-xl"
        />
    )
    
    const getInputComponent = (): React.ReactNode => {
        switch (type) {
            case 'text':
                return textInputComponent;
            case 'email':
                return emailInputComponent;
            case 'textarea':
                return textAreaComponent;
            default:
                return textInputComponent;
        }
    }

    return (
    <div className={clsx(
        "w-full",
        "flex flex-col gap-4",
        className
    )}>
        <label
            htmlFor={inputId}
            className="text-myf-md text-main font-semibold"
        >
            <span>{label}</span>
            {optional && (
                <span className="text-secondary">
                    {` (${optionalLabel})`}
                </span>
            )}
        </label>
        {getInputComponent()}
    </div>
    )
}

export default FormInput