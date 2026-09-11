interface Props {
	name: any;
	email: any;
	company: any;
	projectNeed: any;
	budget: any;
	timeline: any;
}

export default function EmailTemplate({ name, email, company, projectNeed, budget, timeline }: Props) {
	return (
	<div>
		<p>Name: {name}</p>
		<p>Email: {email}</p>
		<p>Company: {company}</p>
		<p>Project need: {projectNeed}</p>
		<p>Budget: {budget}</p>
		<p>Timeline: {timeline}</p>
	</div>
	)
}