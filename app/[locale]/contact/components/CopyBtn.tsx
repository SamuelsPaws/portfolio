'use client'

import clsx from "clsx"
import { useState } from "react"

const CopyBtn = ({ text }: { text: string }) => {
    const [recentlyClicked, setRecentlyClicked] = useState<boolean>(false)

    const applyRecenlyClicked = () => {
        setRecentlyClicked(true)
        setTimeout(() => {
            setRecentlyClicked(false)
        }, 3000)
    }

    const handleClick = async () => {
        if (!recentlyClicked) {
            try {
                await navigator.clipboard.writeText(text)
                applyRecenlyClicked()
            } catch (err) {
                console.error(err)
            }
        }
    }

  return (
    <button
        onClick={handleClick}
        className={clsx(
            "w-10 h-10",
            "grid place-content-center",
            recentlyClicked ? 'bg-gray-300' : 'bg-mywhite',
            "lg:hover:bg-gray-300",
            "border-2 border-black rounded-lg"
        )}
    >
        <i
            className={clsx(
                "fa lg:scale-75",
                recentlyClicked ? 'fa-check' : 'fa-copy'
            )}
            aria-hidden="true"
        ></i>
    </button>
  )
}

export default CopyBtn