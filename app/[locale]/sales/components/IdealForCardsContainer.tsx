import { motion } from "motion/react"
import IdealForCard from "./IdealForCard"
import IdealForCardMob from "./IdealForCardMob"

const IdealForCardsContainer = () => {
    const containerVariants = {
        hidden: {},
        visible: {}
    }
    
    const mobContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                duration: 1
            }
        }
    }

    const centerItemVariants = (mirrored: boolean) => {
        const mirroredIndex = mirrored ? -1 : 1;
        return {
        hidden: {
            opacity: 0,
            x: 20 * mirroredIndex
        },
        visible: {
            opacity: 1,
            x: 0
        }
    }}

    const edgeItemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

  return (
    <>
    {/* Desktop */}
    <motion.div
        className="
        w-fit mx-auto
        hidden lg:flex justify-center gap-8 flex-wrap"
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
    >
        <IdealForCard
            variants={edgeItemVariants}
            isEdge={true}
            imgSrc="/assets/tour-operator.webp"
            imgAlt="nigga"
            bizName="Tour Operators"
            color="gray"
        />
        <IdealForCard
            variants={centerItemVariants(true)}
            isEdge={false}
            imgSrc="/assets/travel-agency.webp"
            imgAlt="nigga"
            bizName="Travel Agencies"
            color="orange"
        />
        <IdealForCard
            variants={centerItemVariants(false)}
            isEdge={false}
            imgSrc="/assets/hotel.webp"
            imgAlt="nigga"
            bizName="Hotels & Acommodation Providers"
            color="blue"
        />
        <IdealForCard
            variants={edgeItemVariants}
            isEdge={true}
            imgSrc="/assets/adventure.webp"
            imgAlt="nigga"
            bizName="Adventure & Activity Providers"
            color="green"
        />
    </motion.div>
    {/* Mobile */}
    <motion.div
        className="
        w-full mx-auto
        flex lg:hidden justify-center gap-8 flex-wrap"
        variants={mobContainerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{
            once: true
        }}
    >
        <IdealForCardMob
            imgSrc="/assets/tour-operator.webp"
            imgAlt="nigga"
            bizName="Tour Operators"
            color="gray"
        />
        <IdealForCardMob
            imgSrc="/assets/travel-agency.webp"
            imgAlt="nigga"
            bizName="Travel Agencies"
            color="orange"
        />
        <IdealForCardMob
            imgSrc="/assets/hotel.webp"
            imgAlt="nigga"
            bizName="Hotels & Acommodation Providers"
            color="blue"
        />
        <IdealForCardMob
            imgSrc="/assets/adventure.webp"
            imgAlt="nigga"
            bizName="Adventure & Activity Providers"
            color="green"
        />
    </motion.div>
    </>
  )
}

export default IdealForCardsContainer