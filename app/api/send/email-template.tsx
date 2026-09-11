import { CtaFormSubmission } from "@/lib/types/emailTemplates";

export default function EmailTemplate({
	name,
	email,
	company,
	projectNeed,
	budget,
	timeline
}: CtaFormSubmission) {
	return (
	<div>
		<p>Name: {name}</p>
		<p>Email: {email}</p>
		{company && (
			<p>Company: {company}</p>
		)}
		<p>Project need: {projectNeed}</p>
		{budget && (
			<p>Budget: {budget}</p>
		)}
		{timeline && (
			<p>Timeline: {timeline}</p>
		)}
	</div>
	)
}