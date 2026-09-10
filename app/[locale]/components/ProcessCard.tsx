import clsx from "clsx";

interface Props {
    title: string;
    number: number;
    text: string;
    place: string;
}

const ProcessCard = ({ title, number, text, place }: Props) => {
    return (
    <div className={clsx(
        "w-[75%]",
        place,
        "flex flex-col",
        "rounded-4xl overflow-hidden shadow-img-sm"
    )}>
        {/* Upper part */}
        <div className="
            w-full p-8
            flex items-center gap-4
            bg-black dark:bg-br-gray-800"
        >
            {/* Number */}
            <div className="
                w-8 aspect-square
                flex justify-center items-center
                bg-br-white
                text-black text-my-lg font-semibold
                rounded-full"
            >
                <span>{number}</span>
            </div>
            {/* Title */}
            <h3 className="flex-1 text-br-white text-my-xl font-semibold">
                {title}
            </h3>
        </div>
        {/* Lower part */}
        <div className="
            w-full p-8
            bg-br-white dark:bg-br-gray-600
            border-x border-b border-gray-400 dark:border-transparent rounded-b-4xl"
        >
            <p className="text-main text-my-md text-left">
                {text}
            </p>
        </div>
    </div>
    )
}

export default ProcessCard