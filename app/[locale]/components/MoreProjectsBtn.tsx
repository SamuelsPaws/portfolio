'use client'

import { motion } from "motion/react"
import Link from "next/link"

const MoreProjectsBtn = ({ href, className }: { href: string, className: string }) => {
  return (
    <Link href={href} className={className}>
        <motion.div
            className="
                px-8 py-4
                bg-black
                text-mywhite text-xl lg:text-2xl font-semibold
                rounded-full hover-shadow-sm"
            whileHover={{ y: -4, x: -1, }}
            transition={{ duration: 0.2, type: 'spring' }}
        >
            See More Projects
        </motion.div>
    </Link>
  )
}

export default MoreProjectsBtn