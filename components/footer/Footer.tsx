import { useTranslations } from "next-intl"
import ContactItem from "./subcomponents/ContactItem"
import TechIcon from "../icons/TechIcon"

const Footer = () => {
	const t = useTranslations('Reusable')
	
	return (
    <footer className="
        lg:h-[600px] flex flex-col lg:flex-row"
    >
		{/* Div 1 */}
		<div className="
			lg:flex-1 py-16 lg:py-4
			flex flex-col gap-4 lg:gap-8 justify-center items-center
			bg-black"
		>
			<p className="text-xl lg:text-2xl text-br-white tracking-wider">
			{t('contactMe')}
			</p>
			<ContactItem
				href={`mailto:${'samsa' + 'ntba' + 'q@gmai' + 'l.com'}`}
				iconId="email"
				text="samsantbaq@gmail.com"
				newTab={false}
			/>
			<ContactItem
				href="https://github.com/SamuelsPaws?tab=repositories"
				iconId="github"
				text="SamuelsPaws"
				newTab={true}
			/>
			<ContactItem
				href="https://www.linkedin.com/in/samuel-baquero-779720231/"
				iconId="linkedin"
				text="Samuel Baquero"
				newTab={true}
			/>
			<ContactItem
				href="https://www.instagram.com/samsausa/"
				iconId="instagram"
				text="samsausa"
				newTab={true}
			/>
		</div>
		{/* Div 2 (tech) */}
		<div className="
			lg:flex-1 py-16 lg:py-4
			flex flex-col justify-center items-center
			bg-mywhite
			text-black"
		>
			<p className="
				mb-8 lg:mb-8
				text-xl lg:text-2xl text-black/60 tracking-wider"
			>
				{t('tech')}
			</p>
			{/* Divs with tech, one per row */}
			<div className="mb-4 select-none flex items-center gap-4 lg:gap-8">
				<TechIcon fileName="html" text="HTML" />
				<TechIcon fileName="ts" text="TypeScript" />
				<TechIcon fileName="js" text="JavaScript" />
				<div className="h-8 lg:h-16 w-px bg-black"></div>
				<TechIcon fileName="react" text="React.js" />
				<TechIcon fileName="next" text="Next.js" />
				<TechIcon fileName="node" text="Node.js" />
			</div>
			<div className="mb-4 select-none flex items-center gap-4 lg:gap-8">
				<TechIcon fileName="css" text="CSS" />
				<div className="h-8 lg:h-16 w-px bg-black"></div>
				<TechIcon fileName="tw" text="Tailwind CSS" />
			</div>
			<TechIcon fileName="py" text="Python" />
		</div>
	</footer>
	)
}

export default Footer