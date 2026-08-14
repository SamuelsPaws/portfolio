import React from "react";

interface ProcessStepCardProps {
    title: string;
    number: string;
    children: React.ReactNode;
}

const ProcessStepCard = ({ title, number, children }: ProcessStepCardProps) => {
  return (
    <div className="
        min-h-32 w-[90%] p-8
        border border-black rounded-2xl shadow-md"
    >
        <p className="mb-4 text-2xl font-bold">
            <span className="px-2 mr-3 bg-black text-white rounded-full">{number}</span>
            {title}
        </p>
        {children}
    </div>
  )
}

export default ProcessStepCard