'use client'
import { useAddOnsStore } from "@/lib/hooks/addons-state"

interface Props {
    label: string;
    placeholder: string;
}

const CustomRequestField = ({ label, placeholder }: Props) => {
    const customRequest = useAddOnsStore((state) => state.customRequest)
    const setCustomRequest = useAddOnsStore((state) => state.setCustomRequest)

    return (
    <>
        <label htmlFor="custom-request" className="
            mt-4 md:mt-8 mb-4
            block text-my-md text-secondary"
        >
            {label}
        </label>
        <textarea
            name="custom-request"
            id="custom-request"
            value={customRequest}
            onChange={(event) => setCustomRequest(event.target.value)}
            className="
                w-full
                p-4
                bg-main
                text-my-md text-secondary
                border border-gray-300 rounded-2xl"
            placeholder={placeholder}
        />
    </>
    )
}

export default CustomRequestField
