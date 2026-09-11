import { Resend } from 'resend';
import EmailTemplate from './email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, company, projectNeed, budget, timeline } = body
        
        const { data, error } = await resend.emails.send({
            from: 'Fortales Automatic <automatic@fortal.es>',
            to: ['info@fortal.es'],
            subject: 'Form Submission from Website',
            react: <EmailTemplate name={name} email={email} company={company} projectNeed={projectNeed} budget={budget} timeline={timeline} />,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}