import clsx from "clsx";

interface Props {
    label: string;
    inputId: string;
    className?: string;
    optional?: boolean;
    type?: 'text' | 'email' | 'textarea' | 'number';
    optionalLabel: string;
}

const FormInput = ({ label, inputId, className, optional = false, type = 'text', optionalLabel }: Props) => {
    const oneLineInputCn = `
        px-4 py-2
        text-myf-md text-secondary
        border border-gray-300 rounded-full
    `

    const textInputComponent = (
        <input
            id={inputId}
            type="text"
            className={oneLineInputCn}
        />
    )
    
    const emailInputComponent = (
        <input
            id={inputId}
            type="email"
            className={oneLineInputCn}
        />
    )
    
    const textAreaComponent = (
        <textarea
            id={inputId}
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