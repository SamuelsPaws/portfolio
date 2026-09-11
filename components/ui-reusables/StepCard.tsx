import CustomIcon, { IconId } from "@/components/CustomIcon";

interface Props {
    iconId: IconId;
    num: number;
    title: string;
    copy: string;
    iconCn?: string;
}

const StepCard = ({ iconId, num, title, copy, iconCn }: Props) => {
    return (
    <div className="
        w-full md:w-100
        p-8
        flex flex-col
        dark:bg-br-gray-800
        border border-gray-300 rounded-4xl shadow-img-sm"
    >
        {/* Upper part */}
        <div className="
            w-full mb-8
            flex justify-between items-center"
        >
            <div className="
                w-12 aspect-square
                flex justify-center items-center
                bg-gray-200 dark:bg-br-gray-600
                text-4xl text-br-orange-main-desat
                rounded-full"
            >
                <CustomIcon
                    iconId={iconId}
                    className={iconCn}
                />
            </div>
            <div className="
                w-8
                flex justify-center"
            >
                <span className="text-my-lg text-br-orange-main font-semibold">
                    {num}
                </span>
            </div>
        </div>
        <h2 className="mb-4 text-my-2xl text-main font-['Source_Serif_4']">
            {title}
        </h2>
        <p className="text-secondary text-my-md">
            {copy}
        </p>
    </div>
    )
}

export default StepCard