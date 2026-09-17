import { ContactFormSumbission, CtaFormSubmission } from "@/lib/types/emailTemplates";

export default function EmailTemplate({
	name,
	email,
	company,
	projectNeed,
	message
}: ContactFormSumbission) {
	return (
	<div>
		<p>Name: {name}</p>
		<p>Email: {email}</p>
		{company && (
			<p>Company: {company}</p>
		)}
		<p>Project need: {projectNeed}</p>
		{message && (
			<p>Message: {message}</p>
		)}
	</div>
	)
}