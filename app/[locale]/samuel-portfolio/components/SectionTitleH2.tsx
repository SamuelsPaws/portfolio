import clsx from "clsx"
import React from "react"

const SectionTitleH2 = ({ children, textColor }: { children: React.ReactNode, textColor: string }) => {
  return (
    <h2 className={clsx(
        "mb-16 lg:mb-32",
        "text-3xl lg:text-5xl font-semibold",
        textColor
    )}>
        {children}
    </h2>
  )
}

export default SectionTitleH2