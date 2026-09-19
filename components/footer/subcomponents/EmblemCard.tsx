interface Props {
    slogan: string;
}

const EmblemCard = ({ slogan }: Props) => {
    return (
    <div className="
        w-full md:w-[20%] md:max-w-80 order-1 md:order-0
        flex flex-col items-center"
    >
        <img
            src="/assets/fortales-logo-light.svg"
            className="w-[40%] md:w-[60%] mb-8"
            alt="Logo de la empresa"
        />
        <span className="
            mb-4
            text-my-2xl text-br-white text-center
            font-semibold tracking-wider"
        >
            FORTALES
        </span>
        <span className="text-my-md text-gray-300 text-center">
            {slogan}
        </span>
    </div>
    )
}

export default EmblemCard