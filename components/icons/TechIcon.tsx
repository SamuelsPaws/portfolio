import Image from "next/image"

const TechIcon = ({ fileName, text }: { fileName: string, text: string }) => {
  return (
    <div className="
      w-8 lg:w-12 xl:w-16
      flex flex-col gap-1 justify-center items-center"
    >
      <div className="w-full aspect-square relative">
        <Image
          src={`/assets/${fileName}.svg`}
          fill
          sizes="100%"
          alt={text}
        />
      </div>
      <span className="text-[8px] xl:text-sm text-center">
        {text}
      </span>
    </div>
  )
}

export default TechIcon