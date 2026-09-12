import { CtaFormSubmission } from "@/lib/types/emailTemplates";

export default function EmailTemplate({
	name
}: CtaFormSubmission) {
	return (
	<div>
		<p>Hi {name}!</p>
		<p>Thanks for contacting Fortales. We will review your request and get back to you as soon as possible.</p>
	</div>
	)
}