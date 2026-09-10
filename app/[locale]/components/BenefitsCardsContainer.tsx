import BenefitsCard from "./BenefitsCard";

const BenefitsCardsContainer = () => {
  return (
    <div className="
        w-[80%] mx-auto
        grid grid-cols-2 gap-8 auto-rows-[minmax(100px,auto)] place-items-center"
    >
        <BenefitsCard
            leftOrRight="left"
            headline="Online booking ready websites"
            description="Possibility for integrated booking engines or reservation systems."
        />
        <div className="w-full h-full"></div>
        <BenefitsCard
            leftOrRight="right"
            headline="Designed for travelers"
            description="Mobile-first layouts optimized for international visitors."
        />
        <BenefitsCard
            leftOrRight="left"
            headline="Search Engine Optimization for tourism searches"
            description="Get found when travelers search for experiences."
        />
        <BenefitsCard
            leftOrRight="right"
            headline="Fast loading worldwide"
            description="Optimized performance for users browsing from anywhere."
        />
    </div>
  )
}

export default BenefitsCardsContainer