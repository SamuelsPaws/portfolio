import organization from "@/data/fortales/organization"
import CustomIcon from "./CustomIcon"

const WhatsappFloat = () => {
    return (
    <a
        href={`https://wa.me/${organization.phone}?`}
        target="_blank"
        rel="noopener noreferrer"
        className="
            fixed right-8 bottom-8 z-[100]
            w-12 h-12
            lg:w-12 lg:h-12
            grid place-content-center
            text-br-white text-3xl lg:text-4xl
            bg-green-500 rounded-full shadow-md"
        aria-label="Chat on WhatsApp"
    >
        <CustomIcon
            iconId="whatsapp"
            className=""
        />
    </a>
    )
}

export default WhatsappFloat