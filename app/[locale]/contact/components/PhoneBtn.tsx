'use client'

import { motion } from "motion/react"

const PhoneBtn = () => {
  return (
    <a
        href="tel:+593984892528"
        className="lg:w-fit block mx-auto"
    >
        <motion.div
            className="
                w-[80%] h-30 mx-auto
                lg:w-100 lg:h-40
                grid place-content-center
                bg-black
                rounded-2xl hover-shadow-sm"
            whileHover={{ y: -8, x: -2, }}
            transition={{ duration: 0.2, type: 'spring' }}
        >
            <span className="text-br-white text-3xl lg:text-4xl">
                Call Now
            </span>
        </motion.div>
    </a>
  )
}

export default PhoneBtn