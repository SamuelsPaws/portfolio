'use client'
import { useTranslations } from "next-intl"
import ContactItem from "./subcomponents/ContactItem"
import TechIcon from "../icons/TechIcon"
import { usePathname } from "next/navigation"
import { navLinksFort } from "@/data/nav"
import NavLink from "./subcomponents/NavLink"
import LowerFootLink from "./subcomponents/LowerFootLink"
import LinksColumn from "./subcomponents/LinksColumn"
import ColumnList from "./subcomponents/ColumnList"
import organization from "@/data/fortales/organization"
import ContactLink from "./subcomponents/ContactLink"
import formatPhoneEC from "@/lib/utils/formatPhoneEC"

const Footer = () => {
	const t = useTranslations('Reusable')
	const pathname = usePathname()
	const isSamPortfolio = pathname.split('/').includes('samuel-portfolio')

	if (isSamPortfolio) {
		return (
			<footer className="
				md:h-[600px] flex flex-col md:flex-row"
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
						{t('tech')}{isSamPortfolio && 'NIGGA'}
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
	
	return (
	<footer className="
		px-8 py-16
		md:px-16 md:py-16
		flex flex-col gap-8
		bg-br-gray-900"
	>
		{/* Content container */}
		<div className="
			w-full
			flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0"
		>
			{/* Emblem card */}
			<div className="
				w-full md:w-80 order-1 md:order-0
				flex flex-col items-center"
			>
				<img
					src="/assets/fortales-logo-light.svg"
					className="w-[40%] md:w-[60%] mb-8"
					alt="Logo de la empresa"
				/>
				<span className="
					mb-4
					text-my-2xl text-br-white text-center
					font-semibold tracking-wider"
				>
					FORTALES
				</span>
				<span className="text-my-md text-gray-300 text-center">
					{t('fortalesSlogan')}
				</span>
			</div>
			{/* Link columns */}
			<div className="
				w-full md:w-auto
				flex flex-col md:flex-row items-end md:items-start gap-8 md:gap-24"
			>
				<LinksColumn title={t('navigation')}>
					<ColumnList>
						{navLinksFort.map((el, index) => (
							<NavLink
								key={index}
								item={el}
							/>
						))}
					</ColumnList>
				</LinksColumn>
				<LinksColumn title={t('contact')}>
					<ColumnList>
						<ContactLink
							href={`mailto:${organization.email}`}
							label={organization.email}
							iconId="email"
						/>
						<ContactLink
							href={`tel:${organization.phone}`}
							label={formatPhoneEC(organization.phone)}
							iconId="phone"
						/>
					</ColumnList>
				</LinksColumn>
				{false && <LinksColumn title="Social media">
					<ColumnList>
						{navLinksFort.map((el, index) => (
							<NavLink
								key={index}
								item={el}
							/>
						))}
					</ColumnList>
				</LinksColumn>}
			</div>
			<div className="
				w-full md:w-110 self-stretch
				order-2
				p-8
				flex flex-col justify-between
				bg-br-gray-600
				border border-gray-500 rounded-2xl"
			>
				<div className="
					mb-4
					text-br-white text-my-lg font-semibold"
				>
					{t('freeQuoteTitle').toUpperCase()}
				</div>
				{/* Wrapper for between */}
				<div className="w-full flex flex-col items-start gap-8">
					<p className="w-full text-my-md text-gray-300">
						{t('freeQuoteCopy')}
					</p>
					<a
						href=""
						className="
							px-8 py-4
							bg-whatsapp-400
							text-br-white text-my-lg font-semibold
							rounded-full
							md:hover:scale-105 duration-400 ease-out"
					>
						{t('waCta')}
					</a>
				</div>
			</div>
		</div>
		{/* Separator */}
		<div className="w-full h-[1px] bg-br-gray-600" />
		{/* Lower foot */}
		<div className="
			w-full
			flex flex-col
			md:flex-row md:justify-between items-center gap-8"
		>
			<span className="text-myf-md text-gray-400 text-center md:text-left">
				© Fortales 2026. {t('allRights')}.
			</span>
			{/* Foot links */}
			<ul className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
				<LowerFootLink
					href="/"
					text={t('terms').toUpperCase()}
				/>
				<LowerFootLink
					href="/"
					text={t('privacy').toUpperCase()}
				/>
			</ul>
		</div>
	</footer>
	)
}

export default Footer