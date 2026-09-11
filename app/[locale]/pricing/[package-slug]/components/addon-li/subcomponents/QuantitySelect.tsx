import { AddOnsState, useAddOnsStore } from "@/lib/hooks/addons-state";
import QuantityBtn from "./QuantityBtn";
import { addOns } from "@/data/fortales/addons";
import { AddOnState } from "@/lib/types/fortales/addons";

interface Props {
    addOnState: AddOnState;
    addOnSlug: (typeof addOns)[number]['slug'];
}

const QuantitySelect = ({ addOnState, addOnSlug }: Props) => {
    const setAddOnQuantity = useAddOnsStore((state) => state.setAddOnQuantity)

    const increaseAddOnQuantity = () => {
        if (addOnState.enabled) {
            if (addOnState.quantity !== undefined) {
                setAddOnQuantity(addOnSlug, addOnState.quantity + 1)
            }
        }
    }

    const decreaseAddOnQuantity = () => {
        if (addOnState.enabled) {
            if (addOnState.quantity !== undefined) {
                if (addOnState.quantity > 1) {
                    setAddOnQuantity(addOnSlug, addOnState.quantity - 1)
                }
            }
        }
    }

    return (
    <div className="
        h-6 md:h-8 relative
        flex
        rounded-sm border border-gray-400 overflow-hidden"
    >
        {/* Locked overlay */}
        {!addOnState.enabled && (
            <div className="z-10 absolute inset-0 bg-white/50" />
        )}
        <QuantityBtn
            increases={false}
            setter={decreaseAddOnQuantity}
        />
        <div className="
            w-4 md:w-6 h-full
            flex justify-center items-center
            bg-br-white"
        >
            <span className="text-my-sm text-secondary">
                {addOnState.quantity}
            </span>
        </div>
        <QuantityBtn
            increases={true}
            setter={increaseAddOnQuantity}
        />
    </div>
    )
}

export default QuantitySelect