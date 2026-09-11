import { addOns } from "@/data/fortales/addons";
import { PackageFormSubmission } from "@/lib/types/emailTemplates";

export default function EmailTemplate({
	name,
	email,
	company,
	phone,
	packageName,
	addOnsSelected
}: PackageFormSubmission) {
	return (
	<div>
		<p>Name: {name}</p>
		<p>Email: {email}</p>
		{company && (
			<p>Company: {company}</p>
		)}
		{phone && (
			<p>Phone: {phone}</p>
		)}
		<p>Package selected: {packageName}</p>
		<p>Add-ons selected:</p>
		<ul>
			{addOnsSelected.map((el, index) => {
				const addOn = addOns.find(a => a.slug === el.slug)

				if (addOn) {
					return (
						<li key={index}>
							<span>{addOn.title.en}</span>
							{el.quantity !== null && (
								<span>{` - Quantity: ${el.quantity}`}</span>
							)}
						</li>
					)
				}

				return null
			})}
		</ul>
	</div>
	)
}