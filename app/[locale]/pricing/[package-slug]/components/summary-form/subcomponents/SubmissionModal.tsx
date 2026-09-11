import CustomIcon from "@/components/CustomIcon";
import clsx from "clsx";
import { useEffect } from "react";

interface Props {
    isOpen: boolean;
    state: 'success' | 'error';
    onClose: () => void;
    successTitleLabel: string;
    successCopyLabel: string;
    errorTitleLabel: string;
    errorCopyLabel: string;
}

const SubmissionModal = ({
    isOpen,
    state,
    onClose,
    successTitleLabel,
    successCopyLabel,
    errorTitleLabel,
    errorCopyLabel
}: Props) => {
    useEffect(() => {
        if (!isOpen) return

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
    <div>
        {/* Backdrop */}
        <div
            onClick={onClose}
            className="
                fixed top-0 left-0 z-[9900]
                w-screen h-screen
                bg-black/80"
        />
        {/* Modal area */}
        <div className={clsx(
            "fixed top-1/2 left-1/2 -translate-1/2 z-[9950]",
            "w-[80vw] h-[70vh] md:w-[40vw] md:h-[50vh]",
            "p-8",
            "flex flex-col items-center justify-center gap-4 md:gap-8",
            "bg-br-white",
            "rounded-xl md:rounded-2xl overflow-hidden shadow-lg",
            false && "animate-fade-in-up-1200"
        )}>
            {/* Check */}
            <div className={clsx(
                "flex justify-center items-center",
                "text-[120px] text-center",
                state === 'success' ? "text-green-500" : "text-red-500"
            )}>
                <CustomIcon
                    iconId={state === 'success' ? "check-solid" : "x-solid"}
                />
            </div>
            {/* Title */}
            <p className="text-2xl md:text-4xl text-black text-center font-semibold">
                {state === 'success' ? successTitleLabel : errorTitleLabel}
            </p>
            {/* Copy */}
            <p className="text-myf-md text-secondary text-center">
                {state === 'success' ? successCopyLabel : errorCopyLabel}
            </p>
            <button
                onClick={onClose}
                className="
                    absolute top-4 right-4
                    w-8 aspect-square
                    flex justify-center items-center
                    text-3xl text-gray-600"
            >
                <CustomIcon
                    iconId="x"
                    className="scale-105"
                />
            </button>
        </div>
    </div>
    )
}

export default SubmissionModal