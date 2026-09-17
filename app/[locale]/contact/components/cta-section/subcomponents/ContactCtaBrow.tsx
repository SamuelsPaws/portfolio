interface Props {
    text: string;
}

const ContactCtaBrow = ({ text }: Props) => {
    return (
    <div className="
        w-full max-w-200 mx-auto mb-4 md:mb-8
        flex items-center justify-center gap-3 md:gap-4"
    >
        <div className="
            w-8 md:w-16 h-[1px] shrink-0
            bg-br-orange-main"
        />
        <span className="min-w-0 text-center text-my-sm md:text-my-md text-br-orange-main font-semibold">
            {text}
        </span>
        <div className="
            w-8 md:w-16 h-[1px] shrink-0
            bg-br-orange-main"
        />
    </div>
    )
}

export default ContactCtaBrow