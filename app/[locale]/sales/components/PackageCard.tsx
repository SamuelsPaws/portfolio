import clsx from "clsx";

const colors = {
    black: {
        border: 'border-black',
        bottom: 'bg-black',
        title: 'text-black',
    },
    green: {
        border: 'border-[#0a4]',
        bottom: 'bg-[#0a4]',
        title: 'text-[#093]'
    }
}

type ColorKey = keyof typeof colors;

interface PackageCardProps {
    children: React.ReactNode;
    title: string;
    price: number;
    color: ColorKey;
}

const PackageCard = ({ children, title, color, price }: PackageCardProps) => {
  return (
    <div
        className={clsx(
            "w-[380px] h-[560px] p-8 flex flex-col justify-between items-start bg-white border rounded-2xl shadow-md overflow-hidden",
            colors[color].border
        )}
    >
        {/* Upper part */}
        <div className="
            flex-1
            flex flex-col"
        >
            <p className={clsx("mb-8 text-3xl font-semibold tracking-wide", colors[color].title)}>{title}</p>
            <p className="text-2xl font-semibold">${price.toString()}</p>
            <ul className="flex-1 flex flex-col justify-center gap-2 text-md">
                {children}
            </ul>
        </div>
        {/* Lower part with the button */}
        <button
            className={clsx(
                "px-8 py-4 text-[#fafafa] text-lg rounded-full",
                colors[color].bottom
            )}
        >
            Get started<i className="fa fa-arrow-right ml-2 scale-90" aria-hidden="true"></i>
        </button>
    </div>
  )
}

export default PackageCard