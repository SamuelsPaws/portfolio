import clsx from "clsx";

export type FormFieldType = 'text' | 'email' | 'textarea' | 'number' | 'checkbox' | 'radio';
export type FormValue = string | boolean | string[];

export interface FormFieldOption {
    label: string;
    value: string;
}

interface BaseFormInputDefinition {
    id: string;
    label: string;
    optional?: boolean;
    className?: string;
}

export type FormInputDefinition = BaseFormInputDefinition & (
    | {
        type?: Exclude<FormFieldType, 'checkbox' | 'radio'>;
        options?: never;
    }
    | {
        type: 'checkbox';
        options?: FormFieldOption[];
    }
    | {
        type: 'radio';
        options: FormFieldOption[];
    }
);

type Props = FormInputDefinition & {
    domId?: string;
    value: FormValue;
    onChange: (value: FormValue) => void;
    optionalLabel: string;
};

const FormInput = ({
    label,
    id: inputId,
    domId = inputId,
    value,
    onChange,
    className,
    options,
    optional = false,
    type = 'text',
    optionalLabel,
}: Props) => {
    const oneLineInputCn = `
        px-4 py-2
        text-myf-md text-secondary
        border border-gray-300 rounded-full
    `;
    const stringValue = typeof value === 'string' ? value : '';
    const selectedOptions = Array.isArray(value) ? value : [];

    const labelContent = (
        <>
            <span>{label}</span>
            {optional && (
                <span className="text-secondary">
                    {` (${optionalLabel})`}
                </span>
            )}
        </>
    );

    if (type === 'checkbox' && !options?.length) {
        return (
            <div className={clsx("w-full", className)}>
                <label
                    htmlFor={domId}
                    className="flex items-start gap-4 text-myf-md text-main font-semibold cursor-pointer"
                >
                    <input
                        id={domId}
                        name={inputId}
                        type="checkbox"
                        checked={value === true}
                        required={!optional}
                        onChange={(event) => onChange(event.target.checked)}
                        className="w-5 h-5 shrink-0 accent-br-orange-main cursor-pointer"
                    />
                    <span>{labelContent}</span>
                </label>
            </div>
        );
    }

    if (type === 'checkbox' || type === 'radio') {
        return (
            <fieldset
                className={clsx("w-full flex flex-col gap-4", className)}
                aria-required={!optional}
            >
                <legend className="mb-4 text-myf-md text-main font-semibold">
                    {labelContent}
                </legend>
                <div className="flex flex-col gap-4">
                    {options?.map((option, index) => {
                        const optionId = `${domId}-${index}`;
                        const checked = type === 'radio'
                            ? stringValue === option.value
                            : selectedOptions.includes(option.value);

                        return (
                            <label
                                key={option.value}
                                htmlFor={optionId}
                                className="flex items-center gap-4 text-myf-md text-secondary cursor-pointer"
                            >
                                <input
                                    id={optionId}
                                    name={inputId}
                                    type={type}
                                    value={option.value}
                                    checked={checked}
                                    required={
                                        !optional && (
                                            type === 'radio'
                                            || (index === 0 && selectedOptions.length === 0)
                                        )
                                    }
                                    onChange={(event) => {
                                        if (type === 'radio') {
                                            onChange(event.target.value);
                                            return;
                                        }

                                        onChange(
                                            event.target.checked
                                                ? [...selectedOptions, option.value]
                                                : selectedOptions.filter(item => item !== option.value)
                                        );
                                    }}
                                    className="w-5 h-5 shrink-0 accent-br-orange-main cursor-pointer"
                                />
                                <span>{option.label}</span>
                            </label>
                        );
                    })}
                </div>
            </fieldset>
        );
    }

    return (
        <div className={clsx("w-full flex flex-col gap-4", className)}>
            <label
                htmlFor={domId}
                className="text-myf-md text-main font-semibold"
            >
                {labelContent}
            </label>
            {type === 'textarea' ? (
                <textarea
                    id={domId}
                    name={inputId}
                    value={stringValue}
                    required={!optional}
                    onChange={(event) => onChange(event.target.value)}
                    className="
                        h-16
                        px-4 py-2
                        text-myf-md text-secondary
                        border border-gray-300 rounded-2xl"
                />
            ) : (
                <input
                    id={domId}
                    name={inputId}
                    type={type}
                    value={stringValue}
                    required={!optional}
                    onChange={(event) => onChange(event.target.value)}
                    className={oneLineInputCn}
                />
            )}
        </div>
    );
};

export default FormInput;
